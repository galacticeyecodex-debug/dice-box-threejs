// src/faceStyle.js
// LoreWeaver fork: per-set dice typography and chamfer bevel/edge colour resolution.

export const FONT_PRESETS = {
	serif: "bold {size}pt Georgia, 'Palatino Linotype', 'Times New Roman', serif",
	sans: "bold {size}pt 'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
	mono: "bold {size}pt 'Cascadia Mono', Consolas, 'Courier New', monospace",
	display: "700 {size}pt 'Cinzel', 'Trajan Pro', Georgia, serif",
	classic: "{size}pt Arial, sans-serif",
}

/**
 * Builds a CSS canvas font string for a die face, honouring a colorset's optional font preset or family.
 * @param {string|null|undefined} setFont - Colorset font preset id or CSS font-family.
 * @param {string|null|undefined} dieFont - Fallback DicePreset font.
 * @param {number} sizePt - Point size for the face numeral.
 * @returns {string} CanvasRenderingContext2D font string.
 */
export function canvasFont(setFont, dieFont, sizePt) {
	const size = Math.max(1, Number(sizePt) || 16)
	const key = String(setFont || '').trim().toLowerCase()
	if (key && FONT_PRESETS[key]) return FONT_PRESETS[key].replace('{size}', String(size))
	if (key) return `${size}pt ${String(setFont).trim()}`
	return `${size}pt ${dieFont || 'Arial'}`
}

/**
 * Resolves the bevel/edge colour for a colorset, falling back to background when omitted or blank.
 * @param {object|null|undefined} colordata - Colorset object.
 * @returns {string|string[]} Edge colour(s).
 */
export function resolveEdgeColor(colordata) {
	if (!colordata) return ''
	const edge = colordata.edge
	if (Array.isArray(edge) ? edge.length > 0 : Boolean(edge && String(edge).trim())) return edge
	return colordata.background
}
