import test from 'node:test'
import assert from 'node:assert/strict'
import { easeInOut, lineupPositions } from '../src/diceArrange.js'

test('lineupPositions centers a single row symmetrically around x=0', () => {
	const pts = lineupPositions(3, { spacing: 100, maxWidth: 500 })
	assert.deepEqual(pts, [
		{ x: -100, y: 0 },
		{ x: 0, y: 0 },
		{ x: 100, y: 0 },
	])
})

test('lineupPositions wraps neatly into multiple centered rows on narrow widths', () => {
	const pts = lineupPositions(5, { spacing: 100, maxWidth: 320, rowGap: 120 })
	assert.equal(pts.length, 5)
	// Row 0 has 3 items at y=+60, Row 1 has 2 items at y=-60
	assert.equal(pts[0].y, 60)
	assert.equal(pts[3].y, -60)
	assert.equal(pts[3].x, -50)
	assert.equal(pts[4].x, 50)
})

test('easeInOut maps endpoints cleanly', () => {
	assert.equal(easeInOut(0), 0)
	assert.equal(easeInOut(0.5), 0.5)
	assert.equal(easeInOut(1), 1)
})
