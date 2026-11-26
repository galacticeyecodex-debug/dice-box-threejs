import test from 'node:test'
import assert from 'node:assert/strict'
import { canvasFont, resolveEdgeColor } from '../src/faceStyle.js'

test('canvasFont resolves named font presets, custom families, and fallback die font', () => {
	assert.match(canvasFont('serif', 'Arial', 42), /^bold 42pt Georgia/)
	assert.match(canvasFont('mono', 'Arial', 36), /^bold 36pt .*monospace/)
	assert.equal(canvasFont('Copperplate', 'Arial', 30), '30pt Copperplate')
	assert.equal(canvasFont('', 'Times New Roman', 28), '28pt Times New Roman')
})

test('resolveEdgeColor uses explicit edge colour and falls back to background when blank', () => {
	assert.equal(resolveEdgeColor({ background: '#111111', edge: '#d4ae5c' }), '#d4ae5c')
	assert.equal(resolveEdgeColor({ background: '#111111', edge: '' }), '#111111')
	assert.equal(resolveEdgeColor({ background: '#111111' }), '#111111')
})
