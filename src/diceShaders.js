// src/diceShaders.js
// LoreWeaver fork: Three.js onBeforeCompile surface shaders for dice. Glass gets a soft gem rim; the elemental
// looks get a moving surface of their own: frost, storm and arcane a rim that shimmers, fire living flames that
// churn across the die, and shadow smoke that swirls inside it. The patterns are drawn in the die's own space,
// so they ride with it as it tumbles, and they stay off the numbers (the face's number mask, from DiceFactory),
// so a die always reads.

import * as THREE from 'three'

/**
 * Each effect: the rim colour, how strong the rim is and how tight (power), and the shader mode below.
 * fire and shadow also paint the whole surface; the rest only light the rim.
 */
export const DICE_EFFECTS = {
	gem: { color: 0xffffff, strength: 0.28, power: 2.8, mode: 0 },
	fire: { color: 0xff6b1a, strength: 0.9, power: 2.0, mode: 1 },
	frost: { color: 0xbfefff, strength: 0.46, power: 2.4, mode: 2 },
	storm: { color: 0xffe46b, strength: 0.52, power: 2.5, mode: 3 },
	arcane: { color: 0xd088ff, strength: 0.46, power: 2.3, mode: 4 },
	shadow: { color: 0x8a5cf0, strength: 0.55, power: 2.2, mode: 5 },
}

/**
 * Resolves the surface shader effect id for a colorset/material pair.
 * Explicit `effect` takes precedence; glass material gets subtle `gem` Fresnel automatically.
 * @param {string|null|undefined} effect - Explicit colorset effect name.
 * @param {string|null|undefined} material - Material id ('glass', 'metal', etc.).
 * @returns {string|null} Effect key from DICE_EFFECTS, or null.
 */
export function resolveEffect(effect, material) {
	const explicit = String(effect || '').trim().toLowerCase()
	if (explicit && DICE_EFFECTS[explicit]) return explicit
	if (explicit === 'none') return null
	if (material === 'glass') return 'gem'
	return null
}

// Value noise and normalized 2- and 3-octave fractals of it, in GLSL that runs on WebGL 1 and 2.
// Using 2 octaves for the smooth domain warp (lwFbm2) and 3 octaves for final detail (lwFbm) preserves the
// exact same 0..0.9375 value range as a 4-octave fractal while cutting per-fragment noise hashes by ~44%.
const NOISE_GLSL = [
	'float lwHash(vec3 p) {',
	'  p = fract(p * 0.3183099 + 0.1);',
	'  p *= 17.0;',
	'  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));',
	'}',
	'float lwNoise(vec3 x) {',
	'  vec3 i = floor(x);',
	'  vec3 f = fract(x);',
	'  f = f * f * (3.0 - 2.0 * f);',
	'  return mix(',
	'    mix(mix(lwHash(i), lwHash(i + vec3(1.0, 0.0, 0.0)), f.x),',
	'        mix(lwHash(i + vec3(0.0, 1.0, 0.0)), lwHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),',
	'    mix(mix(lwHash(i + vec3(0.0, 0.0, 1.0)), lwHash(i + vec3(1.0, 0.0, 1.0)), f.x),',
	'        mix(lwHash(i + vec3(0.0, 1.0, 1.0)), lwHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);',
	'}',
	'float lwFbm2(vec3 p) {',
	'  float v = 0.625 * lwNoise(p);',
	'  p = p * 2.03 + vec3(1.7, 9.2, 3.1);',
	'  v += 0.3125 * lwNoise(p);',
	'  return v;',
	'}',
	'float lwFbm(vec3 p) {',
	'  float v = 0.0;',
	'  float a = 0.5357;',
	'  for (int i = 0; i < 3; i++) {',
	'    v += a * lwNoise(p);',
	'    p = p * 2.03 + vec3(1.7, 9.2, 3.1);',
	'    a *= 0.5;',
	'  }',
	'  return v;',
	'}',
].join('\n')

/** Whether an effect paints the whole 3D surface (needs object-space varying, noise, and label mask). */
const isSurfaceEffect = (effectId) => effectId === 'fire' || effectId === 'shadow'

/**
 * The GLSL added to the vertex shader: the die's own direction to each point, which surface patterns are drawn in.
 * Rim-only effects need no extra varying.
 * @param {string|null} [effectId=null] - Effect key, or null for full surface declarations.
 * @returns {{declarations:string, body:string}}
 */
export function effectVertexGlsl(effectId = null) {
	if (effectId && !isSurfaceEffect(effectId)) return { declarations: '', body: '' }
	return {
		declarations: 'varying vec3 vLwObj;',
		body: 'vLwObj = normalize(position);',
	}
}

