// src/diceArrange.js
// LoreWeaver fork: post-roll readable center line-up layout for narrow screens and large dice pools.

/**
 * Computes tidy centered (x, y) resting positions in one or more horizontal rows inside maxWidth.
 * @param {number} count - Number of dice to arrange.
 * @param {object} [options]
 * @param {number} [options.spacing=180] - Center-to-center distance between dice.
 * @param {number} [options.maxWidth=900] - Usable horizontal width in world units.
 * @param {number} [options.rowGap] - Vertical gap between rows (defaults to spacing).
 * @returns {Array<{x:number, y:number}>} Target (x, y) positions.
 */
export function lineupPositions(count, { spacing = 180, maxWidth = 900, rowGap = spacing } = {}) {
	if (!(count > 0)) return []
	const step = Math.max(1, spacing)
	const perRow = Math.max(1, Math.min(count, Math.floor(Math.max(step, maxWidth) / step)))
	const rows = Math.ceil(count / perRow)
	const positions = []
	for (let i = 0; i < count; i += 1) {
		const row = Math.floor(i / perRow)
		const inRow = row === rows - 1 ? count - row * perRow : perRow
		const col = i - row * perRow
		const x = (col - (inRow - 1) / 2) * step
		const y = ((rows - 1) / 2 - row) * rowGap
		positions.push({ x, y })
	}
	return positions
}

/**
 * Smoothstep easing from 0 to 1.
 * @param {number} t
 * @returns {number}
 */
export function easeInOut(t) {
	const c = Math.min(1, Math.max(0, t))
	return c * c * (3 - 2 * c)
}
