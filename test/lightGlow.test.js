// test/lightGlow.test.js
// LoreWeaver fork: the light a glowing die casts on the table: a pool under it, a halo, and a real light.
import test from 'node:test'
import assert from 'node:assert/strict'
import { glowFrame, lightOf } from '../src/lightGlow.js'

test('a set casts light in its own colour, or its light colour when it names one', () => {
	assert.deepEqual(lightOf({ glow: 0.3, background: '#fff8e6' }), { level: 0.3, color: '#fff8e6' })
	assert.deepEqual(lightOf({ glow: 0.3, background: '#fff8e6', light: '#ffe2a0' }), { level: 0.3, color: '#ffe2a0' })
	assert.equal(lightOf({ background: '#000' }).level, 0)
	assert.equal(lightOf(undefined).level, 0)
})

test('a resting die lights a pool around it, wider than the die, and a halo', () => {
	const frame = glowFrame({ level: 0.3, radius: 10, height: 0 })
	assert.equal(frame.pool.scale, 90)
	assert.ok(frame.pool.opacity > 0.5 && frame.pool.opacity <= 0.85)
	assert.equal(frame.halo.scale, 45)
	assert.ok(frame.light.intensity > 0)
	assert.equal(frame.light.distance, 120)
})

test('in the air, its pool spreads wider and fainter', () => {
	const resting = glowFrame({ level: 0.3, radius: 10, height: 0 })
	const flying = glowFrame({ level: 0.3, radius: 10, height: 60 })
	assert.ok(flying.pool.scale > resting.pool.scale)
	assert.ok(flying.pool.opacity < resting.pool.opacity)
})

test('the light fades with the die, and a die without glow casts none', () => {
	const half = glowFrame({ level: 0.3, radius: 10, height: 0, opacity: 0.5 })
	const solid = glowFrame({ level: 0.3, radius: 10, height: 0 })
	assert.ok(half.halo.opacity < solid.halo.opacity)
	assert.ok(half.light.intensity < solid.light.intensity)
	const none = glowFrame({ level: 0, radius: 10, height: 0 })
	assert.equal(none.pool.opacity, 0)
	assert.equal(none.halo.opacity, 0)
	assert.equal(none.light.intensity, 0)
})
