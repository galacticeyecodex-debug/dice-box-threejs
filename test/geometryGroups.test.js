// test/geometryGroups.test.js
// LoreWeaver fork: consecutive triangles sharing a materialIndex are merged into single geometry groups
// so every die draws in far fewer WebGL draw calls while keeping all vertices and face normals intact.
import test from 'node:test'
import assert from 'node:assert/strict'
import { addMergedGroup } from '../src/gpuCache.js'

test('addMergedGroup collapses consecutive same-material triangles and bevels into single groups', () => {
	const geom = {
		groups: [],
		addGroup(start, count, materialIndex) {
			this.groups.push({ start, count, materialIndex })
		},
	}
	// Simulate a d6: 6 faces of 2 triangles (6 vertices each), followed by 32 bevel/corner triangles (materialIndex 0).
	let cursor = 0
	for (let face = 1; face <= 6; face += 1) {
		addMergedGroup(geom, cursor, 3, face + 1)
		cursor += 3
		addMergedGroup(geom, cursor, 3, face + 1)
		cursor += 3
	}
	for (let bevel = 0; bevel < 32; bevel += 1) {
		addMergedGroup(geom, cursor, 3, 0)
		cursor += 3
	}
	assert.equal(geom.groups.length, 7)
	assert.deepEqual(geom.groups[0], { start: 0, count: 6, materialIndex: 2 })
	assert.deepEqual(geom.groups[6], { start: 36, count: 96, materialIndex: 0 })
})
