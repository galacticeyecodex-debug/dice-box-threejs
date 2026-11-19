// src/lightGlow.js
// LoreWeaver fork: the light a glowing die casts around it. A colorset with glow (src/glow.js) lights its own
// faces; this lights the table too. The table under the dice is usually the page behind a transparent canvas,
// so the light is drawn: a soft pool on the table under the die and a faint halo around it, which follow the
// die as it tumbles and fade with it. A small real light rides with the die too, so dice near it catch the glow.
// The sums are here, apart from three.js, so they can be tested on their own.
import { glowLevel } from './glow.js'

// How far the pool, halo and light reach, in die radii.
const POOL_RADII = 9
const POOL_GROWTH_RADII = 6
const HALO_RADII = 4.5
const LIGHT_REACH_RADII = 12
// How high, in die radii, a die rises before its pool is as wide and faint as it gets.
const LIFT_RADII = 6
// The brightest each can be.
const POOL_MAX_OPACITY = 0.85
const HALO_MAX_OPACITY = 0.7

const clamp = (value, low, high) => Math.min(Math.max(value, low), high)

/**
 * Reads the light a colorset casts.
 * @param {object} [colorset] - The die's colorset: its glow, and light, the colour of the light it casts.
 * @returns {{level:number, color:string}} level 0 casts none; the colour falls back to the die's own.
 */
export function lightOf(colorset = {}) {
	return { level: glowLevel(colorset?.glow), color: colorset?.light || colorset?.background || '#ffffff' }
}

/**
 * Works out one frame of a die's light.
 * @param {object} frame - The die now.
 * @param {number} frame.level - From lightOf.
 * @param {number} frame.radius - The die's size, as the radius of a ball around it.
 * @param {number} frame.height - How far its centre is above where it rests.
 * @param {number} [frame.opacity=1] - How faded the die is, 1 solid to 0 gone.
 * @returns {{pool:{scale:number, opacity:number}, halo:{scale:number, opacity:number}, light:{intensity:number, distance:number}}}
 *   The pool on the table (wider and fainter while the die is in the air), the halo, and the real light.
 */
export function glowFrame({ level, radius, height, opacity = 1 }) {
	const lit = clamp(level, 0, 1) * clamp(opacity, 0, 1)
	const lift = clamp(height / (radius * LIFT_RADII), 0, 1)
	return {
		pool: {
			scale: radius * (POOL_RADII + POOL_GROWTH_RADII * lift),
			opacity: Math.min(POOL_MAX_OPACITY, lit * 1.8 * (1 - 0.6 * lift)),
		},
		halo: { scale: radius * HALO_RADII, opacity: Math.min(HALO_MAX_OPACITY, lit * 1.4) },
		light: { intensity: lit * 2.2, distance: radius * LIGHT_REACH_RADII },
	}
}
