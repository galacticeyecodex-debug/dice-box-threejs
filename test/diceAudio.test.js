import test from 'node:test'
import assert from 'node:assert/strict'
import { soundMaterialOf, impactAudioParams, dataUrlToArrayBuffer } from '../src/diceAudio.js'

test('soundMaterialOf resolves metal, perfectmetal, wood, glass, and plastic cleanly', () => {
	assert.equal(soundMaterialOf({ material: 'metal' }), 'metal')
	assert.equal(soundMaterialOf({ texture: { material: 'perfectmetal' } }), 'metal')
	assert.equal(soundMaterialOf({ texture: { material: 'wood' } }), 'wood')
	assert.equal(soundMaterialOf({ texture: { material: 'glass' } }), 'plastic')
	assert.equal(soundMaterialOf({ material: 'none' }), 'plastic')
	assert.equal(soundMaterialOf(null), 'plastic')
})

test('impactAudioParams pitches heavier dice lower and scales gain by speed and volume', () => {
	const light = impactAudioParams({ speed: 2000, mass: 250, volume: 80, random: () => 0.5 })
	const heavy = impactAudioParams({ speed: 2000, mass: 450, volume: 80, random: () => 0.5 })
	assert.ok(light.playbackRate > heavy.playbackRate)
	assert.equal(light.gain, 2000 / 8000)
	const capped = impactAudioParams({ speed: 20000, mass: 350, volume: 50, random: () => 0.5 })
	assert.equal(capped.gain, 0.5)
})

test('dataUrlToArrayBuffer decodes base64 data URIs cleanly', () => {
	const buf = dataUrlToArrayBuffer('data:audio/mpeg;base64,SGVsbG8=')
	assert.ok(buf instanceof ArrayBuffer)
	assert.equal(Buffer.from(buf).toString('utf8'), 'Hello')
	assert.equal(dataUrlToArrayBuffer('/media/dice/a.mp3'), null)
})
