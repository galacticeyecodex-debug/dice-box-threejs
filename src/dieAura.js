// src/dieAura.js
// LoreWeaver fork: what a die gives off as it rolls, for sets with an aura (fire, shadow). A fire die streams
// embers that drift up the screen and die out; a shadow die trails smoke that spreads and fades. A die gives off
// most while it is moving fast, a little while it rests, and the last of it lingers after the throw.
// The sums are here, apart from WebGL, so they can be tested on their own; AuraField draws them.
import * as THREE from 'three'

/**
 * Each aura, in die radii and seconds. rate is particles a second at full speed, restRate while resting.
 * rise is drift up the screen; spread how far they wander sideways; trail how much of the die's speed they keep.
 * size is a particle's width at birth, end its width at death as a share of that. linger is how long a die keeps
 * giving off after the throw ends. soft is how fast a particle fades to its edge: high for a hot, sharp ember,
 * low for soft smoke. ground particles stay low on the table, under the dice (smoke); the rest float up over them.
 * Both cover what's behind them rather than adding light, so they show on a light page as well as a dark one.
 */
export const AURAS = {
	fire: {
		rate: 130, restRate: 26, life: [0.5, 1.2], size: [0.4, 0.85], end: 0.2, rise: 3.2, spread: 1.1, trail: 0.12,
		colors: ['#ffe27a', '#ffb02e', '#ff6a12', '#e0300a'], opacity: 1, soft: 2.2, ground: false, linger: 2.4, max: 160,
	},
	shadow: {
		rate: 90, restRate: 14, life: [1.1, 2.3], size: [1.3, 2.4], end: 2.2, rise: 1.1, spread: 0.7, trail: 0.06,
		colors: ['#5a4682', '#43345f', '#6e5a99', '#33284a'], opacity: 0.42, soft: 1.1, ground: true, linger: 3.0, max: 110,
	},
}

// How fast a die must move, in die radii a second, to give off its full rate.
const FULL_SPEED_RADII = 40

const clamp = (value, low, high) => Math.min(Math.max(value, low), high)

/**
 * Finds a colorset's aura: its own `aura`, or its effect's when that effect has one.
 * @param {object} [colorset] - The die's colorset.
 * @returns {object|null} The aura with its id, or null for none.
 */
export function auraOf(colorset = {}) {
	const id = String(colorset?.aura ?? colorset?.effect ?? '').toLowerCase()
	if (colorset?.aura === 'none' || !AURAS[id]) return null
	return { id, ...AURAS[id] }
}

/**
 * How many particles to give off this frame. The fraction left over is carried to the next frame, so a slow
 * rate still gives off evenly.
 * @param {object} aura - From auraOf.
 * @param {number} speedRadii - The die's speed, in its own radii a second.
 * @param {number} dt - Seconds since the last frame.
 * @param {number} [carry=0] - What was left over last frame.
 * @returns {{count:number, carry:number}} Particles to make now, and what to carry.
 */
export function emitCount(aura, speedRadii, dt, carry = 0) {
	if (!aura || !(dt > 0)) return { count: 0, carry }
	const pace = clamp(speedRadii / FULL_SPEED_RADII, 0, 1)
	const rate = aura.restRate + (aura.rate - aura.restRate) * pace
	const total = carry + rate * Math.min(dt, 0.1)
	const count = Math.floor(total)
	return { count, carry: total - count }
}

/**
 * How a particle looks at an age: bright and full at birth, fading out, growing or shrinking as its aura says.
 * @param {object} aura - From auraOf.
 * @param {number} age - Seconds since birth.
 * @param {number} life - Seconds it lives.
 * @returns {{alive:boolean, alpha:number, scale:number}} Its opacity and its size as a share of birth size.
 */
export function particleLook(aura, age, life) {
	if (!(life > 0) || age >= life) return { alive: false, alpha: 0, scale: 0 }
	const share = clamp(age / life, 0, 1)
	// A quick fade in, then out: embers flare and die, smoke thins away.
	const fadeIn = clamp(share / 0.12, 0, 1)
	const alpha = aura.opacity * fadeIn * (1 - share) * (1 - share * 0.4)
	const scale = 1 + (aura.end - 1) * share
	return { alive: true, alpha, scale }
}

const VERTEX = [
	'attribute float aSize;',
	'attribute float aAlpha;',
	'attribute vec3 aColor;',
	'uniform float uScale;',
	'varying float vAlpha;',
	'varying vec3 vColor;',
	'void main() {',
	'  vAlpha = aAlpha;',
	'  vColor = aColor;',
	'  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);',
	'  gl_PointSize = aSize * uScale / -mvPosition.z;',
	'  gl_Position = projectionMatrix * mvPosition;',
	'}',
].join('\n')

const FRAGMENT = [
	'uniform float uSoft;',
	'varying float vAlpha;',
	'varying vec3 vColor;',
	'void main() {',
	'  float d = length(gl_PointCoord - vec2(0.5)) * 2.0;',
	'  float a = pow(clamp(1.0 - d, 0.0, 1.0), uSoft) * vAlpha;',
	'  if (a < 0.004) discard;',
	'  gl_FragColor = vec4(vColor, a);',
	'}',
].join('\n')

