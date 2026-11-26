// src/proceduralTextures.js
// LoreWeaver fork: zero-asset procedural canvas textures for 3D dice faces (albedo + bump + optional glow).
// Seeded per face so every face has organic variation without shipping extra image files.

export const PROCEDURAL_PATTERNS = ['swirl', 'marble_vein', 'nebula', 'hammered', 'magma']

/**
 * Deterministic PRNG (mulberry32) so procedural textures stay crisp and cacheable.
 * @param {number} seed
 * @returns {() => number}
 */
export function seededRandom(seed) {
	let a = (Number(seed) | 0) || 1
	return () => {
		a = (a + 0x6d2b79f5) | 0
		let t = Math.imul(a ^ (a >>> 15), 1 | a)
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296
	}
}

/**
 * Tells whether a texture name or descriptor is procedural.
 * @param {string|object|null|undefined} texture
 * @returns {string|null} The procedural pattern id, or null.
 */
export function proceduralPatternOf(texture) {
	if (!texture) return null
	const raw = typeof texture === 'string' ? texture : (texture.procedural || texture.name || '')
	const id = String(raw).toLowerCase()
	return PROCEDURAL_PATTERNS.includes(id) ? id : null
}

/**
 * Paints a procedural pattern onto the die face's 2D canvas (and bump/glow canvases when applicable).
 * @param {string} pattern - One of PROCEDURAL_PATTERNS.
 * @param {object} target
 * @param {CanvasRenderingContext2D} target.ctx - Albedo canvas context (already filled with backcolor).
 * @param {CanvasRenderingContext2D} [target.bumpCtx] - Bump canvas context.
 * @param {CanvasRenderingContext2D} [target.glowCtx] - Emissive glow canvas context.
 * @param {number} target.size - Canvas width/height in pixels.
 * @param {number} [target.seed=1] - Seed for organic per-face variation.
 * @param {string} [target.accent] - Optional accent colour (e.g. foreground or outline).
 * @returns {boolean} True if painted.
 */
