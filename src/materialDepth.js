// src/materialDepth.js
// LoreWeaver fork: proper 3D depth sorting for dice materials. Upstream set depthTest=false and transparent=true
// on every die, which made overlapping dice draw in spawn order instead of true 3D depth.

/**
 * Configures depth testing and transparency for a die face material.
 * Only see-through textures (composite === 'destination-in') or materials with opacity < 1 need transparency;
 * every die tests against the depth buffer so piles sort in true 3D.
 * @param {object} mat - A Three.js material.
 * @param {{composite?:string}} [texture] - The face's texture descriptor.
 * @param {number} [opacity=1] - Starting opacity, 0 to 1.
 * @returns {object} The configured material.
 */
export function applyDepthSettings(mat, texture = null, opacity = 1) {
	const translucent = texture?.composite === 'destination-in' || opacity < 1
	mat.opacity = opacity
	mat.transparent = translucent
	mat.depthTest = true
	mat.depthWrite = !translucent || opacity >= 0.5
	mat.needsUpdate = true
	return mat
}
