// src/viewportScale.js
// LoreWeaver fork: responsive dice geometry sizing across portrait phones, tablets, and desktops,
// plus clean resize/orientation change detection.

const REFERENCE_MIN_DIM = 700
const MIN_SCALE_RATIO = 0.68
const MAX_SCALE_RATIO = 1.25

/**
 * Computes an effective baseScale for the current viewport so dice stay proportional across
 * portrait phones, tablets rotating orientation, and wide desktop screens.
 * @param {number} width - Container width in CSS pixels.
 * @param {number} height - Container height in CSS pixels.
 * @param {number} [baseScale=100] - Configured baseScale at desktop reference size.
 * @returns {number} Effective baseScale, rounded to an integer.
 */
export function responsiveBaseScale(width, height, baseScale = 100) {
	if (!(width > 0) || !(height > 0) || !(baseScale > 0)) return baseScale || 100
	const minDim = Math.min(width, height)
	const ratio = Math.min(MAX_SCALE_RATIO, Math.max(MIN_SCALE_RATIO, minDim / REFERENCE_MIN_DIM))
	return Math.round(baseScale * ratio)
}

/**
 * Tells whether two base scales differ enough to justify rebuilding cached geometries.
 * @param {number} previous - Previous baseScale.
 * @param {number} next - Next baseScale.
 * @returns {boolean} True when geometries should be rebuilt.
 */
export function scaleChanged(previous, next) {
	return Math.abs((Number(previous) || 0) - (Number(next) || 0)) >= 2
}