const FIRE_BODY = [
	// Fire: flames churn across the die, the dark between them charred, the rim and the numbers white-hot.
	'  vec3 lwP = vLwObj * 2.6;',
	'  float lwT = uLwTime;',
	'  vec3 lwWarp = vec3(lwFbm2(lwP + vec3(0.0, 0.0, lwT * 0.9)), lwFbm2(lwP + vec3(5.2, 1.3, -lwT * 0.7)), lwFbm2(lwP + vec3(2.1, 7.7, lwT * 0.5)));',
	'  float lwN = lwFbm(lwP * 1.7 + lwWarp * 2.4 + vec3(0.0, -lwT * 1.4, -lwT * 1.1));',
	'  float lwFlame = smoothstep(0.38, 0.78, lwN);',
	'  vec3 lwFire = mix(vec3(0.55, 0.04, 0.0), vec3(1.0, 0.42, 0.04), smoothstep(0.42, 0.66, lwN));',
	'  lwFire = mix(lwFire, vec3(1.0, 0.88, 0.5), smoothstep(0.68, 0.88, lwN));',
	'  float lwFlick = 0.86 + 0.14 * sin(lwT * 13.0 + lwN * 9.0);',
	'  gl_FragColor.rgb *= mix(1.0, mix(0.45, 1.0, lwFlame), lwOpen);',
	'  gl_FragColor.rgb += lwFire * (lwFlame * 0.85 + lwFresnel * 0.7) * uLwRimStrength * lwFlick * lwOpen * gl_FragColor.a;',
	'  gl_FragColor.rgb += vec3(1.0, 0.8, 0.45) * lwLabel * 0.32 * lwFlick * gl_FragColor.a;',
]

const SHADOW_BODY = [
	// Shadow: slow smoke swirls inside the die, deep where it gathers, with violet wisps along its edges and a
	// rim that breathes. The numbers keep a pale light of their own, so they read against the dark.
	'  vec3 lwP = vLwObj * 2.0;',
	'  float lwT = uLwTime * 0.35;',
	'  vec3 lwWarp = vec3(lwFbm2(lwP + vec3(0.0, 0.0, lwT)), lwFbm2(lwP + vec3(3.1, 1.7, -lwT)), lwFbm2(lwP + vec3(7.3, 2.2, lwT * 0.6)));',
	'  float lwSmoke = lwFbm(lwP * 1.4 + lwWarp * 3.0);',
	'  float lwWisp = smoothstep(0.5, 0.62, lwSmoke) * (1.0 - smoothstep(0.62, 0.8, lwSmoke));',
	'  float lwBreath = 0.8 + 0.2 * sin(uLwTime * 1.6);',
	'  gl_FragColor.rgb *= mix(1.0, mix(0.22, 0.95, smoothstep(0.25, 0.75, lwSmoke)), lwOpen);',
	'  gl_FragColor.rgb += uLwRimColor * (lwWisp * 0.55 + lwFresnel * 0.9 * lwBreath) * uLwRimStrength * lwOpen * gl_FragColor.a;',
	'  gl_FragColor.rgb += vec3(0.86, 0.78, 1.0) * lwLabel * 0.3 * gl_FragColor.a;',
]

/**
 * Builds the GLSL fragment snippet injected before `#include <dithering_fragment>`.
 * When `effectId` is given, emits only the minimal GLSL needed for that effect so rim-only dice (gem, frost,
 * storm, arcane) never compile 3D noise helpers or unused branches.
 * Kept pure so tests can verify syntax and uniforms without WebGL.
 * @param {string|null} [effectId=null] - Effect key from DICE_EFFECTS, or null for the combined snippet.
 * @returns {{declarations:string, body:string}}
 */
