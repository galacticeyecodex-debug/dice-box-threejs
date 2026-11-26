import test from 'node:test'
import assert from 'node:assert/strict'
import { DICE_EFFECTS, applyDiceShader, effectGlsl, resolveEffect } from '../src/diceShaders.js'

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
