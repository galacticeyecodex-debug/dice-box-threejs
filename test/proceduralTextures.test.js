import test from 'node:test'
import assert from 'node:assert/strict'
import { PROCEDURAL_PATTERNS, paintProceduralTexture, proceduralPatternOf, seededRandom } from '../src/proceduralTextures.js'

function mockCtx() {
	const ops = []
	return {
		ops,
		save() { ops.push('save') },
		restore() { ops.push('restore') },
		beginPath() { ops.push('beginPath') },
		moveTo() {},
		lineTo() {},
		arc() { ops.push('arc') },
		stroke() { ops.push('stroke') },
		fill() { ops.push('fill') },
		fillRect() { ops.push('fillRect') },
		createRadialGradient() { return { addColorStop() {} } },
	}
}

test('proceduralPatternOf recognizes every built-in procedural pattern and ignores image textures', () => {
	for (const id of PROCEDURAL_PATTERNS) {
		assert.equal(proceduralPatternOf(id), id)
		assert.equal(proceduralPatternOf({ procedural: id }), id)
	}
	assert.equal(proceduralPatternOf({ name: 'Fire', source: 'textures/fire.webp' }), null)
})

test('seededRandom is deterministic for the same seed', () => {
	const a = seededRandom(42)
	const b = seededRandom(42)
	assert.deepEqual([a(), a(), a()], [b(), b(), b()])
})

test('every procedural pattern paints cleanly onto albedo, bump, and glow contexts', () => {
	for (const id of PROCEDURAL_PATTERNS) {
		const ctx = mockCtx()
		const bumpCtx = mockCtx()
		const glowCtx = mockCtx()
		const painted = paintProceduralTexture(id, { ctx, bumpCtx, glowCtx, size: 128, seed: 7 })
		assert.equal(painted, true)
		assert.ok(ctx.ops.length > 3, `${id} should issue drawing ops`)
	}
})
