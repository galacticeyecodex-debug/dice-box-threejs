import test from 'node:test'
import assert from 'node:assert/strict'
import { BUILTIN_ICONS, d4LabelTables, paintFaceIcon, parseFaceIcon } from '../src/faceIcons.js'

function mockCtx() {
	const ops = []
	return {
		ops,
		save() { ops.push('save') },
		restore() { ops.push('restore') },
		translate() {},
		scale() {},
		beginPath() { ops.push('beginPath') },
		closePath() {},
		moveTo() {},
		lineTo() {},
		quadraticCurveTo() {},
		arc() {},
		rect() {},
		stroke() { ops.push('stroke') },
		fill() { ops.push('fill') },
	}
}

test('parseFaceIcon recognizes built-in icons, raw svg paths, and ignores plain text', () => {
	assert.deepEqual(parseFaceIcon('icon:star'), { kind: 'builtin', name: 'star' })
	assert.deepEqual(parseFaceIcon('icon:fate-plus'), { kind: 'builtin', name: 'fate-plus' })
	assert.deepEqual(parseFaceIcon('svg:M0 -1 L1 1 L-1 1 Z'), { kind: 'svg', d: 'M0 -1 L1 1 L-1 1 Z' })
	assert.equal(parseFaceIcon('20'), null)
	assert.equal(parseFaceIcon('icon:nonexistent'), null)
})

test('every built-in icon paints cleanly with fill and optional outline', () => {
	for (const name of Object.keys(BUILTIN_ICONS)) {
		const ctx = mockCtx()
		assert.equal(paintFaceIcon(ctx, { kind: 'builtin', name }, { cx: 64, cy: 64, radius: 30, fill: '#fff', stroke: '#000' }), true)
		assert.ok(ctx.ops.includes('fill'))
		assert.ok(ctx.ops.includes('stroke'))
	}
})

test('d4LabelTables builds all four rotated orientation tables from four custom faces', () => {
	const tables = d4LabelTables(['A', 'B', 'C', 'D'])
	assert.equal(tables.length, 4)
	assert.deepEqual(tables[0][2], ['B', 'D', 'C'])
	assert.deepEqual(tables[0][5], ['A', 'B', 'C'])
	assert.equal(d4LabelTables(['A', 'B']), null)
})
