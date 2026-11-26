import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { BURST_STYLES, burstProfile, celebrationMaterials, fumbleWobble, topFaceMaterialIndex } from '../src/celebration.js'

test('burstProfile resolves elemental styles and allows colour overrides', () => {
	const fire = burstProfile('fire')
	assert.equal(fire.style, 'fire')
	assert.ok(fire.gravity < 0)
	const custom = burstProfile('frost', 0xffffff)
	assert.equal(custom.color, 0xffffff)
	assert.equal(burstProfile('unknown').style, 'gold')
	assert.ok(Object.keys(BURST_STYLES).length >= 5)
})

test('topFaceMaterialIndex and celebrationMaterials isolate the upward-facing face', () => {
	const geom = new THREE.BufferGeometry()
	// 2 triangles: face 1 pointing down (-z), face 2 pointing up (+z)
	const normals = new Float32Array([
		0, 0, -1, 0, 0, -1, 0, 0, -1,
		0, 0, 1, 0, 0, 1, 0, 0, 1,
	])
	geom.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
	geom.addGroup(0, 3, 2)
	geom.addGroup(3, 3, 3)
	const mats = [
		{ id: 'edge', emissive: {} },
		{ id: 'pad', emissive: {} },
		{ id: 'down', emissive: {} },
		{ id: 'up', emissive: {} },
	]
	const mesh = { shape: 'd6', geometry: geom, quaternion: new THREE.Quaternion(), material: mats }
	assert.equal(topFaceMaterialIndex(mesh), 3)
	assert.deepEqual(celebrationMaterials(mesh, true).map((m) => m.id), ['up'])
	assert.equal(celebrationMaterials(mesh, false).length, 4)
})

test('fumbleWobble starts at 0, peaks early, and settles back to 0', () => {
	assert.equal(fumbleWobble(0), 0)
	assert.ok(Math.abs(fumbleWobble(0.1)) > 0.1)
	assert.ok(Math.abs(fumbleWobble(1)) < 1e-9)
})
