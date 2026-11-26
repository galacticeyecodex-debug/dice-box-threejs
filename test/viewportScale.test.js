import test from 'node:test'
import assert from 'node:assert/strict'
import { deviceQuality, responsiveBaseScale, scaleChanged } from '../src/viewportScale.js'

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

test('deviceQuality adapts shadow maps and aura density for compact phones vs tablets/desktops', () => {
	const phone = deviceQuality(390, 420)
	const desktop = deviceQuality(1280, 800)
	assert.equal(phone.tier, 'compact')
	assert.equal(phone.shadowMapSize, 512)
	assert.equal(phone.auraScale, 0.6)
	assert.equal(phone.maxTextureSize, 256)
	assert.equal(desktop.tier, 'standard')
	assert.equal(desktop.shadowMapSize, 1024)
	assert.equal(desktop.auraScale, 1)
	assert.equal(desktop.maxTextureSize, 256)
})
