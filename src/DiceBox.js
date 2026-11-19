import * as THREE from "three"
import * as CANNON from "cannon-es"

import { DiceNotation } from './DiceNotation.js';
import { DiceFactory } from './DiceFactory.js';
import { DiceColors } from './DiceColors.js';
import { THEMES } from './const/themes.js';
// import CannonDebugger from 'cannon-es-debugger'

import { debounce } from "./helpers"
import { throwVector, DEFAULT_THROW_SPREAD } from "./throwVector.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"

/** LoreWeaver fork: how many sound files each dice material and table surface has. */
const DIE_SOUND_COUNTS = { coin: 6, metal: 12, plastic: 15, wood: 12 }
const SURFACE_SOUND_COUNTS = { felt: 7, wood_table: 7, wood_tray: 7, metal: 9 }

/** LoreWeaver fork: the theme options that mean the dice must be recoloured. */
const THEME_OPTIONS = ['theme_colorset', 'theme_texture', 'theme_material', 'theme_customColorset']

const defaultConfig = {
	assetPath: "./",
	framerate: (1/60),
	sounds: false,
	volume: 100,
	color_spotlight: 0xefdfd5,
	shadows: true,
	theme_surface:  "green-felt",
	sound_dieMaterial: 'plastic',
	theme_customColorset: null,
	theme_colorset: "white",
	theme_texture: "",
	theme_material: "glass",
	gravity_multiplier: 400,
	light_intensity: 0.7,
	baseScale: 100,
	strength: 1,
	throw_spread: DEFAULT_THROW_SPREAD, // LoreWeaver fork: how much a throw's strength varies, 0 to 1
	throw_start: 0.9, // LoreWeaver fork: how far out the dice start, as a share of the way to the edge
	wall_bounce: 1.0, // LoreWeaver fork: how much the dice bounce off the walls, 0 (dead) to 1 (perfect)
	shine: 0, // LoreWeaver fork: how much metal, glass and wood dice reflect a soft room, 0 (none, the original) to 1
	label_glow: 0, // LoreWeaver fork: how brightly the numbers on metal dice light themselves, 0 (the original) to 1
	assetUrl: null, // LoreWeaver fork: optional function(path) giving the URL for a texture or sound, e.g. a data URL
	iterationLimit: 1000,
	onRollComplete: () => {},
	onRerollComplete: () => {},
	onAddDiceComplete: () => {},
	onRemoveDiceComplete: () => {},
}

class DiceBox {

	constructor(element_container, options = {}) {
		//private variables
		this.initialized = false
		this.container = document.querySelector(element_container);
		this.dimensions = new THREE.Vector2(this.container.clientWidth, this.container.clientHeight)
		this.adaptive_timestep = false;
		this.last_time = 0;
		this.running = false;
		this.rolling = false;
		this.threadid;

		this.display = {
			currentWidth: null,
			currentHeight: null,
			containerWidth: null,
			containerHeight: null,
			aspect: null,
			scale: null
		};

		this.cameraHeight = {
			max: null,
			close: null,
			medium: null,
			far: null
		};

		this.scene = new THREE.Scene();
		this.world = new CANNON.World();
		this.dice_body_material = new CANNON.Material();
		this.sounds_table = {};
		this.sounds_dice = [];
		this.lastSoundType = '';
		this.lastSoundStep = 0;
		this.lastSound = 0;
		this.iteration;
		this.renderer;
		this.barrier;
		this.camera;
		this.light;
		this.light_amb;
		this.desk;
		this.box_body = {};
		this.bodies = [];
		this.meshes = [];
		this.diceList = [];
		this.notationVectors = null
		this.dieIndex = 0

		//public variables
		// this.framerate = (1/60);
		// this.sounds = false;
		// this.volume = 100;
		// this.theme_surface = "green-felt"
		// this.sound_dieMaterial = 'plastic'
		this.soundDelay = 10; // time between sound effects in ms
		this.animstate = '';
		// this.tally = true;


		this.selector = {
			animate: true,
			rotate: true,
			intersected: null,
			dice: []
		};

		// this.colors = {
		// 	ambient:  0xf0f5fb,
		// 	spotlight: 0xefdfd5
		// };

		// this.shadows = true

		// merge this with default config and any options coming in
		Object.assign(this, defaultConfig, options)

		this.DiceColors = new DiceColors({assetPath: this.assetPath, assetUrl: this.assetUrl});
		this.DiceFactory = new DiceFactory({
			baseScale: this.baseScale,
			shine: this.shine,
			label_glow: this.label_glow
		});
		this.DiceFactory.setBumpMapping(true);

		// post config settings
		this.surface = THEMES[this.theme_surface].surface

	}


	enableShadows(){
		this.shadows = true;
		if (this.renderer) this.renderer.shadowMap.enabled = this.shadows;
		if (this.light) this.light.castShadow = this.shadows;
		if (this.desk) this.desk.receiveShadow = this.shadows;
	}
	disableShadows() {
		this.shadows = false;
		if (this.renderer) this.renderer.shadowMap.enabled = this.shadows;
		if (this.light) this.light.castShadow = this.shadows;
		if (this.desk) this.desk.receiveShadow = this.shadows;
	}

	async initialize() {

		// this.cannonDebugger = new CannonDebugger(this.scene,this.world)
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		this.container.appendChild(this.renderer.domElement);
		this.renderer.shadowMap.enabled = this.shadows;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.setClearColor(0x000000, 0);

		// LoreWeaver fork: a soft room for metal, glass and wood to reflect. Without it they all look matte.
		if (this.shine > 0) {
			const pmrem = new THREE.PMREMGenerator(this.renderer);
			this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
			pmrem.dispose();
		}

		this.setDimensions(this.dimensions);

		this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier);
		this.world.broadphase = new CANNON.NaiveBroadphase();
		this.world.solver.iterations = 14;
		this.world.allowSleep = true;

		// this.scene.add(new THREE.HemisphereLight( 0xffffbb, 0x676771, 1 ));

		this.makeWorldBox()
		
		this.resizeWorld()

