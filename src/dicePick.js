// src/dicePick.js
// LoreWeaver fork: pointer raycasting helper for picking a resting 3D die on the table (e.g. choosing an Edge reroll).

/**
 * Converts browser client coordinates inside a bounding rect into Three.js normalized device coordinates (-1..1).
 * @param {number} clientX
 * @param {number} clientY
 * @param {{left:number, top:number, width:number, height:number}} rect
 * @returns {{x:number, y:number}|null} NDC coordinates, or null when rect has no area.
 */
export function clientToNdc(clientX, clientY, rect) {
	if (!rect || !(rect.width > 0) || !(rect.height > 0)) return null
	const x = ((clientX - rect.left) / rect.width) * 2 - 1
	const y = -(((clientY - rect.top) / rect.height) * 2 - 1)
	if (x < -1 || x > 1 || y < -1 || y > 1) return null
	return { x: x || 0, y: y || 0 }
}
