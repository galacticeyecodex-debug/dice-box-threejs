// src/faceIcons.js
// LoreWeaver fork: vector icon faces and custom d4 label matrices for system-defined dice.
// Every icon renders cleanly in -1..1 space onto albedo, bump, and glow canvases with zero font dependencies.

export const BUILTIN_ICONS = {
	star: (ctx, r) => {
		ctx.beginPath()
		for (let i = 0; i < 10; i += 1) {
			const angle = -Math.PI / 2 + (i * Math.PI) / 5
			const dist = i % 2 === 0 ? r : r * 0.42
			const x = Math.cos(angle) * dist
			const y = Math.sin(angle) * dist
			if (i === 0) ctx.moveTo(x, y)
			else ctx.lineTo(x, y)
		}
		ctx.closePath()
	},
	sun: (ctx, r) => {
		ctx.beginPath()
		ctx.arc(0, 0, r * 0.44, 0, Math.PI * 2)
		for (let i = 0; i < 8; i += 1) {
			const a = (i * Math.PI) / 4
			const a1 = a - 0.14
			const a2 = a + 0.14
			ctx.moveTo(Math.cos(a1) * r * 0.56, Math.sin(a1) * r * 0.56)
			ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
			ctx.lineTo(Math.cos(a2) * r * 0.56, Math.sin(a2) * r * 0.56)
			ctx.closePath()
		}
	},
	moon: (ctx, r) => {
		ctx.beginPath()
		ctx.arc(0, 0, r * 0.85, 0.35 * Math.PI, 1.65 * Math.PI, false)
		ctx.arc(r * 0.36, 0, r * 0.68, 1.45 * Math.PI, 0.55 * Math.PI, true)
		ctx.closePath()
	},
	sword: (ctx, r) => {
		ctx.beginPath()
		ctx.moveTo(0, -r)
		ctx.lineTo(r * 0.18, -r * 0.65)
		ctx.lineTo(r * 0.14, r * 0.35)
		ctx.lineTo(r * 0.52, r * 0.35)
		ctx.lineTo(r * 0.52, r * 0.52)
		ctx.lineTo(r * 0.12, r * 0.52)
		ctx.lineTo(r * 0.12, r * 0.96)
		ctx.lineTo(-r * 0.12, r * 0.96)
		ctx.lineTo(-r * 0.12, r * 0.52)
		ctx.lineTo(-r * 0.52, r * 0.52)
		ctx.lineTo(-r * 0.52, r * 0.35)
		ctx.lineTo(-r * 0.14, r * 0.35)
		ctx.lineTo(-r * 0.18, -r * 0.65)
		ctx.closePath()
	},
	shield: (ctx, r) => {
		ctx.beginPath()
		ctx.moveTo(0, -r * 0.9)
		ctx.lineTo(r * 0.78, -r * 0.58)
		ctx.lineTo(r * 0.68, r * 0.18)
		ctx.quadraticCurveTo(r * 0.45, r * 0.72, 0, r * 0.95)
		ctx.quadraticCurveTo(-r * 0.45, r * 0.72, -r * 0.68, r * 0.18)
		ctx.lineTo(-r * 0.78, -r * 0.58)
		ctx.closePath()
	},
	skull: (ctx, r) => {
		ctx.beginPath()
		ctx.arc(0, -r * 0.14, r * 0.66, Math.PI, 0, false)
		ctx.lineTo(r * 0.6, r * 0.22)
		ctx.lineTo(r * 0.36, r * 0.42)
		ctx.lineTo(r * 0.32, r * 0.82)
		ctx.lineTo(-r * 0.32, r * 0.82)
		ctx.lineTo(-r * 0.36, r * 0.42)
		ctx.lineTo(-r * 0.6, r * 0.22)
		ctx.closePath()
		// Cut out left & right eye sockets + nose with counter-clockwise winding (nonzero fill rule).
		ctx.moveTo(-r * 0.1, -r * 0.04)
		ctx.arc(-r * 0.25, -r * 0.04, r * 0.15, 0, Math.PI * 2, true)
		ctx.moveTo(r * 0.4, -r * 0.04)
		ctx.arc(r * 0.25, -r * 0.04, r * 0.15, 0, Math.PI * 2, true)
		ctx.moveTo(0, r * 0.14)
		ctx.lineTo(-r * 0.09, r * 0.34)
		ctx.lineTo(r * 0.09, r * 0.34)
		ctx.closePath()
	},
	diamond: (ctx, r) => {
		ctx.beginPath()
		ctx.moveTo(0, -r * 0.95)
		ctx.lineTo(r * 0.72, 0)
		ctx.lineTo(0, r * 0.95)
		ctx.lineTo(-r * 0.72, 0)
		ctx.closePath()
	},
	spark: (ctx, r) => {
		ctx.beginPath()
		for (let i = 0; i < 8; i += 1) {
			const a = (i * Math.PI) / 4
			const d = i % 2 === 0 ? r : r * 0.26
			const x = Math.cos(a) * d
			const y = Math.sin(a) * d
			if (i === 0) ctx.moveTo(x, y)
			else ctx.lineTo(x, y)
		}
		ctx.closePath()
	},
	'fate-plus': (ctx, r) => {
		const t = r * 0.26
		ctx.beginPath()
		ctx.moveTo(-t, -r * 0.8)
		ctx.lineTo(t, -r * 0.8)
		ctx.lineTo(t, -t)
		ctx.lineTo(r * 0.8, -t)
		ctx.lineTo(r * 0.8, t)
		ctx.lineTo(t, t)
		ctx.lineTo(t, r * 0.8)
		ctx.lineTo(-t, r * 0.8)
		ctx.lineTo(-t, t)
		ctx.lineTo(-r * 0.8, t)
		ctx.lineTo(-r * 0.8, -t)
		ctx.lineTo(-t, -t)
		ctx.closePath()
	},
	'fate-minus': (ctx, r) => {
		const t = r * 0.26
		ctx.beginPath()
		ctx.rect(-r * 0.8, -t, r * 1.6, t * 2)
	},
}

