// src/diceShaders.js
// LoreWeaver fork: lightweight Three.js onBeforeCompile Fresnel and elemental surface shaders for
// gemstone/glass dice and elemental GM looks (fire, frost, storm, arcane).

import * as THREE from 'three'

export const DICE_EFFECTS = {
	gem: { color: 0xffffff, strength: 0.28, power: 2.8, mode: 0 },
	fire: { color: 0xff6b1a, strength: 0.48, power: 2.2, mode: 1 },
	frost: { color: 0xbfefff, strength: 0.46, power: 2.4, mode: 2 },
	storm: { color: 0xffe46b, strength: 0.52, power: 2.5, mode: 3 },
	arcane: { color: 0xd088ff, strength: 0.46, power: 2.3, mode: 4 },
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

/**
 * Builds the GLSL fragment snippet injected before `#include <dithering_fragment>`.
 * Kept pure so tests can verify syntax and uniforms without WebGL.
 * @returns {{declarations:string, body:string}}
 */
export function effectGlsl() {
	const declarations = [
		'uniform float uLwTime;',
		'uniform vec3 uLwRimColor;',
		'uniform float uLwRimStrength;',
		'uniform float uLwRimPower;',
		'uniform float uLwEffectMode;',
	].join('\n')
	const body = [
		'{',
		'  vec3 lwViewDir = normalize(vViewPosition);',
		'  float lwNdotV = clamp(abs(dot(normalize(normal), lwViewDir)), 0.0, 1.0);',
		'  float lwFresnel = pow(1.0 - lwNdotV, uLwRimPower);',
		'  vec3 lwTint = uLwRimColor;',
		'  float lwMod = 1.0;',
		'  if (uLwEffectMode > 0.5 && uLwEffectMode < 1.5) {',
		'    lwMod = 0.72 + 0.35 * sin(uLwTime * 5.2 + vViewPosition.x * 0.04);',
		'  } else if (uLwEffectMode >= 1.5 && uLwEffectMode < 2.5) {',
		'    lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);',
		'  } else if (uLwEffectMode >= 2.5 && uLwEffectMode < 3.5) {',
		'    float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);',
		'    lwMod = 0.55 + 0.95 * lwFlash;',
		'  } else if (uLwEffectMode >= 3.5) {',
		'    float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);',
		'    lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);',
		'    lwMod = 0.8 + 0.25 * lwShift;',
		'  }',
		'  gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;',
		'}',
	].join('\n')
	return { declarations, body }
}

/**
 * Patches a Three.js MeshStandardMaterial with a Fresnel / elemental surface shader.
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
	const { declarations, body } = effectGlsl()
	const prevCompile = mat.onBeforeCompile
	mat.customProgramCacheKey = () => `lw-dice-effect-${effectId}`
	mat.onBeforeCompile = (shader, renderer) => {
		if (typeof prevCompile === 'function') prevCompile.call(mat, shader, renderer)
		shader.uniforms.uLwTime = timeUniform
		shader.uniforms.uLwRimColor = { value: color }
		shader.uniforms.uLwRimStrength = { value: spec.strength }
		shader.uniforms.uLwRimPower = { value: spec.power }
		shader.uniforms.uLwEffectMode = { value: spec.mode }
		shader.fragmentShader = shader.fragmentShader
			.replace('void main() {', `${declarations}\nvoid main() {`)
			.replace('#include <dithering_fragment>', `${body}\n#include <dithering_fragment>`)
	}
	mat.userData = { ...(mat.userData || {}), lwEffect: effectId }
	return true
}
