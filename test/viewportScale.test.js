import test from 'node:test'
import assert from 'node:assert/strict'
import { responsiveBaseScale, scaleChanged } from '../src/viewportScale.js'

test('responsiveBaseScale shrinks dice gently on narrow phones and caps on huge monitors', () => {
	const phone = responsiveBaseScale(360, 640, 100)
	const tablet = responsiveBaseScale(800, 1280, 100)
	const desktop = responsiveBaseScale(1920, 1080, 100)
	assert.equal(phone, 68)
	assert.ok(tablet > phone && tablet <= desktop)
	assert.equal(desktop, 125)
})

test('responsiveBaseScale handles invalid or zero dimensions gracefully', () => {
	assert.equal(responsiveBaseScale(0, 0, 100), 100)
	assert.equal(responsiveBaseScale(-10, 500, 80), 80)
})

test('scaleChanged ignores sub-2px jitter and triggers on real orientation changes', () => {
	assert.equal(scaleChanged(100, 101), false)
	assert.equal(scaleChanged(100, 102), true)
	assert.equal(scaleChanged(68, 114), true)
})