export function effectGlsl(effectId = null) {
	const surface = !effectId || isSurfaceEffect(effectId)
	const declarations = [
		'uniform float uLwTime;',
		'uniform vec3 uLwRimColor;',
		'uniform float uLwRimStrength;',
		'uniform float uLwRimPower;',
		...(effectId ? [] : ['uniform float uLwEffectMode;']),
		...(surface ? ['uniform sampler2D uLwLabelMap;', 'uniform float uLwHasLabel;', 'varying vec3 vLwObj;', NOISE_GLSL] : []),
	].join('\n')

	const fresnelPrefix = [
		'{',
		'  vec3 lwViewDir = normalize(vViewPosition);',
		'  float lwNdotV = clamp(abs(dot(normalize(normal), lwViewDir)), 0.0, 1.0);',
		'  float lwFresnel = pow(1.0 - lwNdotV, uLwRimPower);',
	]
	const labelMaskPrefix = [
		// Where the face's number is: 1 on the number, 0 elsewhere. Faces without one (the bevels) have none.
		'  float lwLabel = 0.0;',
		'  #ifdef USE_UV',
		'  if (uLwHasLabel > 0.5) lwLabel = clamp(texture2D(uLwLabelMap, vUv).r * 1.6, 0.0, 1.0);',
		'  #endif',
		'  float lwOpen = 1.0 - lwLabel;',
	]

	if (effectId === 'gem') {
		return {
			declarations,
			body: [...fresnelPrefix, '  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * gl_FragColor.a;', '}'].join('\n'),
		}
	}
	if (effectId === 'frost') {
		return {
			declarations,
			body: [
				...fresnelPrefix,
				'  float lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);',
				'  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;',
				'}',
			].join('\n'),
		}
	}
	if (effectId === 'storm') {
		return {
			declarations,
			body: [
				...fresnelPrefix,
				'  float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);',
				'  float lwMod = 0.55 + 0.95 * lwFlash;',
				'  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;',
				'}',
			].join('\n'),
		}
	}
	if (effectId === 'arcane') {
		return {
			declarations,
			body: [
				...fresnelPrefix,
				'  float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);',
				'  vec3 lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);',
				'  float lwMod = 0.8 + 0.25 * lwShift;',
				'  gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;',
				'}',
			].join('\n'),
		}
	}
	if (effectId === 'fire') {
		return { declarations, body: [...fresnelPrefix, ...labelMaskPrefix, ...FIRE_BODY, '}'].join('\n') }
	}
	if (effectId === 'shadow') {
		return { declarations, body: [...fresnelPrefix, ...labelMaskPrefix, ...SHADOW_BODY, '}'].join('\n') }
	}

	const body = [
		...fresnelPrefix,
		...labelMaskPrefix,
		'  vec3 lwTint = uLwRimColor;',
		'  float lwMod = 1.0;',
		'  if (uLwEffectMode > 0.5 && uLwEffectMode < 1.5) {',
		...FIRE_BODY,
		'  } else if (uLwEffectMode >= 1.5 && uLwEffectMode < 2.5) {',
		'    lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);',
		'  } else if (uLwEffectMode >= 2.5 && uLwEffectMode < 3.5) {',
		'    float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);',
		'    lwMod = 0.55 + 0.95 * lwFlash;',
		'  } else if (uLwEffectMode >= 3.5 && uLwEffectMode < 4.5) {',
		'    float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);',
		'    lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);',
		'    lwMod = 0.8 + 0.25 * lwShift;',
		'  } else if (uLwEffectMode >= 4.5) {',
		...SHADOW_BODY,
		'  }',
		'  if (uLwEffectMode < 0.5 || (uLwEffectMode > 1.5 && uLwEffectMode < 4.5)) {',
		'    gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;',
		'  }',
		'}',
	].join('\n')
	return { declarations, body }
}

/**
 * Patches a Three.js MeshStandardMaterial with a Fresnel / elemental surface shader.
 * The material's number mask is set later, once its face is drawn: `material.userData.lwUniforms.uLwLabelMap`.
 * @param {object} mat - Three.js MeshStandardMaterial.
 * @param {string|null} effectId - Key in DICE_EFFECTS.
 * @param {{value:number}} timeUniform - Shared time uniform updated each frame.
 * @param {string|number} [rimColor] - Optional custom rim tint.
 * @returns {boolean} True if patched.
 */
export function applyDiceShader(mat, effectId, timeUniform, rimColor = null) {
	const spec = effectId ? DICE_EFFECTS[effectId] : null
	if (!spec || !mat || typeof mat !== 'object') return false
	const color = new THREE.Color(rimColor || spec.color)
	const fragment = effectGlsl(effectId)
	const vertex = effectVertexGlsl(effectId)
	const uniforms = {
		uLwRimColor: { value: color },
		uLwRimStrength: { value: spec.strength },
		uLwRimPower: { value: spec.power },
		uLwEffectMode: { value: spec.mode },
		uLwLabelMap: { value: null },
		uLwHasLabel: { value: 0 },
	}
	const prevCompile = mat.onBeforeCompile
	mat.customProgramCacheKey = () => `lw-dice-effect-${effectId}`
	mat.onBeforeCompile = (shader, renderer) => {
		if (typeof prevCompile === 'function') prevCompile.call(mat, shader, renderer)
		uniforms.uLwHasLabel.value = uniforms.uLwLabelMap.value ? 1 : 0
		Object.assign(shader.uniforms, uniforms, { uLwTime: timeUniform })
		if (vertex.declarations && typeof shader.vertexShader === 'string') {
			shader.vertexShader = shader.vertexShader
				.replace('void main() {', `${vertex.declarations}\nvoid main() {`)
				.replace('#include <begin_vertex>', `#include <begin_vertex>\n${vertex.body}`)
		}
		shader.fragmentShader = shader.fragmentShader
			.replace('void main() {', `${fragment.declarations}\nvoid main() {`)
			.replace('#include <dithering_fragment>', `${fragment.body}\n#include <dithering_fragment>`)
	}
	mat.userData = { ...(mat.userData || {}), lwEffect: effectId, lwUniforms: uniforms }
	return true
}

/**
 * Gives a patched material its face's number mask, so the effect stays off the number.
 * @param {object} mat - A material patched by applyDiceShader.
 * @param {object|null} labelMap - The face's numbers alone, white on black.
 * @returns {boolean} True when set.
 */
export function setEffectLabelMap(mat, labelMap) {
	const uniforms = mat?.userData?.lwUniforms
	if (!uniforms || !labelMap) return false
	uniforms.uLwLabelMap.value = labelMap
	uniforms.uLwHasLabel.value = 1
	return true
}
