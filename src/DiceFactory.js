"use strict";
import {DicePreset} from './DicePreset.js'
import {MATERIALTYPES} from "./const/materialtypes"
import {DICE_GEOM} from "./const/dice"
import { applyGlow, glowLevel } from "./glow.js"
import { shadeOf } from "./lightGlow.js"
import { applyDepthSettings } from "./materialDepth.js"
import { BoundedTextureCache, addMergedGroup, faceTextureSize } from "./gpuCache.js"
import { canvasFont, centerGlyphMetrics, faceLayoutFor, fitGlyphSize, resolveEdgeColor } from "./faceStyle.js"
import { paintProceduralTexture, proceduralPatternOf } from "./proceduralTextures.js"
import { applyDiceShader, resolveEffect, setEffectLabelMap } from "./diceShaders.js"
import { d4LabelTables, paintFaceIcon, parseFaceIcon } from "./faceIcons.js"

import * as THREE from "three"
import * as CANNON from "cannon-es"

const defaultConfig = {
	baseScale: 100,
	bumpMapping: true
}

class DiceFactory {
	static dice = {}
	constructor(options) {
		// this.dice = {};
		this.geometries = {};

		this.materials_cache = new BoundedTextureCache();
		this.cache_hits = 0;
		this.cache_misses = 0;

		this.label_color = '';
		this.dice_color = '';
		this.edge_color = '';
		this.label_outline = '';
		this.label_font = '';
		this.dice_texture = '';
		this.dice_material = '';
		this.dice_effect = '';
		this.shaderTime = { value: 0 };

		this.material_options = {
			specular: 0xffffff,
			color: 0xb5b5b5,
			shininess: 5,
			flatShading: true
		};

		Object.assign(this, defaultConfig, options)
	}

	updateConfig(options = {}){
		const nextScale = options.baseScale ?? options.scale;
		Object.assign(this, options);
		if (nextScale && nextScale !== this._builtScale) {
			this.baseScale = nextScale;
			this.scaleGeometry();
		}
	}

	setBumpMapping(bumpMapping){
		this.bumpMapping = bumpMapping;
		this.materials_cache.clear();
	}

	/**
	 * LoreWeaver fork: the same die with its own face labels, such as a d6 whose 1 shows "M". Only what's drawn
	 * changes: the die's values, and so its results, stay the same. d4s keep their own labels.
	 * @param {DicePreset} diceobj - The die.
	 * @param {Array<string>|null} faces - A label for each face, lowest value first.
	 * @returns {DicePreset} A labelled copy, or the die itself when no labels are given.
	 */
	labelledPreset(diceobj, faces) {
		if (!Array.isArray(faces) || !faces.length) return diceobj;
		if (diceobj.shape === 'd4') {
			const tables = d4LabelTables(faces);
			return tables ? Object.assign(Object.create(Object.getPrototypeOf(diceobj)), diceobj, { labels: tables }) : diceobj;
		}
		const blanks = ['d2', 'd10'].includes(diceobj.shape) ? [''] : ['', ''];
		return Object.assign(Object.create(Object.getPrototypeOf(diceobj)), diceobj, { labels: [...blanks, ...faces] });
	}

	// returns a dicemesh (THREE.Mesh) object
	// LoreWeaver fork: labels, optional, gives this one die its own face labels (see labelledPreset).
	create(type, _colorData, labels = null) {
		let diceobj = this.get(type);
		if (!diceobj) return null;
		const shown = this.labelledPreset(diceobj, labels);

		let geom = this.geometries[type];
		if(!geom) {
			geom = this.createGeometry(diceobj.shape, diceobj.scale * this.baseScale);
			this.geometries[type] = geom;
			this._builtScale = this.baseScale;
		}
		if (!geom) return null;

		this.setMaterialInfo();

		let dicemesh = new THREE.Mesh(geom, this.createMaterials(shown, this.baseScale / 2, 1.0));
		dicemesh.userData = { ...(dicemesh.userData || {}), shownPreset: shown };
		dicemesh.result = [];
		dicemesh.shape = diceobj.shape;
		dicemesh.rerolls = 0;
		dicemesh.resultReason = 'natural';
		dicemesh.mass = diceobj.mass

		dicemesh.getFaceValue = function() {
			// callback function. scope of this = Mesh
			let reason = this.resultReason;
			let vector = new THREE.Vector3(0, 0, this.shape == 'd4' ? -1 : 1);

			let closest_face, closest_angle = Math.PI * 2;
			let normals = this.geometry.getAttribute('normal').array;
			for (let i = 0, l = this.geometry.groups.length; i < l; ++i) {
				let face = this.geometry.groups[i];
				if (face.materialIndex == 0) continue;

				// Read the flat face normal from this group's first vertex (works with merged triangle groups).
				let startVertex = face.start * 3;
				let normal = new THREE.Vector3(normals[startVertex], normals[startVertex + 1], normals[startVertex + 2]);
				let angle = normal.clone().applyQuaternion(this.body.quaternion).angleTo(vector);
				if (angle < closest_angle) {
					closest_angle = angle;
					closest_face = face;
				}
			}
			let matindex = closest_face.materialIndex - 1;
			let offset = 2

			const diceobj = DiceFactory.dice[this.notation.type];

			if (this.shape == 'd4') {
				let labelindex2 = ((matindex-1) == 0) ? 5 : matindex;

				return {value: matindex, label: diceobj.labels[matindex-1][labelindex2][0], reason: reason};
			}

			if (['d10','d2'].includes(this.shape)) {
				matindex += 1;
				offset -= 1;
			}

			let value = diceobj.values[((matindex-1) % diceobj.values.length)];
			let label = diceobj.labels[(((matindex-1) % (diceobj.labels.length-2))+offset)];
			
			return {value: value, label: label, reason: reason};
		}

		dicemesh.storeRolledValue = function(reason) {
			this.resultReason = reason || this.resultReason;
			this.result.push(this.getFaceValue());
		}

		dicemesh.getLastValue = function() {
			if (!this.result || this.result.length < 1) return {value: undefined, label: '', reason: ''};

			return this.result[this.result.length-1];
		}

		dicemesh.ignoreLastValue = function(ignore) {
			let lastvalue = this.getLastValue();
			if (lastvalue.value === undefined) return;

			lastvalue.ignore = ignore;
			this.setLastValue(lastvalue);
		}

		dicemesh.setLastValue = function(result) {
			if (!this.result || this.result.length < 1) return;
			if (!result || result.length < 1) return;

			return this.result[this.result.length-1] = result;
		}

		if (diceobj.color) {
			dicemesh.material[0].color = new THREE.Color(diceobj.color);
			dicemesh.material[0].emissive = new THREE.Color(diceobj.color);
			dicemesh.material[0].emissiveIntensity = 1;
			dicemesh.material[0].needsUpdate = true;
		}

		switch (diceobj.values.length) {
			case 1:
				return this.fixmaterials(dicemesh, 1);
			case 2:
				return this.fixmaterials(dicemesh, 2);
			case 3: 
				return this.fixmaterials(dicemesh, 3);
			default:
				return dicemesh;
		}
	}