/**
 * Parses an icon label specification: "icon:<name>" or "svg:<pathData>".
 * @param {unknown} label
 * @returns {{kind:'builtin', name:string}|{kind:'svg', d:string}|null}
 */
export function parseFaceIcon(label) {
	if (typeof label !== 'string') return null
	const trimmed = label.trim()
	if (trimmed.startsWith('icon:')) {
		const name = trimmed.slice(5).trim().toLowerCase()
		return BUILTIN_ICONS[name] ? { kind: 'builtin', name } : null
	}
	if (trimmed.startsWith('svg:')) {
		const d = trimmed.slice(4).trim()
		return d ? { kind: 'svg', d } : null
	}
	return null
}

/**
 * Builds the 4 rotated d4 face-label matrices from 4 custom face labels [a, b, c, d].
 * Matches DicePreset.registerFaces for d4 geometry.
 * @param {Array<string>} faces - Exactly 4 face labels.
 * @returns {Array|null}
 */
export function d4LabelTables(faces) {
	if (!Array.isArray(faces) || faces.length < 4) return null
	const [a, b, c, d] = faces
	return [
		[[], [0, 0, 0], [b, d, c], [a, c, d], [b, a, d], [a, b, c]],
		[[], [0, 0, 0], [b, c, d], [c, a, d], [b, d, a], [c, b, a]],
		[[], [0, 0, 0], [d, c, b], [c, d, a], [d, b, a], [c, a, b]],
		[[], [0, 0, 0], [d, b, c], [a, d, c], [d, a, b], [a, c, b]],
	]
}

/**
 * Paints a parsed face icon centered at (cx, cy) with radius r onto a 2D canvas context.
 * @param {CanvasRenderingContext2D} ctx
 * @param {{kind:string, name?:string, d?:string}} icon
 * @param {object} style
 * @param {number} style.cx
 * @param {number} style.cy
 * @param {number} style.radius
 * @param {string} style.fill
 * @param {string|null} [style.stroke]
 * @param {number} [style.lineWidth=4]
 * @returns {boolean}
 */
export function paintFaceIcon(ctx, icon, { cx, cy, radius, fill, stroke = null, lineWidth = 4 }) {
	if (!ctx || !icon) return false
	ctx.save()
	ctx.translate(cx, cy)
	if (icon.kind === 'builtin' && BUILTIN_ICONS[icon.name]) {
		BUILTIN_ICONS[icon.name](ctx, radius)
		if (stroke) {
			ctx.strokeStyle = stroke
			ctx.lineWidth = lineWidth
			ctx.lineJoin = 'round'
			ctx.stroke()
		}
		ctx.fillStyle = fill
		ctx.fill()
		ctx.restore()
		return true
	}
	if (icon.kind === 'svg' && typeof Path2D === 'function') {
		ctx.scale(radius, radius)
		const p = new Path2D(icon.d)
		if (stroke) {
			ctx.strokeStyle = stroke
			ctx.lineWidth = lineWidth / Math.max(1, radius)
			ctx.lineJoin = 'round'
			ctx.stroke(p)
		}
		ctx.fillStyle = fill
		ctx.fill(p)
		ctx.restore()
		return true
	}
	ctx.restore()
	return false
}