/**
 * Draws one aura's particles for every die that has it, in one draw call.
 */
export class AuraField {
	/**
	 * @param {object} aura - From auraOf.
	 * @param {object} scene - The three.js scene.
	 */
	constructor(aura, scene) {
		this.aura = aura
		this.scene = scene
		this.max = aura.max * 6
		this.particles = []
		this.palette = aura.colors.map((hex) => new THREE.Color(hex))
		const geometry = new THREE.BufferGeometry()
		geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.max * 3), 3))
		geometry.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(this.max), 1))
		geometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(this.max), 1))
		geometry.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(this.max * 3), 3))
		geometry.setDrawRange(0, 0)
		this.material = new THREE.ShaderMaterial({
			vertexShader: VERTEX,
			fragmentShader: FRAGMENT,
			uniforms: { uScale: { value: 1 }, uSoft: { value: aura.soft } },
			transparent: true,
			depthWrite: false,
			// The dice hide what's under them, so smoke on the table stays under the die it rises from.
			depthTest: true,
			blending: THREE.NormalBlending,
		})
		this.points = new THREE.Points(geometry, this.material)
		this.points.frustumCulled = false
		// After a glowing die's pool of light (or dark), so it never covers them.
		this.points.renderOrder = 2
		scene.add(this.points)
	}

	/**
	 * Gives off particles from a die.
	 * @param {object} dicemesh - The die.
	 * @param {number} radius - Its radius.
	 * @param {number} count - How many.
	 */
	emit(dicemesh, radius, count) {
		const { aura } = this
		const velocity = dicemesh.body?.velocity
		for (let i = 0; i < count && this.particles.length < this.max; i++) {
			const angle = Math.random() * Math.PI * 2
			const reach = Math.random() * radius * 0.7
			this.particles.push({
				x: dicemesh.position.x + Math.cos(angle) * reach,
				y: dicemesh.position.y + Math.sin(angle) * reach,
				// Low smoke sits a little above the table, clear of it in the depth test, and under the die's middle.
				z: aura.ground ? radius * (0.25 + Math.random() * 0.15) : dicemesh.position.z + radius * 0.4,
				vx: (velocity?.x ?? 0) * aura.trail + (Math.random() - 0.5) * aura.spread * radius,
				vy: (velocity?.y ?? 0) * aura.trail + (Math.random() - 0.5) * aura.spread * radius + aura.rise * radius * (0.6 + Math.random() * 0.8),
				vz: aura.ground ? 0 : radius * 0.5,
				age: 0,
				life: aura.life[0] + Math.random() * (aura.life[1] - aura.life[0]),
				size: radius * (aura.size[0] + Math.random() * (aura.size[1] - aura.size[0])),
				color: this.palette[Math.floor(Math.random() * this.palette.length)],
			})
		}
	}

	/**
	 * Moves every particle on, drops the dead, and writes the rest for drawing.
	 * @param {number} dt - Seconds since the last frame.
	 * @param {number} pixelScale - Half the drawing's height in pixels, for the particles' size on screen.
	 * @returns {number} How many are still alive.
	 */
	step(dt, pixelScale) {
		const geometry = this.points.geometry
		const position = geometry.attributes.position.array
		const size = geometry.attributes.aSize.array
		const alpha = geometry.attributes.aAlpha.array
		const color = geometry.attributes.aColor.array
		const wobble = this.aura.ground ? 0.8 : 2.4
		let n = 0
		this.particles = this.particles.filter((p) => {
			p.age += dt
			const look = particleLook(this.aura, p.age, p.life)
			if (!look.alive) return false
			p.vx += Math.sin(p.age * 7 + p.life * 13) * wobble * dt * p.size
			p.x += p.vx * dt
			p.y += p.vy * dt
			p.z += p.vz * dt
			position[n * 3] = p.x
			position[n * 3 + 1] = p.y
			position[n * 3 + 2] = p.z
			size[n] = p.size * look.scale
			alpha[n] = look.alpha
			color[n * 3] = p.color.r
			color[n * 3 + 1] = p.color.g
			color[n * 3 + 2] = p.color.b
			n++
			return true
		})
		geometry.setDrawRange(0, n)
		geometry.attributes.position.needsUpdate = true
		geometry.attributes.aSize.needsUpdate = true
		geometry.attributes.aAlpha.needsUpdate = true
		geometry.attributes.aColor.needsUpdate = true
		this.material.uniforms.uScale.value = pixelScale
		return n
	}

	/** Takes every particle away at once. */
	clear() {
		this.particles = []
		this.points.geometry.setDrawRange(0, 0)
	}

	/** Takes the field off the table and frees it. */
	dispose() {
		this.scene.remove(this.points)
		this.points.geometry.dispose()
		this.material.dispose()
	}
}