	get(type) {
		let dieSet
		if(DiceFactory.dice.hasOwnProperty(type)){
			dieSet = DiceFactory.dice[type]
		} else {
			dieSet = new DicePreset(type)
			DiceFactory.dice[type] = dieSet;
		}

		return dieSet
	}

	getGeometry(type) {
		return this.geometries[type];
	}

	// LoreWeaver fork: disposes and clears cached geometries so the next throw rebuilds meshes and Cannon shapes
	// at the updated baseScale after a viewport resize or tablet orientation change.
	scaleGeometry(){
		Object.values(this.geometries).forEach((geom) => geom?.dispose?.());
		this.geometries = {};
		this._builtScale = this.baseScale;
	}

	createMaterials(diceobj, size, margin, allowcache = true, d4specialindex = 0) {

		let materials = [];
		let labels = diceobj.labels;
		if (diceobj.shape == 'd4') {
			labels = diceobj.labels[d4specialindex];
			size = this.baseScale / 2;
			margin = this.baseScale * 2;
		}
		
		const effectId = this.dice_material != 'none' ? resolveEffect(this.dice_effect, this.dice_material) : null;
		const metalness = MATERIALTYPES[this.dice_material]?.metalness || 0;
		const faceNeedsGlow = Boolean((this.label_glow > 0 && metalness > 0) || effectId === 'fire' || effectId === 'shadow');

		for (var i = 0; i < labels.length; ++i) {
			var mat;
			if (this.dice_material != 'none') {
				mat = new THREE.MeshStandardMaterial(MATERIALTYPES[this.dice_material]);
				// LoreWeaver fork: shine lets metal, glass and wood reflect the room DiceBox sets up. 0 is the original.
				mat.envMapIntensity = (MATERIALTYPES[this.dice_material]?.envMapIntensity ?? 1) * (this.shine || 0);
				// LoreWeaver fork: Fresnel gemstone & elemental surface shaders (src/diceShaders.js).
				// The rim takes the set's own rim colour, or the effect's; not its light, which may be dark (shadow).
				if (effectId) applyDiceShader(mat, effectId, this.shaderTime, this.colordata?.rim || null);
			} else {
				mat = new THREE.MeshPhongMaterial(this.material_options);
			}

			let canvasTextures;
			if (i==0) { //edge
				// LoreWeaver fork: an explicit edge colour stays crisp on chamfered bevels; otherwise inherit see-through textures.
				let texture = {name:"none"};
				const hasExplicitEdge = this.edge_color_rand && this.edge_color_rand !== this.dice_color_rand;
				if(!hasExplicitEdge && this.dice_texture_rand.composite != "source-over") texture = this.dice_texture_rand;
				const isPlainEdge = !texture.name || texture.name === 'none';

				canvasTextures = this.createTextMaterial(diceobj, labels, i, size, margin, texture, this.label_color_rand, this.label_outline_rand, this.edge_color_rand, allowcache, { needBump: false, needGlow: false, isPlainEdge });
				mat.map = canvasTextures.composite;
				this.applyGlow(mat, canvasTextures);

			} else {
				const hasCustomNormal = Boolean(diceobj.shape != 'd4' && diceobj.normals[i]);
				const needBump = Boolean(this.bumpMapping && !hasCustomNormal);
				canvasTextures = this.createTextMaterial(diceobj, labels, i, size, margin, this.dice_texture_rand, this.label_color_rand, this.label_outline_rand, this.dice_color_rand, allowcache, { needBump, needGlow: faceNeedsGlow, isPlainEdge: false });
				mat.map = canvasTextures.composite;
				// LoreWeaver fork: a surface effect (fire, shadow) stays off the number (src/diceShaders.js).
				setEffectLabelMap(mat, canvasTextures.glow);

				// LoreWeaver fork: on metal, the numbers light themselves, scaled by how metallic it is, because
				// a metal face reflects the room and darkens painted numbers. Plastic, glass and wood are unchanged.
				if (this.label_glow > 0 && metalness > 0 && canvasTextures.glow && mat.emissive) {
					mat.emissiveMap = canvasTextures.glow;
					mat.emissive = new THREE.Color(0xffffff);
					mat.emissiveIntensity = this.label_glow * metalness;
				}
				this.applyGlow(mat, canvasTextures);

				if (this.bumpMapping) {
					if (false) {
						mat.bumpScale = 0.5;
					} else {
						let scale = 0.75;;
						if(size > 35)
							scale = 1;
						if(size > 40)
							scale = 2.5;
						if(size > 45)
							scale = 4;
						mat.bumpScale = scale;
					}

					if (canvasTextures.bump) {
						mat.bumpMap = canvasTextures.bump;
					}
					if (hasCustomNormal) {
						mat.bumpMap = new THREE.Texture(diceobj.normals[i]);
						mat.bumpScale = 4;
						mat.bumpMap.needsUpdate = true;
					}
				}
			}
			// LoreWeaver fork: true 3D depth sorting so overlapping dice never draw out of order (src/materialDepth.js).
			applyDepthSettings(mat, i === 0 && this.dice_texture_rand.composite !== "source-over" ? this.dice_texture_rand : (i === 0 ? null : this.dice_texture_rand), 1);
			materials.push(mat);
		}
		//Edge mat

		return materials;
	}

