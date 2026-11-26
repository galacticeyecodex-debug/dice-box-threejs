import test from 'node:test'
import assert from 'node:assert/strict'
import { BoundedTextureCache, ShaderProgramKeeper, disposeDieMesh, faceTextureSize, materialProgramKey } from '../src/gpuCache.js'

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

test('ShaderProgramKeeper retains one texture-stripped sentinel per shader variant and disposes duplicates & evictions', () => {
	const disposed = []
	const makeMat = (id, effect) => ({
		type: 'MeshStandardMaterial',
		customProgramCacheKey: () => `lw-dice-effect-${effect}`,
		map: { tex: id },
		bumpMap: { bump: id },
		emissiveMap: null,
		userData: { lwUniforms: { uLwLabelMap: { value: { label: id } } } },
		dispose() { disposed.push(id) },
	})
	const keeper = new ShaderProgramKeeper(2)
	const f1 = makeMat('f1', 'fire')
	const f2 = makeMat('f2', 'fire')
	const s1 = makeMat('s1', 'shadow')
	const g1 = makeMat('g1', 'gem')

	keeper.keepOrDispose(f1)
	assert.equal(f1.map, null)
	assert.equal(f1.bumpMap, null)
	assert.equal(f1.userData.lwUniforms.uLwLabelMap.value, null)
	assert.deepEqual(disposed, [])

	// Duplicate variant disposes immediately, keeping f1 as the warm sentinel.
	keeper.keepOrDispose(f2)
	assert.deepEqual(disposed, ['f2'])

	keeper.keepOrDispose(s1)
	assert.equal(keeper.size, 2)
	// Adding a 3rd variant evicts the oldest ('fire' was touched by f2, so 'fire' stays or wait: f2 touched fire, s1 added after -> fire is oldest!).
	keeper.keepOrDispose(g1)
	assert.equal(keeper.size, 2)
	assert.deepEqual(disposed, ['f2', 'f1'])

	keeper.clear()
	assert.equal(keeper.size, 0)
	assert.deepEqual(disposed, ['f2', 'f1', 's1', 'g1'])
})

test('faceTextureSize uses 16px for plain bevel edges and caps numbered faces at 256px', () => {
	assert.equal(faceTextureSize(150, { isPlainEdge: true }), 16)
	assert.equal(faceTextureSize(150), 256)
	assert.equal(faceTextureSize(250), 256)
	assert.equal(faceTextureSize(40), 128)
	// transparent flag should not split shader program keys for the same material variant.
	const opaqueKey = materialProgramKey({ type: 'MeshStandardMaterial', map: {}, transparent: false })
	const fadeKey = materialProgramKey({ type: 'MeshStandardMaterial', map: {}, transparent: true })
	assert.equal(opaqueKey, fadeKey)
})
