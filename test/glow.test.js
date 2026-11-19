// test/glow.test.js
// LoreWeaver fork: a colorset's glow lights the die's own faces, and a set without one is unchanged.
import test from 'node:test'
import assert from 'node:assert/strict'
import { MeshStandardMaterial, Texture } from 'three'
import { applyGlow, glowLevel } from '../src/glow.js'

test('a set with glow lights its faces with their own picture', () => {
	const mat = new MeshStandardMaterial()
	const composite = new Texture()
	assert.equal(applyGlow(mat, composite, glowLevel(0.4)), true)
	assert.equal(mat.emissiveMap, composite)
	assert.equal(mat.emissiveIntensity, 0.4)
	assert.equal(mat.emissive.getHex(), 0xffffff)
})

test('glow is kept between 0 and 1', () => {
	assert.equal(glowLevel(3), 1)
	assert.equal(glowLevel(-1), 0)
	assert.equal(glowLevel('bright'), 0)
	assert.equal(glowLevel(undefined), 0)
})

test('a set without glow is left as the original', () => {
	const mat = new MeshStandardMaterial()
	assert.equal(applyGlow(mat, new Texture(), glowLevel(undefined)), false)
	assert.equal(mat.emissiveMap, null)
	assert.equal(mat.emissiveIntensity, 1)
	assert.equal(mat.emissive.getHex(), 0x000000)
})
