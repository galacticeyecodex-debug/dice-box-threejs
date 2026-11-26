// test/dieAura.test.js
// LoreWeaver fork: what a die gives off as it rolls: embers for fire, smoke for shadow, nothing for the rest.
import test from 'node:test'
import assert from 'node:assert/strict'
import { AURAS, auraOf, emitCount, particleLook } from '../src/dieAura.js'

test('fire and shadow sets have their aura; others have none', () => {
	assert.equal(auraOf({ effect: 'fire' }).id, 'fire')
	assert.equal(auraOf({ effect: 'shadow' }).id, 'shadow')
	assert.equal(auraOf({ effect: 'frost' }), null)
	assert.equal(auraOf({}), null)
	assert.equal(auraOf(undefined), null)
})

test('a set can choose its aura, or none', () => {
	assert.equal(auraOf({ aura: 'shadow', effect: 'fire' }).id, 'shadow')
	assert.equal(auraOf({ aura: 'none', effect: 'fire' }), null)
})

test('embers float up over the dice; smoke stays low on the table, under them', () => {
	assert.equal(AURAS.fire.ground, false)
	assert.equal(AURAS.shadow.ground, true)
	assert.ok(AURAS.fire.soft > AURAS.shadow.soft)
})

test('a die gives off more while moving fast than at rest', () => {
	const aura = auraOf({ effect: 'fire' })
	const fast = emitCount(aura, 1000, 1)
	const rest = emitCount(aura, 0, 0.1 * 10, 0)
	assert.ok(fast.count > rest.count)
})

test('a slow rate still gives off evenly, carrying what is left over', () => {
	const aura = auraOf({ effect: 'shadow' })
	let carry = 0
	let total = 0
	for (let frame = 0; frame < 60; frame++) {
		const result = emitCount(aura, 0, 1 / 60, carry)
		carry = result.carry
		total += result.count
	}
	// One second at rest gives off restRate particles, give or take the one carried.
	assert.ok(Math.abs(total - aura.restRate) <= 1)
})

test('nothing is given off without time passing', () => {
	assert.equal(emitCount(auraOf({ effect: 'fire' }), 100, 0).count, 0)
})

test('a particle fades in, fades out and dies; embers shrink and smoke spreads', () => {
	const fire = auraOf({ effect: 'fire' })
	const smoke = auraOf({ effect: 'shadow' })
	assert.ok(particleLook(fire, 0.5, 1).alpha > particleLook(fire, 0.9, 1).alpha)
	assert.equal(particleLook(fire, 0, 1).alpha, 0)
	assert.equal(particleLook(fire, 1, 1).alive, false)
	assert.ok(particleLook(fire, 0.8, 1).scale < 1)
	assert.ok(particleLook(smoke, 0.8, 1).scale > 1)
})