	createTextMaterial(diceobj, labels, index, size, margin, texture, forecolor, outlinecolor, backcolor, allowcache, { needBump = true, needGlow = true, isPlainEdge = false } = {}) {
		if (labels[index] === undefined) return null;

		texture = texture || this.dice_texture_rand;
		forecolor = forecolor || this.label_color_rand;
		outlinecolor = outlinecolor || this.label_outline_rand;
		backcolor = backcolor || this.dice_color_rand;
		allowcache = allowcache == undefined ? true : allowcache;

		let text = labels[index];
		let isTexture = false;
		let textCache = text;
		if (text instanceof HTMLImageElement) {
			textCache = text.src;
		} else if (text instanceof Array) {
			text.forEach(el => {
				textCache += el.src;
			});
		}

		// an attempt at materials caching
		const fontTag = this.label_font || diceobj.font || '';
		const flags = `${needBump ? 'B' : ''}${needGlow ? 'G' : ''}${isPlainEdge ? 'E' : ''}`;
		let cachestring = diceobj.type + textCache + index + texture.name + forecolor + outlinecolor + backcolor + fontTag + flags;
		if (diceobj.shape == 'd4') {
			cachestring = diceobj.type + textCache + texture.name + forecolor + outlinecolor + backcolor + fontTag + flags;
		}
		const cached = allowcache ? this.materials_cache.get(cachestring) : null;
		if (cached != null) {
			this.cache_hits++;
			return cached;
		}

		const approx = diceobj.shape == 'd4' ? (size + margin) : (size + size * 2 * margin);
		const ts = faceTextureSize(approx, { isPlainEdge, maxSize: this.maxTextureSize || 256 });
		const outlineWidth = Math.max(1.5, Math.round((ts / 512) * 5 * 10) / 10);
		const d4IconStroke = Math.max(1.5, Math.round((ts / 512) * 4 * 10) / 10);
		const yOffset = ts * (10 / 512);

		let canvas = document.createElement("canvas");
		canvas.width = canvas.height = ts;
		let context = canvas.getContext("2d", {alpha: true});

		let canvasBump = null;
		let contextBump = null;
		if (needBump) {
			canvasBump = document.createElement("canvas");
			canvasBump.width = canvasBump.height = ts;
			contextBump = canvasBump.getContext("2d", {alpha: true});
		}

		// LoreWeaver fork: the numbers alone, lit on black, only allocated when metal label_glow or a surface shader needs it.
		let canvasGlow = null;
		let contextGlow = null;
		if (needGlow) {
			canvasGlow = document.createElement("canvas");
			canvasGlow.width = canvasGlow.height = ts;
			contextGlow = canvasGlow.getContext("2d", {alpha: false});
			contextGlow.fillStyle = "#000000";
			contextGlow.fillRect(0, 0, ts, ts);
		}

		// create color
		context.fillStyle = backcolor;
		context.fillRect(0, 0, canvas.width, canvas.height);

		if (contextBump) {
			contextBump.fillStyle = "#FFFFFF";
			contextBump.fillRect(0, 0, canvasBump.width, canvasBump.height);
		}

		// Fast path for plain solid-colour bevel edges: no pattern, no text, 16x16 texture only.
		if (isPlainEdge && index === 0) {
			const compositetexture = new THREE.CanvasTexture(canvas);
			const bundle = { composite: compositetexture, bump: null, glow: null };
			if (allowcache) {
				this.cache_misses++;
				this.materials_cache.set(cachestring, bundle);
			}
			return bundle;
		}

		//create underlying texture
		const procedural = proceduralPatternOf(texture);
		if (procedural) {
			paintProceduralTexture(procedural, { ctx: context, bumpCtx: contextBump, glowCtx: contextGlow, size: canvas.width, seed: index + 1, accent: forecolor });
			context.globalCompositeOperation = 'source-over';
		} else if (texture.texture && texture.name != '' && texture.name != 'none') {
			context.globalCompositeOperation = texture.composite || 'source-over';
			context.drawImage(texture.texture, 0, 0, canvas.width, canvas.height);
			context.globalCompositeOperation = 'source-over';

			if (contextBump && texture.bump) {
				contextBump.globalCompositeOperation = 'source-over';
				contextBump.drawImage(texture.bump, 0, 0, canvas.width, canvas.height);
			}
		} else {
			context.globalCompositeOperation = 'source-over';
		}

		// create text
		context.globalCompositeOperation = 'source-over';
		context.textAlign = "center";
		context.textBaseline = "middle";

		if (contextBump) {
			contextBump.textAlign = "center";
			contextBump.textBaseline = "middle";
		}
		if (contextGlow) {
			contextGlow.textAlign = "center";
			contextGlow.textBaseline = "middle";
		}

		if (diceobj.shape != 'd4') {

			// fixes texture rotations on specific dice models
			const rotate = {
				d8: {even: -7.5, odd: -127.5},
				d10: {all: -6},
				d12: {all: 5},
				d20: {all: -7.5},
			};

			// fix for some faces being weirdly rotated
			let rotateface = rotate[diceobj.shape];
			if(rotateface) {
				let degrees
				if(rotateface.hasOwnProperty("all")){
					degrees = rotateface.all
				} else {
					if(index > 0 && (index % 2) != 0){
						degrees = rotateface.odd
					} else {
						degrees = rotateface.even
					}
				} 

				if (degrees && degrees != 0) {

					var hw = (canvas.width / 2);
					var hh = (canvas.height / 2);
					const rad = degrees * (Math.PI / 180);

					context.translate(hw, hh);
					context.rotate(rad);
					context.translate(-hw, -hh);

					if (contextBump) {
						contextBump.translate(hw, hh);
						contextBump.rotate(rad);
						contextBump.translate(-hw, -hh);
					}
					if (contextGlow) {
						contextGlow.translate(hw, hh);
						contextGlow.rotate(rad);
						contextGlow.translate(-hw, -hh);
					}
				}
			}

			//custom texture face
			if (text instanceof HTMLImageElement) {
				isTexture = true;
				context.drawImage(text, 0,0,text.width,text.height,0,0,canvas.width,canvas.height);

			// LoreWeaver fork: vector icon face ("icon:<name>" or "svg:<pathData>").
			} else if (parseFaceIcon(text)) {
				const icon = parseFaceIcon(text);
				const cx = canvas.width / 2;
				const cy = diceobj.shape === 'd10' ? canvas.height * 0.56 : canvas.height / 2;
				const radius = canvas.width * (diceobj.shape === 'd10' ? 0.18 : 0.25);
				const hasOutline = outlinecolor != 'none' && outlinecolor != backcolor;
				paintFaceIcon(context, icon, { cx, cy, radius, fill: forecolor, stroke: hasOutline ? outlinecolor : null, lineWidth: outlineWidth });
				if (contextBump) paintFaceIcon(contextBump, icon, { cx, cy, radius, fill: '#000000', stroke: hasOutline ? '#000000' : null, lineWidth: outlineWidth });
				if (contextGlow) paintFaceIcon(contextGlow, icon, { cx, cy, radius, fill: forecolor });

			// text-only face
			} else {
				const layout = faceLayoutFor(diceobj.shape, ts);
				let fontsize = (ts / (1 + 2 * margin)) * layout.baseScale;
				let textlines = text.split("\n");
				if (textlines.length > 1) fontsize = fontsize / textlines.length;

				const setFonts = (pt) => {
					const f = canvasFont(this.label_font, diceobj.font, pt);
					context.font = f;
					if (contextBump) contextBump.font = f;
					if (contextGlow) contextGlow.font = f;
				};
				const setBaselines = (mode) => {
					context.textBaseline = mode;
					if (contextBump) contextBump.textBaseline = mode;
					if (contextGlow) contextGlow.textBaseline = mode;
				};

				// Measure actual glyph ink bounds using alphabetic baseline, auto-fit into the face's safe interior box,
				// and center the ink box cleanly for every font preset (serif, display, sans, mono, classic).
				setBaselines("alphabetic");
				setFonts(fontsize);
				const probeLines = textlines.map((l) => l.trim() || l);
				let maxW = 0, maxH = 0;
				let useExact = true;
				for (const line of probeLines) {
					const placed = centerGlyphMetrics(context.measureText(line), layout.cx, layout.cy);
					if (!placed.exact) useExact = false;
					if (placed.width > maxW) maxW = placed.width;
					if (placed.height > maxH) maxH = placed.height;
				}
				const fitted = fitGlyphSize(fontsize, maxW, maxH * textlines.length, layout.maxW, layout.maxH);
				if (fitted !== fontsize) {
					fontsize = fitted;
					setFonts(fontsize);
				}
				if (!useExact) setBaselines("middle");

				const lineGap = (maxH > 0 ? maxH * (fitted / fontsize || 1) : context.measureText("M").width) * 1.25;
				const totalLinesH = lineGap * (textlines.length - 1);
				const hasOutline = outlinecolor != 'none' && outlinecolor != backcolor;

				for(let i = 0, l = textlines.length; i < l; i++){
					let textline = textlines[i].trim();
					const needsDot = textline == '6' || textline == '9';
					const dotR = Math.max(2, ts * 0.017);
					const dotGap = Math.max(3, ts * 0.028);
					// Slightly lift 6/9 when drawing the orientation dot directly beneath it so the pair stays centered.
					const targetY = layout.cy - totalLinesH / 2 + i * lineGap - (needsDot ? dotR * 0.85 : 0);
					const placed = centerGlyphMetrics(context.measureText(textlines[i]), layout.cx, targetY);

					if (hasOutline) {
						context.strokeStyle = outlinecolor;
						context.lineWidth = outlineWidth;
						context.strokeText(textlines[i], placed.x, placed.y);

						if (contextBump) {
							contextBump.strokeStyle = "#000000";
							contextBump.lineWidth = outlineWidth;
							contextBump.strokeText(textlines[i], placed.x, placed.y);
						}
					}

					context.fillStyle = forecolor;
					context.fillText(textlines[i], placed.x, placed.y);

					if (contextBump) {
						contextBump.fillStyle = "#000000";
						contextBump.fillText(textlines[i], placed.x, placed.y);
					}
					if (contextGlow) {
						contextGlow.fillStyle = forecolor;
						contextGlow.fillText(textlines[i], placed.x, placed.y);
					}

					// Crisp orientation dot centered directly below 6 and 9 (works identically across proportional and monospace fonts).
					if (needsDot) {
						const dotX = layout.cx;
						const dotY = targetY + (placed.height > 0 ? placed.height / 2 : fontsize * 0.45) + dotGap;
						const drawDot = (ctx, fill, stroke) => {
							if (!ctx) return;
							ctx.beginPath();
							ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
							if (stroke) {
								ctx.strokeStyle = stroke;
								ctx.lineWidth = Math.max(1.2, outlineWidth * 0.75);
								ctx.stroke();
							}
							ctx.fillStyle = fill;
							ctx.fill();
						};
						drawDot(context, forecolor, hasOutline ? outlinecolor : null);
						drawDot(contextBump, "#000000", hasOutline ? "#000000" : null);
						drawDot(contextGlow, forecolor, null);
					}
				}
			}
		} else {

			var hw = (canvas.width / 2);
			var hh = (canvas.height / 2);

			const d4Font = canvasFont(this.label_font, diceobj.font, ts / 128 * 21);
			context.font = d4Font;
			if (contextBump) contextBump.font = d4Font;
			if (contextGlow) contextGlow.font = d4Font;
			context.textBaseline = "alphabetic";
			if (contextBump) contextBump.textBaseline = "alphabetic";
			if (contextGlow) contextGlow.textBaseline = "alphabetic";

			//draw the numbers (pulled slightly inward from the sharp apex so bold fonts never clip bevels)
			const d4LabelY = hh - ts * 0.265;
			for (let i=0; i<text.length; i++) {
				//custom texture face
				if (text[i] instanceof HTMLImageElement) {
					let scaleTexture = text[i].width / canvas.width;
					context.drawImage(text[i], 0, 0, text[i].width, text[i].height, (100/scaleTexture), (25/scaleTexture), (60/scaleTexture), (60/scaleTexture));
				} else if (parseFaceIcon(text[i])) {
					const icon = parseFaceIcon(text[i]);
					const hasOutline = outlinecolor != 'none' && outlinecolor != backcolor;
					const iconR = ts * 0.095;
					paintFaceIcon(context, icon, { cx: hw, cy: d4LabelY, radius: iconR, fill: forecolor, stroke: hasOutline ? outlinecolor : null, lineWidth: d4IconStroke });
					if (contextBump) paintFaceIcon(contextBump, icon, { cx: hw, cy: d4LabelY, radius: iconR, fill: '#000000', stroke: hasOutline ? '#000000' : null, lineWidth: d4IconStroke });
					if (contextGlow) paintFaceIcon(contextGlow, icon, { cx: hw, cy: d4LabelY, radius: iconR, fill: forecolor });
				} else {
					const placed = centerGlyphMetrics(context.measureText(text[i]), hw, d4LabelY);
					if (!placed.exact) {
						context.textBaseline = "middle";
						if (contextBump) contextBump.textBaseline = "middle";
						if (contextGlow) contextGlow.textBaseline = "middle";
					}
					// attempt to outline the text with a meaningful color
					if (outlinecolor != 'none' && outlinecolor != backcolor) {
						context.strokeStyle = outlinecolor;
						context.lineWidth = outlineWidth;
						context.strokeText(text[i], placed.x, placed.y);

						if (contextBump) {
							contextBump.strokeStyle = "#000000";
							contextBump.lineWidth = outlineWidth;
							contextBump.strokeText(text[i], placed.x, placed.y);
						}
					}

					//draw label in top middle section
					context.fillStyle = forecolor;
					context.fillText(text[i], placed.x, placed.y);

					if (contextBump) {
						contextBump.fillStyle = "#000000";
						contextBump.fillText(text[i], placed.x, placed.y);
					}
					if (contextGlow) {
						contextGlow.fillStyle = forecolor;
						contextGlow.fillText(text[i], placed.x, placed.y);
					}
				}

				//rotate 1/3 for next label
				context.translate(hw, hh);
				context.rotate(Math.PI * 2 / 3);
				context.translate(-hw, -hh);

				if (contextBump) {
					contextBump.translate(hw, hh);
					contextBump.rotate(Math.PI * 2 / 3);
					contextBump.translate(-hw, -hh);
				}
				if (contextGlow) {
					contextGlow.translate(hw, hh);
					contextGlow.rotate(Math.PI * 2 / 3);
					contextGlow.translate(-hw, -hh);
				}
			}

			//debug side numbering
			// context.fillStyle = forecolor;
			// context.fillText(index, hw, hh);
		}

		var compositetexture = new THREE.CanvasTexture(canvas);
		var bumpMap = (!isTexture && canvasBump) ? new THREE.CanvasTexture(canvasBump) : null;
		var glowMap = canvasGlow ? new THREE.CanvasTexture(canvasGlow) : null;

		if (allowcache) {
			// cache new texture
			this.cache_misses++;
			this.materials_cache.set(cachestring, {composite:compositetexture,bump:bumpMap,glow:glowMap});
		}

		return {composite:compositetexture,bump:bumpMap,glow:glowMap};
	}

