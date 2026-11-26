// src/gpuCache.js
// LoreWeaver fork: GPU resource cleanup and bounded LRU texture cache so long tabletop sessions never leak
// WebGL geometries, materials, or face textures on mobile/tablet browsers.

export const DEFAULT_MAX_TEXTURE_ENTRIES = 180
export const DEFAULT_MAX_WARM_PROGRAMS = 24
export const DEFAULT_MAX_FACE_TEXTURE = 256
export const PLAIN_EDGE_TEXTURE_SIZE = 16

/**
 * Picks a power-of-two canvas/GPU texture size for a die face.
 * Plain single-colour bevel edges use a tiny 16x16 texture (~1 KB instead of 1.3 MB); numbered faces are
 * capped at 256x256 (still 2x-4x supersampled on screen, cutting VRAM and first-throw bake time by ~4x).
 * @param {number} approx - Approximate pixel span from baseScale/margin.
 * @param {{isPlainEdge?:boolean, maxSize?:number}} [options]
 * @returns {number} Power-of-two texture size in pixels.
 */
export function faceTextureSize(approx, { isPlainEdge = false, maxSize = DEFAULT_MAX_FACE_TEXTURE } = {}) {
	if (isPlainEdge) return PLAIN_EDGE_TEXTURE_SIZE
	const safeApprox = Math.max(1, Number(approx) || 1)
	const natural = Math.pow(2, Math.floor(Math.log(safeApprox) / Math.log(2))) * 4
	return Math.min(maxSize, Math.max(128, natural))
}

/**
 * Computes a compact key identifying a material's compiled WebGL shader program variant.
 * @param {object} mat - Three.js Material.
 * @returns {string} Variant key.
 */
export function materialProgramKey(mat) {
	if (!mat || typeof mat !== 'object') return ''
	const custom = typeof mat.customProgramCacheKey === 'function' ? mat.customProgramCacheKey() : ''
	return [
		mat.type || '',
		custom,
		mat.map ? 'M' : '',
		mat.bumpMap ? 'B' : '',
		mat.emissiveMap ? 'E' : '',
		mat.flatShading ? 'F' : '',
		mat.depthPacking || 0,
	].join('|')
}

/**
 * Bounded LRU keeper of texture-stripped sentinel materials so Three.js doesn't delete and re-link
 * compiled WebGL shader programs every time clearDice() runs between throws.
 * Keeps at most maxEntries shader variants (~24) and clears all texture references on parked materials.
 */
export class ShaderProgramKeeper {
	constructor(maxEntries = DEFAULT_MAX_WARM_PROGRAMS) {
		this.maxEntries = Math.max(1, maxEntries)
		this.map = new Map()
	}

	get size() {
		return this.map.size
	}

	/**
	 * Keeps one texture-stripped sentinel per shader variant, disposing all duplicates immediately.
	 * @param {object|null|undefined} mat - Three.js Material being retired.
	 */
	keepOrDispose(mat) {
		if (!mat || typeof mat !== 'object') return
		const key = materialProgramKey(mat)
		if (!key) {
			mat.dispose?.()
			return
		}
		if (this.map.has(key)) {
			const kept = this.map.get(key)
			if (kept === mat) return
			this.map.delete(key)
			this.map.set(key, kept)
			mat.dispose?.()
			return
		}
		// Release every texture reference so parked sentinels hold zero GPU texture memory.
		if ('map' in mat) mat.map = null
		if ('bumpMap' in mat) mat.bumpMap = null
		if ('emissiveMap' in mat) mat.emissiveMap = null
		if (mat.userData?.lwUniforms?.uLwLabelMap) mat.userData.lwUniforms.uLwLabelMap.value = null
		this.map.set(key, mat)
		while (this.map.size > this.maxEntries) {
			const oldestKey = this.map.keys().next().value
			const oldest = this.map.get(oldestKey)
			this.map.delete(oldestKey)
			oldest?.dispose?.()
		}
	}

	/** Disposes every parked sentinel material. */
	clear() {
		for (const mat of this.map.values()) mat?.dispose?.()
		this.map.clear()
	}
}

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
 * When `programKeeper` is given, retains one texture-stripped sentinel per shader program variant so
 * Three.js avoids recompiling shaders on the next throw.
 * @param {object|null|undefined} mesh - A die THREE.Mesh.
 * @param {ShaderProgramKeeper|null} [programKeeper=null] - Optional bounded shader program keeper.
 */
export function disposeDieMesh(mesh, programKeeper = null) {
	if (!mesh) return
	const retire = (mat) => (programKeeper ? programKeeper.keepOrDispose(mat) : mat?.dispose?.())
	const materials = Array.isArray(mesh.material) ? mesh.material : (mesh.material ? [mesh.material] : [])
	for (const mat of materials) retire(mat)
	if (mesh.customDepthMaterial) {
		retire(mesh.customDepthMaterial)
		mesh.customDepthMaterial = null
	}
	if (mesh.userData?.clonedGeometry && mesh.geometry) {
		mesh.geometry.dispose?.()
		mesh.userData.clonedGeometry = false
	}
}

/**
 * Adds a triangle range to a BufferGeometry, merging it into the previous group when consecutive
 * triangles share the same materialIndex (such as multi-triangle faces and all chamfer bevels).
 * @param {object} geom - Three.js BufferGeometry (or test double with `groups` and `addGroup`).
 * @param {number} start - First vertex index.
 * @param {number} count - Number of vertices.
 * @param {number} materialIndex - Material slot index.
 */
export function addMergedGroup(geom, start, count, materialIndex) {
	if (!geom || !(count > 0)) return
	const last = geom.groups[geom.groups.length - 1]
	if (last && last.materialIndex === materialIndex && last.start + last.count === start) {
		last.count += count
	} else {
		geom.addGroup(start, count, materialIndex)
	}
}