		await this.loadTheme({
			colorset: this.theme_colorset,
			texture: this.theme_texture,
			material: this.theme_material
		})
		.catch(e=>{throw new Error("Unable to load theme")})

		if(this.sounds){
			await this.loadSounds()
			.catch(e=>{throw new Error("Unable to load sounds")})
		}

		// this.DiceFactory.setCubeMap(`./themes/${this.theme_surface}/`,THEMES[this.theme_surface].cubeMap)

		this.initialized = true

		this.renderer.render(this.scene, this.camera);
	}

	makeWorldBox(){
		if(Object.keys(this.box_body).length) {
			this.world.removeBody(this.box_body.desk)
			this.world.removeBody(this.box_body.topWall)
			this.world.removeBody(this.box_body.bottomWall)
			this.world.removeBody(this.box_body.leftWall)
			this.world.removeBody(this.box_body.rightWall)
		}

		const desk_body_material = new CANNON.Material();
		const barrier_body_material = new CANNON.Material();

		this.world.addContactMaterial(new CANNON.ContactMaterial( desk_body_material, this.dice_body_material, {mass:0,friction: 0.6, restitution: 0.5}));
		// LoreWeaver fork: wall_bounce sets how lively the walls are (the original was always 1.0, a perfect bounce).
		this.world.addContactMaterial(new CANNON.ContactMaterial( barrier_body_material, this.dice_body_material, {mass:0, friction: 0.6, restitution: this.wall_bounce}));
		this.world.addContactMaterial(new CANNON.ContactMaterial( this.dice_body_material, this.dice_body_material, {mass:0,friction: 0.6, restitution: 0.5}));

		this.box_body.desk = new CANNON.Body({allowSleep: false, mass: 0, shape: new CANNON.Plane(), material: desk_body_material})
		this.world.addBody(this.box_body.desk);
		
		this.box_body.topWall = new CANNON.Body({allowSleep: false, mass: 0, shape: new CANNON.Plane(), material: barrier_body_material});
		this.box_body.topWall.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);
		this.box_body.topWall.position.set(0, this.display.containerHeight * 0.93, 0);
		this.world.addBody(this.box_body.topWall);

		this.box_body.bottomWall = new CANNON.Body({allowSleep: false, mass: 0, shape: new CANNON.Plane(), material: barrier_body_material});
		this.box_body.bottomWall.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
		this.box_body.bottomWall.position.set(0, -this.display.containerHeight * 0.93, 0);
		this.world.addBody(this.box_body.bottomWall);

		this.box_body.leftWall = new CANNON.Body({allowSleep: false, mass: 0, shape: new CANNON.Plane(), material: barrier_body_material});
		this.box_body.leftWall.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2);
		this.box_body.leftWall.position.set(this.display.containerWidth * 0.93, 0, 0);
		this.world.addBody(this.box_body.leftWall);

		this.box_body.rightWall = new CANNON.Body({allowSleep: false, mass: 0, shape: new CANNON.Plane(), material: barrier_body_material});
		this.box_body.rightWall.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
		this.box_body.rightWall.position.set(-this.display.containerWidth * 0.93, 0, 0);
		this.world.addBody(this.box_body.rightWall);
	}

	async loadTheme(themeConfig){
		let colorData
		if(this.theme_customColorset){
			colorData = await this.DiceColors.makeColorSet(this.theme_customColorset)
		} else {
			colorData = await this.DiceColors.getColorSet(themeConfig)
		}
		this.DiceFactory.applyColorSet(colorData)
		this.colorData = colorData
	}

	/**
	 * LoreWeaver fork: gives the URL for a texture or sound file, through the assetUrl option when there is one.
	 * @param {string} path - The file's path inside the library's public folder, e.g. "sounds/dicehit/dicehit_wood1.mp3".
	 * @returns {string} The URL to load.
	 */
	assetSource(path){
		return typeof this.assetUrl === 'function' ? this.assetUrl(path) : this.assetPath + path
	}

	/**
	 * LoreWeaver fork: says which set of hit sounds suits the current dice. Glass and plastic share the plastic set.
	 * The original compared the whole material name, so "perfectmetal" asked for sound files that don't exist.
	 * @returns {string} "metal", "wood" or "plastic".
	 */
	soundMaterial(){
		const texture = Array.isArray(this.colorData?.texture) ? this.colorData.texture[0] : this.colorData?.texture
		const match = String(texture?.material || '').match(/wood|metal/)
		return match ? match[0] : 'plastic'
	}

	/**
	 * Loads one set of sounds once, and keeps it.
	 * @param {object} store - this.sounds_table or this.sounds_dice.
	 * @param {string} key - The surface or material name.
	 * @param {number} count - How many files the set has.
	 * @param {(index: number) => string} pathFor - The file path for sound number 1..count.
	 */
	async loadSoundSet(store, key, count, pathFor){
		if (store.hasOwnProperty(key) || !count) return
		store[key] = []
		const clips = await Promise.all(Array.from({ length: count }, (_, i) => this.loadAudio(this.assetSource(pathFor(i + 1)))))
		store[key] = clips.filter(Boolean)
	}

	async loadSounds(){
		this.sound_dieMaterial = this.soundMaterial()
		await this.loadSoundSet(this.sounds_table, this.surface, SURFACE_SOUND_COUNTS[this.surface], (s) => `sounds/surfaces/surface_${this.surface}${s}.mp3`)
		// the coin sounds are for d2s, whatever the dice are made of
		await this.loadSoundSet(this.sounds_dice, 'coin', DIE_SOUND_COUNTS.coin, (s) => `sounds/dicehit/dicehit_coin${s}.mp3`)
		await this.loadSoundSet(this.sounds_dice, this.sound_dieMaterial, DIE_SOUND_COUNTS[this.sound_dieMaterial], (s) => `sounds/dicehit/dicehit_${this.sound_dieMaterial}${s}.mp3`)
	}

	loadAudio(src){
		return new Promise((resolve, reject) => {
			let audio = new Audio()
			// LoreWeaver fork: never let one slow sound file hold up the dice.
			setTimeout(() => resolve(undefined), 5000)
			audio.oncanplaythrough = () => resolve(audio)
			audio.crossOrigin = "anonymous";
			audio.src = src
			audio.onerror = (error) => reject(error)
		}).catch(e => {
			console.error("Unable to load audio")
		})
	}

	async updateConfig(options = {}){
		// if(options.scale && this.scale !== options.scale){
		// 	this.DiceFactory.updateConfig({
		// 		scale: options.scale
		// 	})
		// }
		// LoreWeaver fork: the original called Object.apply, which does nothing, so options such as sounds,
		// volume, strength and gravity could never be changed after the box was made.
		const themeChanged = THEME_OPTIONS.some((key) => key in options)
		// A named colorset replaces a custom one, as in the original.
		if (('theme_colorset' in options) && !('theme_customColorset' in options)) options = { ...options, theme_customColorset: null }
		Object.assign(this, options)

		if ('gravity_multiplier' in options && this.world) this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier)
		if ('wall_bounce' in options && this.world) this.makeWorldBox()
		if ('shadows' in options) this.shadows ? this.enableShadows() : this.disableShadows()
		if ('light_intensity' in options && this.light) this.light.intensity = this.light_intensity
		if (themeChanged) {
			await this.loadTheme({
				colorset: this.theme_colorset,
				texture: this.theme_texture,
				material: this.theme_material
			})
		}
		// Sounds load the first time they're switched on, and again for dice of a new material.
		if (this.sounds && (themeChanged || 'sounds' in options) && this.initialized) await this.loadSounds()
	}

	/**
	 * LoreWeaver fork: celebrates dice, such as a die that landed on a critical face. Each die pops, pulses with a
	 * warm glow, and throws off a burst of sparks; afterwards it keeps a soft glow until the dice are cleared.
	 * @param {Array<number>} ids - The dice to celebrate, by their place in the throw (0 is the first die).
	 * @param {object} [options] - How it looks.
	 * @param {number|string} [options.color=0xffc94a] - The glow and spark colour.
	 * @param {number} [options.duration=1800] - How long the burst lasts, in milliseconds.
	 * @param {number} [options.sparks=120] - Sparks per die.
	 * @returns {Promise<void>} Resolves when the burst has finished.
	 */
	celebrateDice(ids = [], { color = 0xffc94a, duration = 1800, sparks = 120 } = {}){
		const meshes = ids.map((id) => this.diceList[id]).filter(Boolean)
		if (!meshes.length || !this.renderer || typeof requestAnimationFrame !== 'function') return Promise.resolve()
		const glow = new THREE.Color(color)
		const materials = meshes.flatMap((mesh) => (Array.isArray(mesh.material) ? mesh.material : [mesh.material])).filter((material) => material.emissive)
		// While it bursts the whole die glows; a die whose numbers light themselves (label_glow) gets that back after.
		const before = materials.map((material) => ({ map: material.emissiveMap, intensity: material.emissiveIntensity }))
		materials.forEach((material) => {
			material.emissive = glow.clone()
			material.emissiveIntensity = 0
			if (material.emissiveMap) { material.emissiveMap = null; material.needsUpdate = true }
		})
		const reach = this.display.scale * 5
		const sparkMap = this.sparkTexture()
		const bursts = meshes.map((mesh) => {
			const positions = new Float32Array(sparks * 3)
			const velocities = []
			for (let i = 0; i < sparks; i++) {
				const angle = Math.random() * Math.PI * 2
				const speed = reach * (0.45 + Math.random() * 0.75)
				velocities.push(new THREE.Vector3(Math.cos(angle) * speed, Math.sin(angle) * speed, reach * (0.4 + Math.random() * 0.9)))
				positions.set([mesh.position.x, mesh.position.y, mesh.position.z], i * 3)
			}
			const geometry = new THREE.BufferGeometry()
			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
			const material = new THREE.PointsMaterial({ color: glow, map: sparkMap, size: this.display.scale * 1.5, transparent: true, opacity: 1, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending })
			const points = new THREE.Points(geometry, material)
			this.scene.add(points)
			return { mesh, points, positions, velocities, origin: mesh.position.clone(), scale: mesh.scale.clone() }
		})
		return new Promise((resolve) => {
			const start = performance.now()
			const step = (now) => {
				const share = Math.min(1, (now - start) / duration)
				const seconds = (share * duration) / 1000
				// Three quick pulses that settle into a soft steady glow.
				const pulse = (0.5 + 0.5 * Math.cos(share * Math.PI * 6)) * (1 - share)
				materials.forEach((material) => { material.emissiveIntensity = 0.25 + 0.75 * pulse })
				bursts.forEach(({ mesh, points, positions, velocities, origin, scale }) => {
					// A pop: the die swells by a quarter and settles back in the first fifth of the burst.
					const pop = share < 0.2 ? Math.sin((share / 0.2) * Math.PI) * 0.25 : 0
					mesh.scale.set(scale.x * (1 + pop), scale.y * (1 + pop), scale.z * (1 + pop))
					velocities.forEach((velocity, i) => {
						positions[i * 3] = origin.x + velocity.x * seconds
						positions[i * 3 + 1] = origin.y + velocity.y * seconds
						positions[i * 3 + 2] = Math.max(0, origin.z + velocity.z * seconds - reach * 1.6 * seconds * seconds)
					})
					points.geometry.attributes.position.needsUpdate = true
					points.material.opacity = 1 - share * share
				})
				this.renderer.render(this.scene, this.camera)
				if (share < 1) { requestAnimationFrame(step); return }
				bursts.forEach(({ mesh, points, scale }) => {
					mesh.scale.copy(scale)
					this.scene.remove(points)
					points.geometry.dispose()
					points.material.dispose()
				})
				// Afterwards: a soft gold glow, or, on a die whose numbers light themselves, gold numbers.
				materials.forEach((material, i) => {
					if (before[i].map) {
						material.emissiveMap = before[i].map
						material.emissiveIntensity = Math.max(before[i].intensity, 0.6)
						material.needsUpdate = true
					} else {
						material.emissiveIntensity = 0.25
					}
				})
				this.renderer.render(this.scene, this.camera)
				resolve()
			}
			requestAnimationFrame(step)
		})
	}

	/**
	 * LoreWeaver fork: a soft round spark, white at the centre and fading out, drawn once and reused.
	 * @returns {THREE.Texture} The spark picture.
	 */
	sparkTexture(){
		if (this.sparkMap) return this.sparkMap
		const canvas = document.createElement('canvas')
		canvas.width = 64
		canvas.height = 64
		const context = canvas.getContext('2d')
		const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
		gradient.addColorStop(0, 'rgba(255,255,255,1)')
		gradient.addColorStop(0.2, 'rgba(255,245,215,0.95)')
		gradient.addColorStop(0.5, 'rgba(255,215,120,0.35)')
		gradient.addColorStop(1, 'rgba(255,190,80,0)')
		context.fillStyle = gradient
		context.fillRect(0, 0, 64, 64)
		this.sparkMap = new THREE.CanvasTexture(canvas)
		return this.sparkMap
	}

	/**
	 * LoreWeaver fork: fades dice that don't count, such as the lower die when the higher one is kept. The fade
	 * eases in over `duration`, so the die sinks away rather than vanishing.
	 * @param {Array<number>} ids - The dice to fade, by their place in the throw (0 is the first die).
	 * @param {number} [opacity=0.3] - How solid they end, from 0 (gone) to 1 (unchanged).
	 * @param {number} [duration=900] - How long the fade takes, in milliseconds. 0 fades at once.
	 * @returns {Promise<void>} Resolves when the fade has finished.
	 */
	fadeDice(ids = [], opacity = 0.3, duration = 900){
		const meshes = ids.map((id) => this.diceList[id]).filter(Boolean)
		const materials = meshes.flatMap((mesh) => (Array.isArray(mesh.material) ? mesh.material : [mesh.material]))
		const from = materials.map((material) => material.opacity)
		materials.forEach((material) => { material.transparent = true })
		const paint = (share) => {
			// Smoothstep: starts and ends gently.
			const eased = share * share * (3 - 2 * share)
			materials.forEach((material, i) => { material.opacity = from[i] + (opacity - from[i]) * eased })
			if (this.renderer) this.renderer.render(this.scene, this.camera)
		}
		return new Promise((resolve) => {
			const done = () => {
				paint(1)
				meshes.forEach((mesh) => { mesh.castShadow = opacity >= 0.6 })
				if (this.renderer) this.renderer.render(this.scene, this.camera)
				resolve()
			}
			if (!meshes.length || !(duration > 0) || typeof requestAnimationFrame !== 'function') { done(); return }
			const start = performance.now()
			const step = (now) => {
				const share = Math.min(1, (now - start) / duration)
				if (share >= 1) { done(); return }
				paint(share)
				requestAnimationFrame(step)
			}
			requestAnimationFrame(step)
		})
	}

	setDimensions(dimensions) {
		this.display.currentWidth = this.container.clientWidth / 2;
		this.display.currentHeight = this.container.clientHeight / 2;
		if (dimensions) {
			this.display.containerWidth = dimensions.x;
			this.display.containerHeight = dimensions.y;
		} else {
			this.display.containerWidth = this.display.currentWidth;
			this.display.containerHeight = this.display.currentHeight;
		}
		this.display.aspect = Math.min(this.display.currentWidth / this.display.containerWidth, this.display.currentHeight / this.display.containerHeight);
		this.display.scale = Math.sqrt(this.display.containerWidth * this.display.containerWidth + this.display.containerHeight * this.display.containerHeight) / 13;

		this.makeWorldBox()

		this.renderer.setSize(this.display.currentWidth * 2, this.display.currentHeight * 2);

		this.cameraHeight.max = this.display.currentHeight / this.display.aspect / Math.tan(10 * Math.PI / 180);

		this.cameraHeight.medium = this.cameraHeight.max / 1.5;
		this.cameraHeight.far = this.cameraHeight.max;
		this.cameraHeight.close = this.cameraHeight.max / 2;

		if (this.camera) this.scene.remove(this.camera);
		this.camera = new THREE.PerspectiveCamera(20, this.display.currentWidth / this.display.currentHeight, 1, this.cameraHeight.max * 1.3);

		switch (this.animstate) {
			case 'selector':
				this.camera.position.z = this.selector.dice.length > 9 ? this.cameraHeight.far : (this.selector.dice.length < 6 ? this.cameraHeight.close : this.cameraHeight.medium);
				break;
			case 'throw': case 'afterthrow': default: this.camera.position.z = this.cameraHeight.far;

		}

		this.camera.lookAt(new THREE.Vector3(0,0,0));
		
		const maxwidth = Math.max(this.display.containerWidth, this.display.containerHeight);

		if (this.light) this.scene.remove(this.light);
		if (this.light_amb) this.scene.remove(this.light_amb);
		this.light = new THREE.SpotLight(this.color_spotlight, this.light_intensity);
		this.light.position.set(-maxwidth / 2, maxwidth / 2, maxwidth * 3);
		this.light.target.position.set(0, 0, 0);
		this.light.distance = maxwidth * 5;
		this.light.angle = Math.PI/4;
		this.light.castShadow = this.shadows;
		this.light.shadow.camera.near = maxwidth / 10;
		this.light.shadow.camera.far = maxwidth * 5;
		this.light.shadow.camera.fov = 50;
		this.light.shadow.bias = 0.001;
		this.light.shadow.mapSize.width = 1024;
		this.light.shadow.mapSize.height = 1024;
		this.scene.add(this.light);

		this.light_amb = new THREE.HemisphereLight( 0xffffbb, 0x676771, this.light_intensity );
		this.scene.add(this.light_amb);

		if (this.desk) this.scene.remove(this.desk);
		let shadowplane = new THREE.ShadowMaterial();
		shadowplane.opacity = 0.5;
		this.desk = new THREE.Mesh(new THREE.PlaneGeometry(this.display.containerWidth * 6, this.display.containerHeight * 6, 1, 1), shadowplane);
		this.desk.receiveShadow = this.shadows;
		this.scene.add(this.desk);

		this.renderer.render(this.scene, this.camera);
	}

	resizeWorld(){
		const resize = () => {
			const canvas = this.renderer.domElement;
			const width = this.container.clientWidth;
			const height = this.container.clientHeight;
			const needResize = canvas.width !== width || canvas.height !== height;
			if (needResize) {
				this.setDimensions(new THREE.Vector2(this.container.clientWidth, this.container.clientHeight))
			}
			return needResize;
		}
		const debounceResize = debounce(resize)
		window.addEventListener("resize", debounceResize)
	}

	vectorRand({x, y}) {
		let angle = Math.random() * Math.PI / 5 - Math.PI / 5 / 2;
		let vec = {
			x: x * Math.cos(angle) - y * Math.sin(angle),
			y: x * Math.sin(angle) + y * Math.cos(angle)
		};
		if (vec.x == 0) vec.x = 0.01;
		if (vec.y == 0) vec.y = 0.01;
		return vec;
	}

	//returns an array of vectordata objects
	getNotationVectors(notation, vector, boost, dist){

		let notationVectors = new DiceNotation(notation);

		for (let i in notationVectors.set) {

			const diceobj = this.DiceFactory.get(notationVectors.set[i].type);
			let numdice = notationVectors.set[i].num;
			let operator = notationVectors.set[i].op;
			let sid = notationVectors.set[i].sid;
			let gid = notationVectors.set[i].gid;
			let glvl = notationVectors.set[i].glvl;
			let func = notationVectors.set[i].func;
			let args = notationVectors.set[i].args;

			for(let k = 0; k < numdice; k++){

				let vec = this.vectorRand(vector);

				vec.x /= dist;
				vec.y /= dist;

				// LoreWeaver fork: throw_start says how far out the dice start (the original was always 0.9).
				let pos = {
					x: this.display.containerWidth * (vec.x > 0 ? -1 : 1) * this.throw_start,
					y: this.display.containerHeight * (vec.y > 0 ? -1 : 1) * this.throw_start,
					z: Math.random() * 200 + 200
				};

				let projector = Math.abs(vec.x / vec.y);
				if (projector > 1.0) pos.y /= projector; else pos.x *= projector;

				let velvec = this.vectorRand(vector);
				velvec.x /= dist;
				velvec.y /= dist;
				let velocity, angle, axis;

				if (diceobj.shape != "d2") {

					velocity = { 
						x: velvec.x * boost, 
						y: velvec.y * boost, 
						z: -10
					};

					angle = {
						x: -(Math.random() * vec.y * 5 + diceobj.inertia * vec.y),
						y: Math.random() * vec.x * 5 + diceobj.inertia * vec.x,
						z: 0
					};

					axis = { 
						x: Math.random(), 
						y: Math.random(), 
						z: Math.random(), 
						a: Math.random()
					};
				} else {
					//coin flip
					velocity = { 
						x: velvec.x * boost / 10, 
						y: velvec.y * boost / 10, 
						z: 3000
					};

					angle = {
						x: 12 * diceobj.inertia,//-(Math.random() * velvec.y * 50 + diceobj.inertia * velvec.y ) ,
						y: 1 * diceobj.inertia,//Math.random() * velvec.x * 50 + diceobj.inertia * velvec.x ,
						z: 0
					};

					axis = { 
						x: 1,//Math.random(), 
						y: 1,//Math.random(), 
						z: Math.random(), 
						a: Math.random()
					};
				}

				notationVectors.vectors.push({ 
					index: this.dieIndex++,
					type: diceobj.type, 
					op: operator,
					sid: sid,  
					gid: gid, 
					glvl: glvl,
					func: func, 
					args: args, 
					pos: pos, 
					velocity: velocity, 
					angle: angle, 
					axis: axis
				});
			}            
		}

		return notationVectors;
	}

	// swaps dice faces to match desired result
	swapDiceFace(dicemesh, result){
		const diceobj = this.DiceFactory.get(dicemesh.notation.type);

		// flag this result as forced
		dicemesh.resultReason = 'forced'

		if (diceobj.shape == 'd4') {
			this.swapDiceFace_D4(dicemesh, result);
			return;
		}

		let values = diceobj.values;
		let value = parseInt(dicemesh.getLastValue().value);
		result = parseInt(result);
		
		if (dicemesh.notation.type == 'd10' && value == 0) value = 10;
		if (dicemesh.notation.type == 'd100' && value == 0) value = 100;
		if (dicemesh.notation.type == 'd100' && (value > 0 && value < 10)) value *= 10;

		if (dicemesh.notation.type == 'd10' && result == 0) result = 10;
		if (dicemesh.notation.type == 'd100' && result == 0) result = 100;
		if (dicemesh.notation.type == 'd100' && (result > 0 && result < 10)) result *= 10;

		let valueindex = diceobj.values.indexOf(value);
		let resultindex = diceobj.values.indexOf(result);

		if (valueindex < 0 || resultindex < 0) return;
		if (valueindex == resultindex) return;

		// find material index for corresponding value -> face and swap them
		// must clone the geom before modifying it
		let geom = dicemesh.geometry.clone();

		// find list of faces that use the matching material index for the given value/result
		let geomindex_value = [];
		let geomindex_result = [];

		// it's magic but not really
		// the mesh's materials start at index 2
		let magic = 2;
		// except on d10 meshes
		if (diceobj.shape == 'd10') magic = 1;

		let material_value, material_result = (resultindex+magic);

		//and D2 meshes have a lot more faces
		if(diceobj.shape != "d2"){
			material_value = (valueindex+magic);
			material_result = (resultindex+magic);
		} else {
			material_value = valueindex+1;
			material_result = resultindex+1;
		}

		//and probably some third rule eventually...

		// let normals = geom.getAttribute('normal').array;
		for (var i = 0, l = geom.groups.length; i < l; ++i) {
			const face = geom.groups[i];
			const matindex = face.materialIndex;

			if (matindex == material_value) {
				geomindex_value.push(i);
				continue;
			}
			if (matindex == material_result) {
				geomindex_result.push(i);
				continue;
			}
		}

		if (geomindex_value.length <= 0 || geomindex_result.length <= 0) return;

		//swap the materials
		for(let i = 0, l = geomindex_result.length; i < l; i++) {
			geom.groups[geomindex_result[i]].materialIndex = material_value;
		}

		for(let i = 0, l = geomindex_value.length; i < l; i++) {
			geom.groups[geomindex_value[i]].materialIndex = material_result;
		}

		dicemesh.geometry = geom;
		dicemesh.result = [];
	}

	swapDiceFace_D4(dicemesh, result) {
		const diceobj = this.DiceFactory.get(dicemesh.notation.type);
		let value = parseInt(dicemesh.getLastValue().value);
		result = parseInt(result);

		if (!(value >= 1 && value <= 4)) return;

		let num = result - value;
		let geom = dicemesh.geometry.clone();

		for (let i = 0, l = geom.groups.length; i < l; ++i) {
			const face = geom.groups[i];
			let matindex = face.materialIndex;
			if (matindex == 0) continue;
        
			matindex += num - 1;

			while (matindex > 4) matindex -= 4;
			while (matindex < 1) matindex += 4;

			face.materialIndex = matindex + 1;
		}
		if (num != 0) {
			if (num < 0) num += 4;
			dicemesh.material = this.DiceFactory.createMaterials(diceobj, 0, 0, false, num);
		}

		dicemesh.geometry = geom;
	}

	//spawns one dicemesh object from a single vectordata object
	spawnDice(vectordata, reset = false) {
		const {pos, axis, angle, velocity} = vectordata
		let dicemesh
		
		if(!reset) {
			dicemesh = this.DiceFactory.create(vectordata.type, this.colorData);
			if(!dicemesh) return;
			dicemesh.notation = vectordata;
			dicemesh.result = [];
			dicemesh.stopped = 0;
			dicemesh.castShadow = this.shadows;
			this.scene.add(dicemesh);
			this.diceList.push(dicemesh);
		} else {
			dicemesh = reset
			// dicemesh.result = [];
			dicemesh.stopped = 0;
			this.world.removeBody(dicemesh.body);
		}

		dicemesh.body = new CANNON.Body({allowSleep: true, sleepSpeedLimit: 75, sleepTimeLimit:0.9, mass: dicemesh.mass, shape: dicemesh.geometry.cannon_shape, material: this.dice_body_material});
		dicemesh.body.type = CANNON.Body.DYNAMIC;
		dicemesh.body.position.set(pos.x, pos.y, pos.z);
		dicemesh.body.quaternion.setFromAxisAngle(new CANNON.Vec3(axis.x, axis.y, axis.z), axis.a * Math.PI * 2);
		dicemesh.body.angularVelocity.set(angle.x, angle.y, angle.z);
		dicemesh.body.velocity.set(velocity.x, velocity.y, velocity.z);
		dicemesh.body.linearDamping = 0.1;
		dicemesh.body.angularDamping = 0.1;
		dicemesh.body.diceShape = dicemesh.shape;
		dicemesh.body.sleepState = 0;

		dicemesh.body.addEventListener('collide', this.eventCollide.bind(this));

		this.world.addBody(dicemesh.body);
	}

	eventCollide({body, target}) {

		// collision events happen simultaneously for both colliding bodies
		// all this sanity checking helps limits sounds being played

		// don't play sounds if we're simulating
		if (this.animstate == 'simulate') return;
		if (!this.sounds || !body) return;

		// let volume = parseInt(window.DiceFavorites.settings.volume.value) || 0;
		if (this.volume <= 0) return;

		let now = Date.now();
		let currentSoundType = (body.mass > 0) ? 'dice' : 'table';

		// the idea here is that a dice clack should never be skipped in favor of a table sound
		// if ((don't play sounds if we played one this world step, or there hasn't been enough delay) AND 'this sound IS NOT a dice clack') then 'skip it'
		if ((this.lastSoundStep == body.world.stepnumber || this.lastSound > now) && currentSoundType != 'dice') return;

		// also skip if it's too early and both last sound and this sound are the same
		if ((this.lastSoundStep == body.world.stepnumber || this.lastSound > now) && currentSoundType == 'dice' && this.lastSoundType == 'dice') return;

		if (body.mass > 0) { // dice to dice collision

			let speed = body.velocity.length();
			// also don't bother playing at low speeds
			if (speed < 250) return;

			let sound;

			// LoreWeaver fork: a set that hasn't loaded yet is skipped instead of throwing an error.
			const clips = this.sounds_dice[body.diceShape === "d2" ? 'coin' : this.sound_dieMaterial] || [];
			sound = clips[Math.floor(Math.random() * clips.length)];
			if(sound){
				sound.volume = Math.min(speed / 8000, this.volume/100)
				sound.play().catch(error => {});
			}
			// if (isPlaying !== undefined) {
			// 	isPlaying.then(() => {
			// 		// Autoplay started!
			// 	}).catch(error => {
			// 		// Autoplay was prevented.
			// 		// console.warn('Sounds muted by autoplay')
			// 	});
			// }
			this.lastSoundType = 'dice';


		} else { // dice to table collision
			let speed = target.velocity.length();
			// also don't bother playing at low speeds
			if (speed < 250) return;

			let surface = this.surface;

			let soundlist = this.sounds_table[surface] || [];
			let sound = soundlist[Math.floor(Math.random() * soundlist.length)];
			if(sound){
				sound.volume = Math.min(speed / 8000, this.volume/100)
				sound.play().catch(error => {});
			}
			// if (isPlaying !== undefined) {
			// 	isPlaying.then(() => {
			// 		// Autoplay started!
			// 	}).catch(error => {
			// 		// Autoplay was prevented.
			// 		// console.warn('Sounds muted by autoplay')
			// 	});
			// }
			this.lastSoundType = 'table';
		}

		this.lastSoundStep = body.world.stepnumber;
		this.lastSound = now + this.soundDelay;
	}

	checkForRethrow(dicemesh) {
		// all dice in a set/dice group will have the same function and arguments due to sorting beforehand
		// this means the list passed in is the set of dice that need to be affected by this function
		let diceFunc = (dicemesh.notation.func) ? dicemesh.notation.func.toLowerCase() : '';
		// let funcdata = this.DiceFunctions.rethrowFunctions[diceFunc];
		let funcdata

		let reroll = false;
			
		if (diceFunc != '' && funcdata && funcdata.method) {
			diceFunc = dicemesh.notation.func.toLowerCase();
			let diceFuncArgs = dicemesh.notation.args || '';
			reroll = funcdata.method(dicemesh, diceFuncArgs);
		}

		return reroll;
	}

	throwFinished() {
		const forcedFinish = this.iteration > this.iterationLimit

		// cycle through diceList and if any dice are still awake then return false
		for (let i=0, len=this.diceList.length; i < len; ++i) {
			const dicemesh = this.diceList[i];
			const sleepState = CANNON.Body.SLEEPING

			if (dicemesh.body.sleepState < sleepState && !forcedFinish) {
				return false;
			}

			if (dicemesh.body.sleepState == sleepState || forcedFinish) {
				if(dicemesh.body.type === CANNON.Body.KINEMATIC){
					continue
				}

				let rethrow = false;

				//check for forced roll
				if (dicemesh.result.length == 0) {
					dicemesh.storeRolledValue(dicemesh.resultReason);
					rethrow = this.checkForRethrow(dicemesh);
				} else if (dicemesh.result.length > 0 && dicemesh.rerolling) {
					dicemesh.rerolling = false;
					dicemesh.storeRolledValue('reroll');
					rethrow = this.checkForRethrow(dicemesh);
				}

				if (rethrow) {
					dicemesh.rerolls += 1;
					dicemesh.rerolling = true;
					dicemesh.body.wakeUp();
					dicemesh.body.type = CANNON.Body.DYNAMIC;
					dicemesh.body.angularVelocity = new CANNON.Vec3(25, 25, 25);
					dicemesh.body.velocity = new CANNON.Vec3(0, 0, 3000);
					return false;
				}

				dicemesh.rerolling = false;
				dicemesh.body.type = CANNON.Body.KINEMATIC;
				
			}
		}
		return true;
	}

	simulateThrow() {
		this.animstate = 'simulate';
		this.iteration = 0;
		this.rolling = true;
		while (!this.throwFinished(true)) {
			++this.iteration;
			this.world.step(this.framerate);
		}
	}

	animateThrow(threadid, callback){
		this.animstate = 'throw';
		let time = Date.now();
		this.last_time = this.last_time || time - (this.framerate*1000);
		let time_diff = (time - this.last_time) / 1000;
		++this.iteration;
		let neededSteps = Math.floor(time_diff / this.framerate);

		// this.container.style.opacity = '1';

		for(let i = 0; i < neededSteps; i++) {
			this.world.step(this.framerate);
			// this.cannonDebugger.update()
			++this.steps;
		}

		// update physics interactions visually
		for (let i in this.scene.children) {
			let interact = this.scene.children[i];
			if (interact.body != undefined) {
				interact.position.copy(interact.body.position);
				interact.quaternion.copy(interact.body.quaternion);
			}
		}

		this.renderer.render(this.scene, this.camera);
		this.last_time = this.last_time + neededSteps*this.framerate*1000;


		// roll finished
		if (this.running == threadid && this.throwFinished()) {
			this.running = false;
			this.rolling = false;
			if(callback) callback.call(this, this.notationVectors);
			
			this.running = Date.now();
			this.animateAfterThrow(this.running);
			return;
		}

		// roll not finished, keep animating
		if (this.running == threadid) {
			((animateCallback, tid, at, aftercall, vecs) => {
				if (!at && time_diff < this.framerate) {
					setTimeout(() => { requestAnimationFrame(() => { animateCallback.call(this, tid, aftercall, vecs); }) }, (this.framerate - time_diff) * 1000);
				} else {
					requestAnimationFrame(() => { animateCallback.call(this, tid, aftercall, vecs); });
				}
			}).bind(this)(this.animateThrow, threadid, this.adaptive_timestep, callback);
		}
	}

	animateAfterThrow(threadid) {
		this.animstate = 'afterthrow';
		let time = Date.now();
		let time_diff = (time - this.last_time) / 1000;
		if (time_diff > 3) time_diff = this.framerate;

		this.running = false;
		this.last_time = time;
		this.renderer.render(this.scene, this.camera);
		if (this.running == threadid) {
			((animateCallback, tid, at) => {
				if (!at && time_diff < this.framerate) {
					setTimeout(() => { requestAnimationFrame(() => { animateCallback.call(this, tid); }) }, (this.framerate - time_diff) * 1000);
				} else {
					requestAnimationFrame(() => { animateCallback.call(this, tid); });
				}
			}).bind(this)(this.animateAfterThrow, threadid, this.adaptive_timestep);
		}
	}

	startClickThrow(notation) {
		// if (this.rolling) return;
		if(this.rolling) {
			this.clearDice();
			this.rolling = false
		}

		// LoreWeaver fork: every throw is full strength, from any side. See throwVector.js.
		const { vector, dist, boost } = throwVector({
			width: this.display.currentWidth,
			height: this.display.currentHeight,
			strength: this.strength,
			spread: this.throw_spread
		});

		const notationVectors = this.getNotationVectors(notation, vector, boost, dist);

		return notationVectors
	}

	clearDice() {
		this.running = false;
		let dice;
		while (dice = this.diceList.pop()) {
			this.scene.remove(dice); 
			if (dice.body) this.world.removeBody(dice.body);
		}
		this.renderer.render(this.scene, this.camera);

		setTimeout(() => { this.renderer.render(this.scene, this.camera); }, 100);
	}

	getDiceResults(id){
		if(id !== undefined){
			return {
				type: this.diceList[id].shape,
				sides: parseInt(this.diceList[id].shape.substring(1)),
				id,
				...this.diceList[id].result.at(-1)
			}
		}
		let counter = 0
		const modifier = this.notationVectors.constant ? parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`) : 0
		let rollTotal = modifier
		const result = {
			notation: this.notationVectors.notation,
			sets: this.notationVectors.set.map(set => {
				const endCount = counter + set.num - 1
				let setTotal = 0
				const rolls = []
				for (let index = counter; index <= endCount; index++) {
					if(this.diceList[counter].result.at(-1).reason === "remove") {
						counter++
						continue
					}
					rolls.push({
						type: set.type,
						sides: parseInt(set.type.substring(1)),
						id: counter,
						...this.diceList[counter].result.at(-1)
					})
					setTotal += this.diceList[counter].result.at(-1).value
					counter++
				}
				const returnSet = {
					num: set.num,
					type: set.type,
					sides: parseInt(set.type.substring(1)),
					rolls,
					total: setTotal,
				}
				rollTotal += setTotal
				return returnSet
			}),
			modifier,
			total: rollTotal
		}
		return result
	}

	async roll(notationSting){
		this.notationVectors = this.startClickThrow(notationSting)
		if(this.notationVectors){
			// const DL = this.diceList
			return new Promise((resolve,reject) => {
				this.rollDice(() => {
					const results = this.getDiceResults()
	
					// setting up a couple of ways to consume the final results
					// call onRollComplete 
					this.onRollComplete(results)
	
					// dispatch an event with the results object for other UI elements to listen for
					const event = new CustomEvent('rollComplete', {detail: results})
					document.dispatchEvent(event)
	
					resolve(results)
				})
			})
		}
	}

	async reroll(diceIdArray) {
		this.rolling = true;
		this.running = Date.now();
		this.iteration = 0
		return new Promise((resolve,reject) => {
			diceIdArray.forEach(dieId => {
				const dicemesh = this.diceList[dieId]
				dicemesh.rerolls += 1;
				dicemesh.rerolling = true;
				dicemesh.body.wakeUp();
				dicemesh.body.type = CANNON.Body.DYNAMIC;
				dicemesh.body.angularVelocity = new CANNON.Vec3(25, 25, 25);
				dicemesh.body.velocity = new CANNON.Vec3(0, 0, 3000);
			})
			this.animateThrow(this.running, () => {
				const results = diceIdArray.map(dieId => this.getDiceResults(dieId))

				this.onRerollComplete(results)
				
				// dispatch an event with the results object for other UI elements to listen for
				const event = new CustomEvent('rerollComplete', {detail: results})
				document.dispatchEvent(event)

				resolve(results)
			})
		})
	}

	async add(notationSting){
		let dieCount = this.diceList.length
		if(!dieCount) return this.roll(notationSting)

		let addNotationVectors = this.startClickThrow(notationSting)
		let diceIdArray = []

		for (let i=0, len=addNotationVectors.vectors.length; i < len; ++i) {
			this.spawnDice(addNotationVectors.vectors[i]);
		}

		this.simulateThrow();
		this.steps = 0;
		this.iteration = 0;

		//reset dice vectors - for just the dice added
		for (let i=0, len=addNotationVectors.vectors.length; i < len; ++i) {
			const index = dieCount + i
			if (!this.diceList[index]) continue;

			//reset dice vectors
			this.spawnDice(addNotationVectors.vectors[i], this.diceList[index]);
			diceIdArray.push(index)
		}

		//check forced results, fix dice faces if necessary
		if (addNotationVectors.result && addNotationVectors.result.length > 0) {
			for (let i=0;i<addNotationVectors.result.length;i++) {
				const index = dieCount + i
				let dicemesh = this.diceList[index];
				if (!dicemesh) continue;
				if (dicemesh.getLastValue().value == addNotationVectors.result[i]) continue;
				this.swapDiceFace(dicemesh, addNotationVectors.result[i]);
			}
		}
		


		// let our vectors combine
		this.notationVectors = DiceNotation.mergeNotation(this.notationVectors, addNotationVectors)

		return new Promise((resolve,reject) => {
			const callback = () => {
				const results = diceIdArray.map(dieId => this.getDiceResults(dieId))
	
				// setting up a couple of ways to consume the dice added results
				// call onAddDiceComplete 
				this.onAddDiceComplete(results)
	
				// dispatch an event with the results object for other UI elements to listen for
				const event = new CustomEvent('addDiceComplete', {detail: results})
				document.dispatchEvent(event)
	
				resolve(results)
			}

			// animate the previously simulated roll
			this.rolling = true;
			this.running = Date.now();
			this.last_time = 0;
			this.animateThrow(this.running, callback);
		})
	}

	async remove(diceIdArray){
		
		return new Promise((resolve,reject) => {
			const results = []
			diceIdArray.forEach(dieId => {
				const mesh = this.diceList[dieId]
				if (mesh.body) this.world.removeBody(mesh.body);
				this.scene.remove(mesh);
				mesh.storeRolledValue('remove');
				results.push(this.getDiceResults(dieId))
			})

			this.renderer.render(this.scene, this.camera);

			this.onRemoveDiceComplete(results)

			// dispatch an event with the results object for other UI elements to listen for
			const event = new CustomEvent('removeDiceComplete', {detail: results})
			document.dispatchEvent(event)

			resolve(results)

		})
	}

	rollDice(callback){

		if (this.notationVectors.error) {
			callback.call(this);
			return;
		}

		// this.camera.position.z = this.cameraHeight.far;
		this.clearDice();

		for (let i=0, len=this.notationVectors.vectors.length; i < len; ++i) {
			this.spawnDice(this.notationVectors.vectors[i]);
		}
		this.simulateThrow();
		this.steps = 0;
		this.iteration = 0;

		for (let i=0, len=this.diceList.length; i < len; ++i) {
			if (!this.diceList[i]) continue;
			
			//reset dice vectors
			this.spawnDice(this.notationVectors.vectors[i],this.diceList[i]);
		}
		
		//check forced results, fix dice faces if necessary
		if (this.notationVectors.result && this.notationVectors.result.length > 0) {
			for (let i=0;i<this.notationVectors.result.length;i++) {
				let dicemesh = this.diceList[i];
				if (!dicemesh) continue;
				if (dicemesh.getLastValue().value == this.notationVectors.result[i]) continue;
				this.swapDiceFace(dicemesh, this.notationVectors.result[i]);
			}
		}

		// animate the previously simulated roll
		this.rolling = true;
		this.running = Date.now();
		this.last_time = 0;
		this.animateThrow(this.running, callback);

	}
}

export { DiceBox }