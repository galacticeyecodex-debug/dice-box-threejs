// src/celebration.js
// LoreWeaver fork: spotlit winning-face detection, elemental celebration burst profiles,
// and subtle fumble choreography (for faces Claude names in fails_on).

import * as THREE from 'three'

export const BURST_STYLES = {
	gold: { color: 0xffc94a, gravity: 1.6, lift: 0.9, spread: 1.0, swirl: 0 },
	fire: { color: 0xff7b29, gravity: -0.35, lift: 1.3, spread: 0.75, swirl: 1.8 },
	frost: { color: 0x9be8ff, gravity: 0.35, lift: 0.3, spread: 1.35, swirl: 0.4 },
	storm: { color: 0xffe45c, gravity: 0.2, lift: 0.6, spread: 1.5, swirl: 0 },
	arcane: { color: 0xc982ff, gravity: -0.15, lift: 0.7, spread: 1.05, swirl: 3.6 },
	shadow: { color: 0x8b6ec7, gravity: -0.25, lift: 0.8, spread: 0.85, swirl: 1.4 },
}

/**
 * Resolves a burst style preset with optional colour override.
 * @param {string} [style='gold'] - Style name.
 * @param {number|string|null} [color=null] - Optional override colour.
 * @returns {object} Burst parameters.
 */
export function burstProfile(style = 'gold', color = null) {
	const key = String(style || 'gold').toLowerCase()
	const base = BURST_STYLES[key] || BURST_STYLES.gold
	return { ...base, style: BURST_STYLES[key] ? key : 'gold', color: color ?? base.color }
}

/**
 * Finds the material index of the upward-facing landed face on a die mesh.
 * Returns null if the geometry has no face groups or is a d4 (where all 3 visible faces share the apex number).
 * @param {object} dicemesh - A die THREE.Mesh with geometry.groups and normals.
 * @returns {number|null} Material index of the top face, or null.
 */
export function topFaceMaterialIndex(dicemesh) {
	if (!dicemesh?.geometry?.groups?.length || dicemesh.shape === 'd4') return null
	const normalAttr = dicemesh.geometry.getAttribute?.('normal')
	if (!normalAttr?.array) return null
	const normals = normalAttr.array
	const quat = dicemesh.quaternion || dicemesh.body?.quaternion
	const up = new THREE.Vector3(0, 0, 1)
	const n = new THREE.Vector3()
	let bestIndex = null
	let bestAngle = Math.PI * 2
	for (let i = 0; i < dicemesh.geometry.groups.length; i += 1) {
		const face = dicemesh.geometry.groups[i]
		if (!face || face.materialIndex === 0) continue
		const start = (face.start ?? i * 3) * 3
		n.set(normals[start], normals[start + 1], normals[start + 2])
		if (quat) n.applyQuaternion(quat)
		const angle = n.angleTo(up)
		if (angle < bestAngle) {
			bestAngle = angle
			bestIndex = face.materialIndex
		}
	}
	return bestIndex
}

/**
 * Selects which materials on a die mesh should glow during a celebration.
 * When `faceOnly` is true, picks only the upward-facing landed face material (falling back to all faces on d4).
 * @param {object} dicemesh
 * @param {boolean} [faceOnly=false]
 * @returns {Array<object>} Materials to illuminate.
 */
export function celebrationMaterials(dicemesh, faceOnly = false) {
	const all = (Array.isArray(dicemesh?.material) ? dicemesh.material : [dicemesh?.material]).filter((m) => m?.emissive)
	if (!faceOnly || !Array.isArray(dicemesh?.material)) return all
	const topIdx = topFaceMaterialIndex(dicemesh)
	if (topIdx != null && dicemesh.material[topIdx]?.emissive) return [dicemesh.material[topIdx]]
	return all
}

/**
 * Computes damped tilt angle (radians) for a heavy fumble wobble over normalized progress 0..1.
 * @param {number} share - Progress 0..1.
 * @returns {number} Tilt angle in radians.
 */
export function fumbleWobble(share) {
	const t = Math.min(1, Math.max(0, share))
	return Math.sin(t * Math.PI * 5) * (1 - t) * (1 - t) * 0.32
}
