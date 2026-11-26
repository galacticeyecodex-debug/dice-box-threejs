// src/gpuCache.js
// LoreWeaver fork: GPU resource cleanup and bounded LRU texture cache so long tabletop sessions never leak
// WebGL geometries, materials, or face textures on mobile/tablet browsers.

export const DEFAULT_MAX_TEXTURE_ENTRIES = 180

/**
 * Bounded LRU cache for face texture bundles ({ composite, bump, glow }).
 * Evicted entries have their Three.js textures disposed automatically.
 */
export class BoundedTextureCache {
	constructor(maxEntries = DEFAULT_MAX_TEXTURE_ENTRIES) {
		this.maxEntries = Math.max(1, maxEntries)
		this.map = new Map()
	}

	get size() {
		return this.map.size
	}

	get(key) {
		if (!this.map.has(key)) return null
		const value = this.map.get(key)
		this.map.delete(key)
		this.map.set(key, value)
		return value
	}

	set(key, value) {
		if (this.map.has(key)) {
			const previous = this.map.get(key)
			this.map.delete(key)
			if (previous !== value) disposeTextureBundle(previous)
		}
		this.map.set(key, value)
		while (this.map.size > this.maxEntries) {
			const oldestKey = this.map.keys().next().value
			const oldest = this.map.get(oldestKey)
			this.map.delete(oldestKey)
			disposeTextureBundle(oldest)
		}
	}

	clear() {
		for (const bundle of this.map.values()) disposeTextureBundle(bundle)
		this.map.clear()
	}
}

/**
 * Disposes textures inside a cached face texture bundle.
 * @param {object|null|undefined} bundle - { composite, bump, glow }.
 */
export function disposeTextureBundle(bundle) {
	if (!bundle || typeof bundle !== 'object') return
	bundle.composite?.dispose?.()
	bundle.bump?.dispose?.()
	bundle.glow?.dispose?.()
}

/**
 * Disposes per-die materials (never cached textures), custom depth materials, and cloned geometries.
 * Shared base geometries owned by DiceFactory.geometries are left intact.
 * @param {object|null|undefined} mesh - A die THREE.Mesh.
 */
export function disposeDieMesh(mesh) {
	if (!mesh) return
	const materials = Array.isArray(mesh.material) ? mesh.material : (mesh.material ? [mesh.material] : [])
	for (const mat of materials) mat?.dispose?.()
	if (mesh.customDepthMaterial) {
		mesh.customDepthMaterial.dispose?.()
		mesh.customDepthMaterial = null
	}
	if (mesh.userData?.clonedGeometry && mesh.geometry) {
		mesh.geometry.dispose?.()
		mesh.userData.clonedGeometry = false
	}
}
