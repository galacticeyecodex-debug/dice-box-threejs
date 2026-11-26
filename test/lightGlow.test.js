// test/lightGlow.test.js
// LoreWeaver fork: the light a glowing die casts on the table: a pool under it, a halo, and a real light.
import test from 'node:test'
import assert from 'node:assert/strict'
import { MAX_DIE_LIGHTS, flickerAt, glowFrame, lightOf, packDieLights, shadeOf } from '../src/lightGlow.js'

test('a set casts light in its own colour, or its light colour when it names one', () => {
	assert.deepEqual(lightOf({ glow: 0.3, background: '#fff8e6' }), { level: 0.3, color: '#fff8e6', reach: 1 })
	assert.deepEqual(lightOf({ glow: 0.3, background: '#fff8e6', light: '#ffe2a0' }), { level: 0.3, color: '#ffe2a0', reach: 1 })
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

test('a flickering light stays mostly bright and never goes out', () => {
	const samples = Array.from({ length: 400 }, (_, i) => flickerAt(i / 60, 3))
	assert.ok(Math.min(...samples) >= 0.7)
	assert.ok(Math.max(...samples) <= 1)
	assert.ok(Math.max(...samples) - Math.min(...samples) > 0.1)
	assert.notEqual(flickerAt(1, 0), flickerAt(1, 5))
})

test('a dark light is a shade: a pool of darkness that keeps close to the die', () => {
	assert.equal(shadeOf('#0b0614'), true)
	assert.equal(shadeOf('#ff7a1a'), false)
	assert.equal(shadeOf('not a colour'), false)
	assert.ok(lightOf({ glow: 0.3, light: '#0b0614' }).reach < 1)
	assert.equal(lightOf({ glow: 0.3, light: '#ff7a1a' }).reach, 1)
	const near = glowFrame({ level: 0.3, radius: 10, height: 0, reach: 0.55 })
	const far = glowFrame({ level: 0.3, radius: 10, height: 0 })
	assert.ok(near.pool.scale < far.pool.scale)
	assert.ok(near.halo.scale < far.halo.scale)
})

test('packDieLights skips shades, keeps 1..MAX_DIE_LIGHTS exact, and clusters larger throws into a fixed pool', () => {
	assert.deepEqual(packDieLights([{ x: 0, y: 0, z: 10, color: '#0b0614', intensity: 0.8, distance: 120, shade: true }]), [])
	const two = [
		{ x: -10, y: 0, z: 10, color: '#ff7a1a', intensity: 0.5, distance: 120, shade: false },
		{ x: 10, y: 0, z: 10, color: '#ff7a1a', intensity: 0.5, distance: 120, shade: false },
	]
	assert.equal(packDieLights(two).length, 2)
	assert.equal(packDieLights(two)[0].x, -10)
	const eight = Array.from({ length: 8 }, (_, i) => ({
		x: (i - 3.5) * 20, y: 0, z: 10, color: '#ff7a1a', intensity: 0.5, distance: 120, shade: false,
	}))
	const packed = packDieLights(eight)
	assert.equal(packed.length, MAX_DIE_LIGHTS)
	assert.ok(packed[0].x < 0 && packed[1].x > 0)
	assert.ok(packed[0].intensity > 0.5 && packed[0].intensity <= 0.71)
	assert.ok(packed[0].distance > 120)
})
