import test from 'node:test'
import assert from 'node:assert/strict'
import { applyDepthSettings } from '../src/materialDepth.js'

test('opaque dice enable depthTest, depthWrite, and disable transparent', () => {
	const mat = {}
	applyDepthSettings(mat, { composite: 'multiply' })
	assert.equal(mat.depthTest, true)
	assert.equal(mat.depthWrite, true)
	assert.equal(mat.transparent, false)
	assert.equal(mat.opacity, 1)
	assert.equal(mat.needsUpdate, true)
})

test('see-through destination-in textures enable transparent while keeping depthTest', () => {
	const mat = {}
	applyDepthSettings(mat, { composite: 'destination-in' })
	assert.equal(mat.depthTest, true)
	assert.equal(mat.transparent, true)
})

test('faded dice disable depthWrite below 0.5 opacity so solid dice behind them stay clean', () => {
	const mat = {}
	applyDepthSettings(mat, { composite: 'source-over' }, 0.25)
	assert.equal(mat.depthTest, true)
	assert.equal(mat.transparent, true)
	assert.equal(mat.depthWrite, false)
})
