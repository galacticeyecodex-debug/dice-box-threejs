import test from 'node:test'
import assert from 'node:assert/strict'
import { clientToNdc } from '../src/dicePick.js'

test('clientToNdc maps rect center to (0, 0) and corners to (-1..1)', () => {
	const rect = { left: 100, top: 50, width: 200, height: 100 }
	assert.deepEqual(clientToNdc(200, 100, rect), { x: 0, y: 0 })
	assert.deepEqual(clientToNdc(100, 50, rect), { x: -1, y: 1 })
	assert.deepEqual(clientToNdc(300, 150, rect), { x: 1, y: -1 })
	assert.equal(clientToNdc(50, 100, rect), null)
	assert.equal(clientToNdc(200, 100, { left: 0, top: 0, width: 0, height: 0 }), null)
})
