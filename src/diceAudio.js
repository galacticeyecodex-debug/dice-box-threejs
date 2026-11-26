// src/diceAudio.js
// LoreWeaver fork: per-die collision sound materials and Web Audio pitch/velocity playback.
// Allows mixed-material throws (e.g. metal d20 beside wooden damage dice) to play each die's own sound,
// shifts playback pitch by die mass and impact speed, and skips missing/empty asset URLs cleanly.

const REFERENCE_MASS = 350

/**
 * Resolves which collision sound set suits a colorset or material string.
 * Glass and plastic share the plastic clack set.
 * @param {object|string|null|undefined} colorset - Colorset object or material name.
 * @returns {'metal'|'wood'|'plastic'} Sound material key.
 */
export function soundMaterialOf(colorset) {
	if (!colorset) return 'plastic'
	const raw = typeof colorset === 'string'
		? colorset
		: (Array.isArray(colorset.texture) ? colorset.texture[0]?.material : colorset.texture?.material) || colorset.material || ''
	const match = String(raw).match(/wood|metal/i)
	return match ? match[0].toLowerCase() : 'plastic'
}

/**
 * Computes gain (0..1) and pitch playbackRate for one collision impact.
 * Heavier dice sound slightly deeper; faster hits sound louder and slightly brighter.
 * @param {object} params
 * @param {number} params.speed - Collision speed magnitude.
 * @param {number} [params.mass=350] - Die mass (e.g. d4 ~300, d20 ~400).
 * @param {number} [params.volume=100] - Configured volume 0..100.
 * @param {() => number} [params.random=Math.random] - Random 0..1.
 * @returns {{gain:number, playbackRate:number}} Playback parameters.
 */
export function impactAudioParams({ speed, mass = REFERENCE_MASS, volume = 100, random = Math.random }) {
	const maxGain = Math.min(1, Math.max(0, (Number(volume) || 0) / 100))
	const gain = Math.min(Math.max(0, speed / 8000), maxGain)
	const safeMass = Math.max(150, Math.min(600, Number(mass) || REFERENCE_MASS))
	// Heavier dice pitch slightly lower, lighter dice slightly higher.
	const massFactor = Math.pow(REFERENCE_MASS / safeMass, 0.25)
	const speedFactor = 0.96 + Math.min(0.1, Math.max(0, (speed - 250) / 16000))
	const jitter = 0.96 + random() * 0.08
	const playbackRate = Math.min(1.35, Math.max(0.72, massFactor * speedFactor * jitter))
	return { gain, playbackRate }
}

/**
 * Decodes a data: URI (base64) into an ArrayBuffer without requiring fetch().
 * @param {string} url - Data URI.
 * @returns {ArrayBuffer|null} Decoded bytes, or null if not a base64 data URI.
 */
export function dataUrlToArrayBuffer(url) {
	if (typeof url !== 'string' || !url.startsWith('data:')) return null
	const comma = url.indexOf(',')
	if (comma < 0) return null
	const header = url.slice(0, comma)
	if (!header.includes(';base64')) return null
	const binary = atob(url.slice(comma + 1))
	const bytes = new Uint8Array(binary.length)
	for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
	return bytes.buffer
}

/**
 * Plays either a decoded Web Audio AudioBuffer (with pitch/velocity modulation) or falls back to an HTMLAudioElement.
 * @param {object} clip - AudioBuffer or HTMLAudioElement.
 * @param {AudioContext|null} ctx - Active AudioContext, if available.
 * @param {{gain:number, playbackRate:number}} params - Impact parameters.
 */
export function playImpactClip(clip, ctx, { gain, playbackRate }) {
	if (!clip || !(gain > 0)) return
	if (ctx && typeof AudioBuffer !== 'undefined' && clip instanceof AudioBuffer) {
		try {
			if (ctx.state === 'suspended') ctx.resume?.().catch(() => {})
			const source = ctx.createBufferSource()
			const gainNode = ctx.createGain()
			source.buffer = clip
			source.playbackRate.value = playbackRate
			gainNode.gain.value = gain
			source.connect(gainNode)
			gainNode.connect(ctx.destination)
			source.start(0)
			return
		} catch {
			// Fall through safely if Web Audio is blocked.
		}
	}
	if (typeof clip.play === 'function') {
		try {
			clip.volume = gain
			if ('playbackRate' in clip) clip.playbackRate = playbackRate
			if (clip.currentTime) clip.currentTime = 0
			clip.play().catch(() => {})
		} catch {
			// Ignore autoplay blocks.
		}
	}
}
