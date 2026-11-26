import test from 'node:test'
import assert from 'node:assert/strict'
import { FONT_PRESETS, canvasFont, centerGlyphMetrics, faceLayoutFor, fitGlyphSize, resolveEdgeColor } from '../src/faceStyle.js'

test('canvasFont resolves named font presets with lining-figure serif fonts, custom families, and fallback die font', () => {
	assert.match(canvasFont('serif', 'Arial', 42), /^bold 42pt 'Palatino Linotype'/)
	assert.equal(FONT_PRESETS.serif.includes('Georgia'), false)
	assert.equal(FONT_PRESETS.display.includes('Georgia'), false)
	assert.match(canvasFont('mono', 'Arial', 36), /^bold 36pt .*monospace/)
	assert.equal(canvasFont('Copperplate', 'Arial', 30), '30pt Copperplate')
	assert.equal(canvasFont('', 'Times New Roman', 28), '28pt Times New Roman')
})

test('resolveEdgeColor uses explicit edge colour and falls back to background when blank', () => {
	assert.equal(resolveEdgeColor({ background: '#111111', edge: '#d4ae5c' }), '#d4ae5c')
	assert.equal(resolveEdgeColor({ background: '#111111', edge: '' }), '#111111')
	assert.equal(resolveEdgeColor({ background: '#111111' }), '#111111')
})

test('centerGlyphMetrics centers actual glyph ink box vertically and horizontally on target point', () => {
	const placed = centerGlyphMetrics({ actualBoundingBoxAscent: 40, actualBoundingBoxDescent: 4, actualBoundingBoxLeft: 22, actualBoundingBoxRight: 18 }, 128, 128)
	assert.equal(placed.exact, true)
	assert.equal(placed.x, 130)
	assert.equal(placed.y, 146)
	assert.equal(placed.width, 40)
	assert.equal(placed.height, 44)
	// Fallback when actualBoundingBox metrics are absent.
	const fallback = centerGlyphMetrics({ width: 32 }, 128, 128)
	assert.equal(fallback.exact, false)
	assert.equal(fallback.x, 128)
	assert.equal(fallback.y, 128)
})

test('fitGlyphSize shrinks oversized numerals to stay clear of bevels and faceLayoutFor centers d10 kite incircle', () => {
	assert.equal(fitGlyphSize(80, 120, 60, 90, 90), 60)
	assert.equal(fitGlyphSize(80, 60, 60, 90, 90), 80)
	const d10 = faceLayoutFor('d10', 256)
	assert.ok(d10.cy > 140 && d10.cy < 155)
	const d20 = faceLayoutFor('d20', 256)
	assert.ok(d20.maxW < faceLayoutFor('d6', 256).maxW)
})
