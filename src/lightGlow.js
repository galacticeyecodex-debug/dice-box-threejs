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
// A light darker than this is a shade, and a shade reaches this share as far as a light.
const SHADE_LUMINANCE = 0.12
const SHADE_REACH = 0.55
// Maximum persistent THREE.PointLight instances kept in the scene so NUM_POINT_LIGHTS never changes between throws.
export const MAX_DIE_LIGHTS = 2

const clamp = (value, low, high) => Math.min(Math.max(value, low), high)

/**
 * Packs any number of glowing dice into a fixed pool of real PointLights (MAX_DIE_LIGHTS), skipping dark shades.
 * For 1..maxLights glowing dice, each die keeps its exact light; for larger multi-die throws (such as an 8d6 Fireball),
 * dice are grouped spatially into maxLights weighted centroids so neighbouring dice still catch the glow without
 * forcing Three.js to recompile shaders for every die count.
 * @param {Array<{x:number, y:number, z:number, color:string, intensity:number, distance:number, shade?:boolean}>} sources
 * @param {number} [maxLights=MAX_DIE_LIGHTS]
 * @returns {Array<{x:number, y:number, z:number, color:string, intensity:number, distance:number}>}
 */
export function packDieLights(sources = [], maxLights = MAX_DIE_LIGHTS) {
	if (!Array.isArray(sources) || !(maxLights > 0)) return []
	const lit = sources.filter((s) => s && !s.shade && s.intensity > 0)
	if (lit.length <= maxLights) {
		return lit.map(({ x, y, z, color, intensity, distance }) => ({ x, y, z, color, intensity, distance }))
	}
	// Split along whichever table axis (x or y) the glowing dice are spread wider across.
	let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
	for (const s of lit) {
		if (s.x < minX) minX = s.x
		if (s.x > maxX) maxX = s.x
		if (s.y < minY) minY = s.y
		if (s.y > maxY) maxY = s.y
	}
	const axis = (maxX - minX) >= (maxY - minY) ? 'x' : 'y'
	const ordered = [...lit].sort((a, b) => a[axis] - b[axis])
	const packed = []
	for (let slot = 0; slot < maxLights; slot += 1) {
		const start = Math.floor((slot * ordered.length) / maxLights)
		const end = Math.floor(((slot + 1) * ordered.length) / maxLights)
		const group = ordered.slice(start, end)
		if (!group.length) continue
		let sumW = 0, wx = 0, wy = 0, wz = 0, maxInt = 0, maxDist = 0
		for (const s of group) {
			sumW += s.intensity
			wx += s.x * s.intensity
			wy += s.y * s.intensity
			wz += s.z * s.intensity
			if (s.intensity > maxInt) maxInt = s.intensity
			if (s.distance > maxDist) maxDist = s.distance
		}
		packed.push({
			x: wx / sumW,
			y: wy / sumW,
			z: wz / sumW,
			color: group[0].color,
			intensity: Math.min(maxInt * 1.4, sumW * 0.65),
			distance: maxDist * 1.25,
		})
	}
	return packed
}

/**
 * Tells whether a light is so dark it is a shade instead: a pool of darkness, which keeps close to the die, as a
 * shadow does, where a light spreads.
 * @param {string} color - The light's colour, as #rrggbb.
 * @returns {boolean} True for a shade.
 */
export function shadeOf(color) {
	const hex = /^#([0-9a-f]{6})$/i.exec(String(color || ''))
	if (!hex) return false
	const value = parseInt(hex[1], 16)
	const luminance = (0.2126 * ((value >> 16) & 255) + 0.7152 * ((value >> 8) & 255) + 0.0722 * (value & 255)) / 255
	return luminance < SHADE_LUMINANCE
}

/**
 * Reads the light a colorset casts.
 * @param {object} [colorset] - The die's colorset: its glow, and light, the colour of the light it casts.
 * @returns {{level:number, color:string, reach:number}} level 0 casts none; the colour falls back to the die's own;
 *   reach is less than 1 for a shade (shadeOf).
 */
export function lightOf(colorset = {}) {
	const color = colorset?.light || colorset?.background || '#ffffff'
	return { level: glowLevel(colorset?.glow), color, reach: shadeOf(color) ? SHADE_REACH : 1 }
}

/**
 * How bright a flickering light is at a moment, like a flame: mostly steady, with quick uneven dips. Three
 * waves that never line up, so it never looks like a pulse.
 * @param {number} seconds - The time.
 * @param {number} [seed=0] - Each die's own offset, so dice don't flicker together.
 * @returns {number} From about 0.7 to 1.
 */
export function flickerAt(seconds, seed = 0) {
	const t = Number(seconds) + Number(seed || 0)
	const wave = Math.sin(t * 17.3) * 0.5 + Math.sin(t * 7.1 + 1.3) * 0.3 + Math.sin(t * 29.7 + 4.1) * 0.2
	return clamp(0.85 + wave * 0.15, 0.7, 1)
}

/**
 * Works out one frame of a die's light.
 * @param {object} frame - The die now.
 * @param {number} frame.level - From lightOf.
 * @param {number} frame.radius - The die's size, as the radius of a ball around it.
 * @param {number} frame.height - How far its centre is above where it rests.
 * @param {number} [frame.opacity=1] - How faded the die is, 1 solid to 0 gone.
 * @param {number} [frame.reach=1] - How far it reaches, as a share: less for a shade (lightOf).
 * @returns {{pool:{scale:number, opacity:number}, halo:{scale:number, opacity:number}, light:{intensity:number, distance:number}}}
 *   The pool on the table (wider and fainter while the die is in the air), the halo, and the real light.
 */
export function glowFrame({ level, radius, height, opacity = 1, reach = 1 }) {
	const lit = clamp(level, 0, 1) * clamp(opacity, 0, 1)
	const lift = clamp(height / (radius * LIFT_RADII), 0, 1)
	return {
		pool: {
			scale: radius * (POOL_RADII + POOL_GROWTH_RADII * lift) * reach,
			opacity: Math.min(POOL_MAX_OPACITY, lit * 1.8 * (1 - 0.6 * lift)),
		},
		halo: { scale: radius * HALO_RADII * reach, opacity: Math.min(HALO_MAX_OPACITY, lit * 1.4) },
		light: { intensity: lit * 2.2, distance: radius * LIGHT_REACH_RADII },
	}
}