	applyColorSet(colordata) {
		this.colordata = colordata;
		this.label_color = colordata.foreground;
		this.dice_color = colordata.background;
		this.label_outline = colordata.outline;
		this.label_font = colordata.font || '';
		this.dice_texture = colordata.texture;
		this.dice_material = colordata?.texture?.material || 'none';
		this.edge_color = resolveEdgeColor(colordata);
		// LoreWeaver fork: how brightly the set lights its own faces, 0 (the original) to 1 (src/glow.js).
		// A set whose light is a shade (src/lightGlow.js) casts darkness around it, and doesn't shine itself.
		this.dice_glow = shadeOf(colordata.light) ? 0 : glowLevel(colordata.glow);
		// LoreWeaver fork: optional elemental surface shader ('fire', 'frost', 'storm', 'arcane', 'gem').
		this.dice_effect = colordata.effect || '';
	}

	/**
	 * LoreWeaver fork: lights a face with its own colours when the set has glow (src/glow.js).
	 * @param {object} mat - The face's material.
	 * @param {object} canvasTextures - The face's textures, from createTextMaterial.
	 */
	applyGlow(mat, canvasTextures) {
		applyGlow(mat, canvasTextures?.composite, this.dice_glow);
	}

	// pass in colorset data from dice-box
	setMaterialInfo(colorset = '') {
		let prevcolordata = this.colordata;
		let prevtexture = this.dice_texture;
		let prevmaterial = this.dice_material;

		//reset random choices
		this.dice_color_rand = '';
		this.label_color_rand = '';
		this.label_outline_rand = '';
		this.dice_texture_rand = '';
		this.dice_material_rand = '';
		this.edge_color_rand = '';

		// set base color first
		if (Array.isArray(this.dice_color)) {

			var colorindex = Math.floor(Math.random() * this.dice_color.length);

			// if color list and label list are same length, treat them as a parallel list
			if (Array.isArray(this.label_color) && this.label_color.length == this.dice_color.length) {
				this.label_color_rand = this.label_color[colorindex];

				// if label list and outline list are same length, treat them as a parallel list
				if (Array.isArray(this.label_outline) && this.label_outline.length == this.label_color.length) {
					this.label_outline_rand = this.label_outline[colorindex];
				}
			}
			// if texture list is same length do the same
			if (Array.isArray(this.dice_texture) && this.dice_texture.length == this.dice_color.length) {
				this.dice_texture_rand = this.dice_texture[colorindex];
				this.dice_material_rand = this.dice_texture_rand.material;
			}

			//if edge list and color list are same length, treat them as a parallel list
			if (Array.isArray(this.edge_color) && this.edge_color.length == this.dice_color.length) {
				this.edge_color_rand = this.edge_color[colorindex];
			}

			this.dice_color_rand = this.dice_color[colorindex];
		} else {
			this.dice_color_rand = this.dice_color;
		}

		// set edge color if not set
		if(this.edge_color_rand == ''){
			if (Array.isArray(this.edge_color)) {

				var colorindex = Math.floor(Math.random() * this.edge_color.length);

				this.edge_color_rand = this.edge_color[colorindex];
			} else {
				this.edge_color_rand = this.edge_color;
			}
		}

		// if selected label color is still not set, pick one
		if (this.label_color_rand == '' && Array.isArray(this.label_color)) {
			var colorindex = this.label_color[Math.floor(Math.random() * this.label_color.length)];

			// if label list and outline list are same length, treat them as a parallel list
			if (Array.isArray(this.label_outline) && this.label_outline.length == this.label_color.length) {
				this.label_outline_rand = this.label_outline[colorindex];
			}

			this.label_color_rand = this.label_color[colorindex];

		} else if (this.label_color_rand == '') {
			this.label_color_rand = this.label_color;
		}

		// if selected label outline is still not set, pick one
		if (this.label_outline_rand == '' && Array.isArray(this.label_outline)) {
			var colorindex = this.label_outline[Math.floor(Math.random() * this.label_outline.length)];

			this.label_outline_rand = this.label_outline[colorindex];
			
		} else if (this.label_outline_rand == '') {
			this.label_outline_rand = this.label_outline;
		}

		// same for textures list
		if (this.dice_texture_rand == '' && Array.isArray(this.dice_texture)) {
			this.dice_texture_rand = this.dice_texture[Math.floor(Math.random() * this.dice_texture.length)];
			this.dice_material_rand = this.dice_texture_rand.material || this.dice_material;
		} else if (this.dice_texture_rand == '') {
			this.dice_texture_rand = this.dice_texture;
			this.dice_material_rand = this.dice_texture_rand.material || this.dice_material;
		}

		//apply material
		if (this.dice_material_rand == '' && Array.isArray(this.dice_material)) {
			this.dice_material_rand = this.dice_material[Math.floor(Math.random() * this.dice_material.length)];
		} else if (this.dice_material_rand == '') {
			this.dice_material_rand = this.dice_material;
		}

		// console.log('this.colordata', this.colordata)

		if (this.colordata &&this.colordata.id != prevcolordata.id) {
			this.applyColorSet(prevcolordata, prevtexture, prevmaterial);
			// this.applyTexture(prevtexture);
			// this.applyMaterial(prevmaterial);
		}
	}

