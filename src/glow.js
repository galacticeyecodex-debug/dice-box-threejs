// src/glow.js
// LoreWeaver fork: a colorset's glow. A set with glow lights its own faces, numbers and all, so it shines whatever
// the room's light, as a die of light should. Kept apart from DiceFactory so it can be tested on its own.
import { Color } from 'three'

/**
 * Reads a colorset's glow.
 * @param {unknown} value - The colorset's glow, as given.
 * @returns {number} From 0 (the original: no glow) to 1.
 */
export function glowLevel(value) {
	return Math.min(Math.max(Number(value) || 0, 0), 1)
}

/**
 * Lights a face with its own picture.
 * @param {object} mat - The face's material.
 * @param {object|undefined} composite - The face's picture: its colour, texture and number.
 * @param {number} level - From glowLevel.
 * @returns {boolean} True when the face now glows.
 */
export function applyGlow(mat, composite, level) {
	if (!(level > 0) || !mat?.emissive || !composite) return false
	mat.emissiveMap = composite
	mat.emissive = new Color(0xffffff)
	mat.emissiveIntensity = level
	return true
}
