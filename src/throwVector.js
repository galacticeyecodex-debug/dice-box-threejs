// src/throwVector.js
// LoreWeaver fork: decides how the dice are thrown.
//
// The original code took a throw's strength from the length of a random arrow, so when the arrow came out short
// the dice barely left the hand (about one die in twenty hardly moved). It also picked the arrow from -0.5 to 1.5
// instead of -1 to 1, so three throws in four came from the left. Here the direction is random all the way round,
// and the strength always stays close to the same.

/** Throw speed for each pixel of the stage's half-diagonal. Matches the original library's typical throw. */
export const THROW_SPEED_PER_PIXEL = 2.1;

/** How much a throw's strength varies when the caller doesn't say: 0.15 means up to 15% weaker or stronger. */
export const DEFAULT_THROW_SPREAD = 0.15;

/**
 * Keeps a number between 0 and 1.
 * @param {number} value - Any number.
 * @returns {number} The number, clamped to 0..1. Not-a-number becomes 0.
 */
function clampUnit(value) {
	if (!Number.isFinite(value)) return 0;
	return Math.min(1, Math.max(0, value));
}

/**
 * Picks one throw: a direction and a strength.
 * Returns the three values the library's getNotationVectors expects, so the rest of the throw code is unchanged:
 * the dice start on the edge opposite the direction and fly across at speed `boost`.
 * @param {object} options - The stage and the feel of the throw.
 * @param {number} options.width - Half the stage's width in pixels.
 * @param {number} options.height - Half the stage's height in pixels.
 * @param {number} [options.strength=1] - Multiplies every throw's speed.
 * @param {number} [options.spread=DEFAULT_THROW_SPREAD] - How much a throw's speed varies, from 0 to 1.
 * @param {() => number} [options.random=Math.random] - Random numbers from 0 to 1, replaceable in tests.
 * @returns {{vector: {x: number, y: number}, dist: number, boost: number}} The throw's direction, its length, and its speed.
 */
export function throwVector({ width, height, strength = 1, spread = DEFAULT_THROW_SPREAD, random = Math.random }) {
	const diagonal = Math.max(1, Math.hypot(width, height));
	const angle = random() * Math.PI * 2;
	const vector = { x: Math.cos(angle) * diagonal, y: Math.sin(angle) * diagonal };
	const variation = 1 + clampUnit(spread) * (random() * 2 - 1);
	const boost = THROW_SPEED_PER_PIXEL * diagonal * strength * variation;
	return { vector, dist: diagonal, boost };
}