	calc_texture_size(approx) {
		return Math.pow(2, Math.floor(Math.log(approx) / Math.log(2)));
	}

	createGeometry(type, radius, onlyShape = false) {
		const func = onlyShape ? "create_shape" : "create_geom"
		switch (type) {
			case 'd2':
				var geom = new THREE.CylinderGeometry(1*radius, 1*radius, 0.1*radius, 32);
				geom.cannon_shape = new CANNON.Cylinder(1*radius, 1*radius, 0.1*radius, 8);
				return geom;
			case 'd4':
				return this[func](DICE_GEOM.d4.vertices, DICE_GEOM.d4.faces, radius, -0.1, Math.PI * 7 / 6, 0.96);
			case 'd6':
				return this[func](DICE_GEOM.d6.vertices, DICE_GEOM.d6.faces, radius, 0.1, Math.PI / 4, 0.96);
			case 'd8':
				return this[func](DICE_GEOM.d8.vertices, DICE_GEOM.d8.faces, radius, 0, -Math.PI / 4 / 2, 0.965);
			case 'd10':
				return this[func](DICE_GEOM.d10.vertices, DICE_GEOM.d10.faces, radius, 0.3, Math.PI, 0.945);
			case 'd12':
				return this[func](DICE_GEOM.d12.vertices, DICE_GEOM.d12.faces, radius, 0.2, -Math.PI / 4 / 2, 0.968);
			case 'd20':
				return this[func](DICE_GEOM.d20.vertices, DICE_GEOM.d20.faces, radius, -0.2, -Math.PI / 4 / 2, 0.955);
			default:
				console.error(`Geometry for ${type} is not available`)
				return null;
		}
	}

