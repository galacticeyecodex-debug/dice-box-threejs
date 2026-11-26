import test from 'node:test'
import assert from 'node:assert/strict'
import { BoundedTextureCache, disposeDieMesh } from '../src/gpuCache.js'

function mockBundle() {
	const disposed = []
	return {
		disposed,
		composite: { dispose() { disposed.push('composite') } },
		bump: { dispose() { disposed.push('bump') } },
		glow: { dispose() { disposed.push('glow') } },
	}
}

test('BoundedTextureCache evicts least-recently-used entries and disposes their textures', () => {
	const cache = new BoundedTextureCache(2)
	const a = mockBundle()
	const b = mockBundle()
	const c = mockBundle()
	cache.set('a', a)
	cache.set('b', b)
	// Touch 'a' so 'b' becomes least-recently-used.
	assert.equal(cache.get('a'), a)
	cache.set('c', c)
	assert.equal(cache.size, 2)
	assert.equal(cache.get('b'), null)
	assert.deepEqual(b.disposed, ['composite', 'bump', 'glow'])
	assert.deepEqual(a.disposed, [])
})

test('disposeDieMesh disposes materials, customDepthMaterial, and cloned geometry only', () => {
	const calls = []
	const sharedMesh = {
		material: [{ dispose() { calls.push('mat0') } }, { dispose() { calls.push('mat1') } }],
		customDepthMaterial: { dispose() { calls.push('depth') } },
		geometry: { dispose() { calls.push('shared-geom') } },
		userData: {},
	}
	disposeDieMesh(sharedMesh)
	assert.deepEqual(calls, ['mat0', 'mat1', 'depth'])

	const clonedCalls = []
	const clonedMesh = {
		material: { dispose() { clonedCalls.push('mat') } },
		geometry: { dispose() { clonedCalls.push('cloned-geom') } },
		userData: { clonedGeometry: true },
	}
	disposeDieMesh(clonedMesh)
	assert.deepEqual(clonedCalls, ['mat', 'cloned-geom'])
})
