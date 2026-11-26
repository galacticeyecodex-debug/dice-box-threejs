import test from 'node:test'
import assert from 'node:assert/strict'
import { DICE_EFFECTS, applyDiceShader, effectGlsl, resolveEffect, setEffectLabelMap } from '../src/diceShaders.js'

test('resolveEffect defaults glass to gem and honours explicit elemental effects', () => {
	assert.equal(resolveEffect('', 'glass'), 'gem')
	assert.equal(resolveEffect('fire', 'metal'), 'fire')
	assert.equal(resolveEffect('none', 'glass'), null)
	assert.equal(resolveEffect('', 'wood'), null)
})

test('applyDiceShader patches fragment shader with Fresnel and time uniforms', () => {
	const mat = {}
	const timeUniform = { value: 0 }
	assert.equal(applyDiceShader(mat, 'arcane', timeUniform), true)
	assert.equal(mat.customProgramCacheKey(), 'lw-dice-effect-arcane')
	const shader = {
		uniforms: {},
		fragmentShader: 'void main() {\n#include <dithering_fragment>\n}',
	}
	mat.onBeforeCompile(shader)
	assert.equal(shader.uniforms.uLwTime, timeUniform)
	assert.equal(shader.uniforms.uLwEffectMode.value, DICE_EFFECTS.arcane.mode)
	assert.ok(shader.fragmentShader.includes('uLwRimColor'))
	assert.ok(shader.fragmentShader.includes('lwFresnel'))
	assert.ok(effectGlsl().body.includes('gl_FragColor.rgb +='))
})

test('fire and shadow paint the whole surface, drawn in the die\'s own space so it rides with the die', () => {
	const mat = {}
	assert.equal(applyDiceShader(mat, 'shadow', { value: 0 }), true)
	const shader = {
		uniforms: {},
		vertexShader: 'void main() {\n#include <begin_vertex>\n}',
		fragmentShader: 'void main() {\n#include <dithering_fragment>\n}',
	}
	mat.onBeforeCompile(shader)
	assert.ok(shader.vertexShader.includes('vLwObj = normalize(position);'))
	assert.ok(shader.fragmentShader.includes('varying vec3 vLwObj;'))
	assert.ok(shader.fragmentShader.includes('lwFbm'))
	assert.equal(shader.uniforms.uLwEffectMode.value, DICE_EFFECTS.shadow.mode)
})

test('the effect stays off the number once the face gives its number mask', () => {
	const mat = {}
	applyDiceShader(mat, 'fire', { value: 0 })
	const mask = { isTexture: true }
	assert.equal(setEffectLabelMap(mat, mask), true)
	const shader = { uniforms: {}, vertexShader: 'void main() {\n#include <begin_vertex>\n}', fragmentShader: 'void main() {\n#include <dithering_fragment>\n}' }
	mat.onBeforeCompile(shader)
	assert.equal(shader.uniforms.uLwLabelMap.value, mask)
	assert.equal(shader.uniforms.uLwHasLabel.value, 1)
	assert.equal(setEffectLabelMap({}, mask), false)
})