	fixmaterials(mesh, unique_sides) {
		// this makes the mesh reuse textures for other sides
		for (let i = 0, l = mesh.geometry.groups.length; i < l; ++i) {
			var matindex = mesh.geometry.groups[i].materialIndex - 2;
			if (matindex < unique_sides) continue;

			let modmatindex = (matindex % unique_sides);

			mesh.geometry.groups[i].materialIndex = modmatindex + 2;
		}
		mesh.geometry.elementsNeedUpdate = true;
		return mesh;
	}

	create_shape(vertices, faces, radius) {
		var vectors = new Array(vertices.length);
		for (var i = 0; i < vertices.length; ++i) {
			vectors[i] = (new THREE.Vector3).fromArray(vertices[i]).normalize();
		}
		var cv = new Array(vertices.length), cf = new Array(faces.length);
		for (var i = 0; i < vectors.length; ++i) {
			var v = vectors[i];
			cv[i] = new CANNON.Vec3(v.x * radius, v.y * radius, v.z * radius);
		}
		for (var i = 0; i < faces.length; ++i) {
			cf[i] = faces[i].slice(0, faces[i].length - 1);
		}
		const shape = new CANNON.ConvexPolyhedron({vertices:cv,faces:cf});
		// console.log("🚀 ~ create_shape ~ shape", shape)
		return shape
	}

