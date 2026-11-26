// src/faceStyle.js
// LoreWeaver fork: per-set dice typography and chamfer bevel/edge colour resolution.

// LoreWeaver fork: every preset uses lining-figure fonts (uniform cap-height digits 0-9; Georgia is avoided
// because its old-style hanging numerals 3,4,5,7,9 jump off the baseline on dice faces).
export const FONT_PRESETS = {
	serif: "bold {size}pt 'Palatino Linotype', 'Book Antiqua', Palatino, 'Times New Roman', 'Liberation Serif', serif",
	sans: "bold {size}pt 'Segoe UI', 'Trebuchet MS', 'DejaVu Sans', Arial, sans-serif",
	mono: "bold {size}pt 'Cascadia Mono', Consolas, 'DejaVu Sans Mono', 'Courier New', monospace",
	display: "700 {size}pt 'Cinzel', 'Trajan Pro', 'Copperplate', 'Cambria', 'Palatino Linotype', 'Times New Roman', serif",
	classic: "{size}pt Arial, 'Liberation Sans', sans-serif",
}

// Per-shape safe interior box & visual center (as fractions of canvas size ts), computed from each die's UV geometry
// so single- and two-digit numerals stay dead-center and never clip chamfered bevels in any font.
export const FACE_LAYOUT = {
	d2:  { cx: 0.5, cy: 0.5,  maxW: 0.54, maxH: 0.54, baseScale: 1.0 },
	d6:  { cx: 0.5, cy: 0.5,  maxW: 0.54, maxH: 0.54, baseScale: 1.0 },
	d8:  { cx: 0.5, cy: 0.53, maxW: 0.36, maxH: 0.34, baseScale: 0.92 },
	d10: { cx: 0.5, cy: 0.575, maxW: 0.33, maxH: 0.29, baseScale: 0.78 },
	d12: { cx: 0.5, cy: 0.5,  maxW: 0.43, maxH: 0.40, baseScale: 0.92 },
	d20: { cx: 0.5, cy: 0.53, maxW: 0.34, maxH: 0.31, baseScale: 0.86 },
}

/**
 * Returns the visual layout target (center and safe interior bounds) for a die shape.
 * @param {string} shape - Die shape ('d6', 'd8', 'd10', 'd12', 'd20', etc.).
 * @param {number} ts - Texture canvas width/height in pixels.
 * @returns {{cx:number, cy:number, maxW:number, maxH:number, baseScale:number}}
 */
export function faceLayoutFor(shape, ts) {
	const spec = FACE_LAYOUT[shape] || FACE_LAYOUT.d6
	return {
		cx: ts * spec.cx,
		cy: ts * spec.cy,
		maxW: ts * spec.maxW,
		maxH: ts * spec.maxH,
		baseScale: spec.baseScale,
	}
}

/**
 * Computes exact (drawX, drawY) coordinates so a glyph's actual painted ink bounding box is centered on (cx, cy),
 * eliminating vertical/horizontal drift across fonts with different em-box ascender/descender ratios.
 * Expects ctx.textAlign = 'center' and ctx.textBaseline = 'alphabetic' when actualBoundingBox metrics exist.
 * @param {object|null|undefined} metrics - Result of ctx.measureText(text).
 * @param {number} cx - Desired horizontal ink center.
 * @param {number} cy - Desired vertical ink center.
 * @returns {{x:number, y:number, width:number, height:number, exact:boolean}}
 */
export function centerGlyphMetrics(metrics, cx, cy) {
	const asc = metrics?.actualBoundingBoxAscent
	const desc = metrics?.actualBoundingBoxDescent
	const left = metrics?.actualBoundingBoxLeft
	const right = metrics?.actualBoundingBoxRight
	if (Number.isFinite(asc) && Number.isFinite(desc) && (asc + desc) > 0) {
		const hasX = Number.isFinite(left) && Number.isFinite(right) && (left + right) > 0
		const x = hasX ? cx + (left - right) / 2 : cx
		const y = cy + (asc - desc) / 2
		return { x, y, width: hasX ? (left + right) : (metrics.width || 0), height: asc + desc, exact: true }
	}
	return { x: cx, y: cy, width: metrics?.width || 0, height: 0, exact: false }
}

/**
 * Scales a candidate font size down if the measured glyph exceeds the die face's safe interior box.
 * @param {number} fontSize - Initial point size.
 * @param {number} glyphW - Measured glyph ink width.
 * @param {number} glyphH - Measured glyph ink height.
 * @param {number} maxW - Maximum allowed width.
 * @param {number} maxH - Maximum allowed height.
 * @returns {number} Fitted point size (never larger than fontSize).
 */
export function fitGlyphSize(fontSize, glyphW, glyphH, maxW, maxH) {
	let ratio = 1
	if (glyphW > 0 && maxW > 0) ratio = Math.min(ratio, maxW / glyphW)
	if (glyphH > 0 && maxH > 0) ratio = Math.min(ratio, maxH / glyphH)
	return ratio < 1 ? Math.max(4, fontSize * ratio) : fontSize
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