export function paintProceduralTexture(pattern, { ctx, bumpCtx = null, glowCtx = null, size, seed = 1, accent = '#ffffff' }) {
	if (!ctx || !(size > 0) || !PROCEDURAL_PATTERNS.includes(pattern)) return false
	const rand = seededRandom(seed * 7919 + pattern.length * 131)
	ctx.save()
	bumpCtx?.save?.()
	glowCtx?.save?.()

	if (pattern === 'swirl') {
		const angle = rand() * Math.PI * 2
		const cx = size * (0.35 + rand() * 0.3)
		const cy = size * (0.35 + rand() * 0.3)
		for (let i = 0; i < 14; i += 1) {
			const phase = angle + i * 0.45
			ctx.beginPath()
			const y0 = (i / 14) * size
			ctx.moveTo(-size * 0.1, y0)
			for (let x = 0; x <= size * 1.1; x += size / 8) {
				const wave = Math.sin((x / size) * Math.PI * 2.5 + phase) * size * 0.09
				const pull = Math.cos((y0 / size) * Math.PI * 2 + phase) * size * 0.05
				ctx.lineTo(x, y0 + wave + pull)
			}
			ctx.strokeStyle = i % 2 === 0 ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.16)'
			ctx.lineWidth = size * (0.04 + rand() * 0.05)
			ctx.lineCap = 'round'
			ctx.stroke()
		}
		const grad = ctx.createRadialGradient(cx, cy, size * 0.04, cx, cy, size * 0.55)
		grad.addColorStop(0, 'rgba(255,255,255,0.22)')
		grad.addColorStop(1, 'rgba(0,0,0,0.12)')
		ctx.fillStyle = grad
		ctx.fillRect(0, 0, size, size)
	} else if (pattern === 'marble_vein') {
		for (let i = 0; i < 6; i += 1) {
			const gx = rand() * size
			const gy = rand() * size
			const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, size * (0.28 + rand() * 0.3))
			grad.addColorStop(0, i % 2 === 0 ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.10)')
			grad.addColorStop(1, 'rgba(0,0,0,0)')
			ctx.fillStyle = grad
			ctx.fillRect(0, 0, size, size)
		}
		for (let v = 0; v < 7; v += 1) {
			let x = rand() * size
			let y = v % 2 === 0 ? 0 : rand() * size
			const dx = (rand() - 0.5) * size * 0.14
			const dy = size / 10
			ctx.beginPath()
			bumpCtx?.beginPath?.()
			ctx.moveTo(x, y)
			bumpCtx?.moveTo?.(x, y)
			for (let step = 0; step < 12; step += 1) {
				x += dx + (rand() - 0.5) * size * 0.12
				y += dy * (0.6 + rand() * 0.7)
				ctx.lineTo(x, y)
				bumpCtx?.lineTo?.(x, y)
			}
			const w = Math.max(1, size * (0.004 + rand() * 0.01))
			ctx.strokeStyle = v % 3 === 0 ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.22)'
			ctx.lineWidth = w
			ctx.stroke()
			if (bumpCtx) {
				bumpCtx.strokeStyle = 'rgba(180,180,180,0.6)'
				bumpCtx.lineWidth = w
				bumpCtx.stroke()
			}
		}
	} else if (pattern === 'nebula') {
		for (let c = 0; c < 6; c += 1) {
			const nx = rand() * size
			const ny = rand() * size
			const r = size * (0.22 + rand() * 0.36)
			const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, r)
			const tint = c % 3 === 0 ? 'rgba(170,120,255,0.24)' : c % 3 === 1 ? 'rgba(90,190,255,0.20)' : 'rgba(255,120,200,0.18)'
			grad.addColorStop(0, tint)
			grad.addColorStop(1, 'rgba(0,0,0,0)')
			ctx.fillStyle = grad
			ctx.fillRect(0, 0, size, size)
		}
		for (let s = 0; s < 55; s += 1) {
			const sx = rand() * size
			const sy = rand() * size
			const sr = Math.max(0.7, size * (0.0025 + rand() * 0.007))
			const alpha = 0.45 + rand() * 0.55
			ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`
			ctx.beginPath()
			ctx.arc(sx, sy, sr, 0, Math.PI * 2)
			ctx.fill()
			if (glowCtx && s < 18) {
				glowCtx.fillStyle = `rgba(210,225,255,${(alpha * 0.7).toFixed(2)})`
				glowCtx.beginPath()
				glowCtx.arc(sx, sy, sr * 1.1, 0, Math.PI * 2)
				glowCtx.fill()
			}
		}
	} else if (pattern === 'hammered') {
		const count = 48
		for (let i = 0; i < count; i += 1) {
			const hx = rand() * size
			const hy = rand() * size
			const hr = size * (0.06 + rand() * 0.09)
			const grad = ctx.createRadialGradient(hx - hr * 0.25, hy - hr * 0.25, hr * 0.05, hx, hy, hr)
			grad.addColorStop(0, 'rgba(255,255,255,0.16)')
			grad.addColorStop(0.65, 'rgba(0,0,0,0.08)')
			grad.addColorStop(1, 'rgba(0,0,0,0)')
			ctx.fillStyle = grad
			ctx.beginPath()
			ctx.arc(hx, hy, hr, 0, Math.PI * 2)
			ctx.fill()
			if (bumpCtx) {
				const bgrad = bumpCtx.createRadialGradient(hx, hy, 0, hx, hy, hr)
				bgrad.addColorStop(0, 'rgba(130,130,130,0.75)')
				bgrad.addColorStop(0.8, 'rgba(235,235,235,0.35)')
				bgrad.addColorStop(1, 'rgba(255,255,255,0)')
				bumpCtx.fillStyle = bgrad
				bumpCtx.beginPath()
				bumpCtx.arc(hx, hy, hr, 0, Math.PI * 2)
				bumpCtx.fill()
			}
		}
	} else if (pattern === 'magma') {
		ctx.fillStyle = 'rgba(18,8,6,0.35)'
		ctx.fillRect(0, 0, size, size)
		for (let f = 0; f < 9; f += 1) {
			let x = rand() * size
			let y = rand() * size
			const pts = [[x, y]]
			for (let step = 0; step < 7; step += 1) {
				x += (rand() - 0.5) * size * 0.24
				y += (rand() - 0.5) * size * 0.24
				pts.push([x, y])
			}
			const drawCrack = (targetCtx, stroke, width) => {
				if (!targetCtx) return
				targetCtx.beginPath()
				pts.forEach(([px, py], idx) => (idx === 0 ? targetCtx.moveTo(px, py) : targetCtx.lineTo(px, py)))
				targetCtx.strokeStyle = stroke
				targetCtx.lineWidth = width
				targetCtx.lineCap = 'round'
				targetCtx.lineJoin = 'round'
				targetCtx.stroke()
			}
			drawCrack(ctx, 'rgba(255,95,20,0.55)', size * 0.028)
			drawCrack(ctx, accent || '#ffd15c', size * 0.011)
			drawCrack(bumpCtx, 'rgba(40,40,40,0.9)', size * 0.024)
			drawCrack(glowCtx, 'rgba(255,115,25,0.85)', size * 0.02)
		}
	}

	ctx.restore()
	bumpCtx?.restore?.()
	glowCtx?.restore?.()
	return true
}