	make_geom(vertices, faces, radius, tab, af) {
		let geom = new THREE.BufferGeometry();

		for (let i = 0; i < vertices.length; ++i) {
				vertices[i] = vertices[i].multiplyScalar(radius);
		}

		let positions = [];
		const normals = [];
		const uvs = [];

		const cb = new THREE.Vector3();
		const ab = new THREE.Vector3();
		let materialIndex;
		let faceFirstVertexIndex = 0;

		for (let i = 0; i < faces.length; ++i) {
				let ii = faces[i], fl = ii.length - 1;
				let aa = Math.PI * 2 / fl;
				materialIndex = ii[fl] + 1;
				for (let j = 0; j < fl - 2; ++j) {

						//Vertices
						positions.push(...vertices[ii[0]].toArray());
						positions.push(...vertices[ii[j + 1]].toArray());
						positions.push(...vertices[ii[j + 2]].toArray());

						// Flat face normals
						cb.subVectors( vertices[ii[j + 2]], vertices[ii[j + 1]] );
						ab.subVectors( vertices[ii[0]], vertices[ii[j + 1]] );
						cb.cross( ab );
						cb.normalize();

						// Vertex Normals
						normals.push(...cb.toArray());
						normals.push(...cb.toArray());
						normals.push(...cb.toArray());

						//UVs
						uvs.push((Math.cos(af) + 1 + tab) / 2 / (1 + tab), (Math.sin(af) + 1 + tab) / 2 / (1 + tab));
						uvs.push((Math.cos(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab));
						uvs.push((Math.cos(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab));

				}

				// LoreWeaver fork: merge consecutive triangles sharing a materialIndex into one group,
				// cutting per-die WebGL draw calls by ~6x-8x (all bevel/corner triangles become 1 draw call).
				let numOfVertices = (fl - 2) * 3;
				addMergedGroup(geom, faceFirstVertexIndex, numOfVertices, materialIndex);
				faceFirstVertexIndex += numOfVertices;

		}


		geom.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
		geom.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
		geom.setAttribute( 'uv', new THREE.Float32BufferAttribute( uvs, 2 ) );
		geom.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius);
		return geom;
	}

	make_d10_geom(vertices, faces, radius, tab, af) {
		let geom = new THREE.BufferGeometry();

		for (let i = 0; i < vertices.length; ++i) {
				vertices[i] = vertices[i].multiplyScalar(radius);
		}

		let positions = [];
		const normals = [];
		const uvs = [];

		const cb = new THREE.Vector3();
		const ab = new THREE.Vector3();
		let materialIndex;
		let faceFirstVertexIndex = 0;

		for (let i = 0; i < faces.length; ++i) {
			let ii = faces[i], fl = ii.length - 1;
			let aa = Math.PI * 2 / fl;
			materialIndex = ii[fl] + 1;
			var w = 0.65;
			var h = 0.85;
			var v0 = 1 - 1*h;
			var v1 = 1 - (0.895/1.105)*h;
			var v2 = 1;
			for (let j = 0; j < fl - 2; ++j) {

				//Vertices
				positions.push(...vertices[ii[0]].toArray());
				positions.push(...vertices[ii[j + 1]].toArray());
				positions.push(...vertices[ii[j + 2]].toArray());

				// Flat face normals
				cb.subVectors( vertices[ii[j + 2]], vertices[ii[j + 1]] );
				ab.subVectors( vertices[ii[0]], vertices[ii[j + 1]] );
				cb.cross( ab );
				cb.normalize();

				// Vertex Normals
				normals.push(...cb.toArray());
				normals.push(...cb.toArray());
				normals.push(...cb.toArray());

				//UVs
				if(faces[i][faces[i].length-1] == -1 || j >= 2){
					uvs.push((Math.cos(af) + 1 + tab) / 2 / (1 + tab), (Math.sin(af) + 1 + tab) / 2 / (1 + tab));
					uvs.push((Math.cos(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab));
					uvs.push((Math.cos(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab));
				} else if(j==0) {
					uvs.push(0.5-w/2, v1);
					uvs.push(0.5, v0);
					uvs.push(0.5+w/2, v1);
				} else if(j==1) {
					uvs.push(0.5-w/2, v1);
					uvs.push(0.5+w/2, v1);
					uvs.push(0.5, v2);
				}
			}
			// LoreWeaver fork: merge consecutive triangles sharing a materialIndex into one group.
			let numOfVertices = (fl - 2) * 3;
			addMergedGroup(geom, faceFirstVertexIndex, numOfVertices, materialIndex);
			faceFirstVertexIndex += numOfVertices;
		}


		geom.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
		geom.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
		geom.setAttribute( 'uv', new THREE.Float32BufferAttribute( uvs, 2 ) );
		geom.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius);

		return geom;
	}

	chamfer_geom(vectors, faces, chamfer) {
		var chamfer_vectors = [], chamfer_faces = [], corner_faces = new Array(vectors.length);
		for (var i = 0; i < vectors.length; ++i) corner_faces[i] = [];
		for (var i = 0; i < faces.length; ++i) {
			var ii = faces[i], fl = ii.length - 1;
			var center_point = new THREE.Vector3();
			var face = new Array(fl);
			for (var j = 0; j < fl; ++j) {
				var vv = vectors[ii[j]].clone();
				center_point.add(vv);
				corner_faces[ii[j]].push(face[j] = chamfer_vectors.push(vv) - 1);
			}
			center_point.divideScalar(fl);
			for (var j = 0; j < fl; ++j) {
				var vv = chamfer_vectors[face[j]];
				vv.subVectors(vv, center_point).multiplyScalar(chamfer).addVectors(vv, center_point);
			}
			face.push(ii[fl]);
			chamfer_faces.push(face);
		}
		for (var i = 0; i < faces.length - 1; ++i) {
			for (var j = i + 1; j < faces.length; ++j) {
				var pairs = [], lastm = -1;
				for (var m = 0; m < faces[i].length - 1; ++m) {
					var n = faces[j].indexOf(faces[i][m]);
					if (n >= 0 && n < faces[j].length - 1) {
						if (lastm >= 0 && m != lastm + 1) pairs.unshift([i, m], [j, n]);
						else pairs.push([i, m], [j, n]);
						lastm = m;
					}
				}
				if (pairs.length != 4) continue;
				chamfer_faces.push([
					chamfer_faces[pairs[0][0]][pairs[0][1]],
					chamfer_faces[pairs[1][0]][pairs[1][1]],
					chamfer_faces[pairs[3][0]][pairs[3][1]],
					chamfer_faces[pairs[2][0]][pairs[2][1]],
					-1
				]);
			}
		}
		for (var i = 0; i < corner_faces.length; ++i) {
			var cf = corner_faces[i], face = [cf[0]], count = cf.length - 1;
			while (count) {
				for (var m = faces.length; m < chamfer_faces.length; ++m) {
					var index = chamfer_faces[m].indexOf(face[face.length - 1]);
					if (index >= 0 && index < 4) {
						if (--index == -1) index = 3;
						var next_vertex = chamfer_faces[m][index];
						if (cf.indexOf(next_vertex) >= 0) {
							face.push(next_vertex);
							break;
						}
					}
				}
				--count;
			}
			face.push(-1);
			chamfer_faces.push(face);
		}
		return { vectors: chamfer_vectors, faces: chamfer_faces };
	}

	create_geom(vertices, faces, radius, tab, af, chamfer) {
		var vectors = new Array(vertices.length);
		for (var i = 0; i < vertices.length; ++i) {
			vectors[i] = (new THREE.Vector3).fromArray(vertices[i]).normalize();
		}
		var cg = this.chamfer_geom(vectors, faces, chamfer);
		if(faces.length != 10) {
			var geom = this.make_geom(cg.vectors, cg.faces, radius, tab, af);
		}
		else {
			var geom = this.make_d10_geom(cg.vectors, cg.faces, radius, tab, af);
		}
		//var geom = make_geom(vectors, faces, radius, tab, af); // Without chamfer
		geom.cannon_shape = this.create_shape(vertices, faces, radius);
		geom.name = "d"+faces.length
		return geom;
	}
}

export { DiceFactory }