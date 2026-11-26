// src/throwPlayback.js
// LoreWeaver fork: records dice trajectories and collision sound events during simulateThrow() so animateThrow()
// plays back smooth interpolated poses (even at 90Hz/120Hz) with zero live cannon-es physics overhead per frame.

// Per-die floats per recorded step: x, y, z, qx, qy, qz, qw, vx, vy, vz.
export const POSE_STRIDE = 10

/**
 * Records a throw's simulated physics frames and collision sound cues into compact typed arrays.
 * @param {number} diceCount - Number of dice in this.diceList.
 * @param {number} stepSeconds - Physics step duration in seconds (e.g. 1/60).
 * @returns {{pushFrame:Function, pushSound:Function, finish:Function}}
 */
export function createThrowRecorder(diceCount, stepSeconds = 1 / 60) {
	const frames = []
	const sounds = []
	const count = Math.max(0, Number(diceCount) || 0)
	return {
		/** Captures current body position, quaternion, and velocity for every die. */
		pushFrame(diceList) {
			const buf = new Float32Array(count * POSE_STRIDE)
			for (let i = 0; i < count; i += 1) {
				const body = diceList[i]?.body
				if (!body) continue
				const o = i * POSE_STRIDE
				buf[o] = body.position.x
				buf[o + 1] = body.position.y
				buf[o + 2] = body.position.z
				buf[o + 3] = body.quaternion.x
				buf[o + 4] = body.quaternion.y
				buf[o + 5] = body.quaternion.z
				buf[o + 6] = body.quaternion.w
				buf[o + 7] = body.velocity.x
				buf[o + 8] = body.velocity.y
				buf[o + 9] = body.velocity.z
			}
			frames.push(buf)
		},
		/** Records a collision sound trigger at the current simulated step index. */
		pushSound(event) {
			sounds.push({ step: frames.length, ...event })
		},
		/** Finalizes the recording for playback. */
		finish() {
			return {
				diceCount: count,
				stepSeconds: stepSeconds > 0 ? stepSeconds : 1 / 60,
				frames,
				sounds,
				soundCursor: 0,
			}
		},
	}
}

/**
 * Samples interpolated pose for one die at normalized fraction t between two recorded frames.
 * Uses shortest-path normalized linear quaternion interpolation (nlerp), which is indistinguishable from
 * slerp over 1/60s steps and avoids trig per die.
 * @param {Float32Array} f0 - Earlier frame buffer.
 * @param {Float32Array} f1 - Later frame buffer.
 * @param {number} index - Die index.
 * @param {number} t - Blend factor 0..1.
 * @returns {{x:number,y:number,z:number,qx:number,qy:number,qz:number,qw:number,vx:number,vy:number,vz:number}}
 */
export function sampleDiePose(f0, f1, index, t) {
	const o = index * POSE_STRIDE
	const u = 1 - t
	const x = f0[o] * u + f1[o] * t
	const y = f0[o + 1] * u + f1[o + 1] * t
	const z = f0[o + 2] * u + f1[o + 2] * t
	const q0x = f0[o + 3], q0y = f0[o + 4], q0z = f0[o + 5], q0w = f0[o + 6]
	let q1x = f1[o + 3], q1y = f1[o + 4], q1z = f1[o + 5], q1w = f1[o + 6]
	if (q0x * q1x + q0y * q1y + q0z * q1z + q0w * q1w < 0) {
		q1x = -q1x; q1y = -q1y; q1z = -q1z; q1w = -q1w
	}
	let qx = q0x * u + q1x * t
	let qy = q0y * u + q1y * t
	let qz = q0z * u + q1z * t
	let qw = q0w * u + q1w * t
	const len = Math.hypot(qx, qy, qz, qw) || 1
	qx /= len; qy /= len; qz /= len; qw /= len
	return {
		x, y, z, qx, qy, qz, qw,
		vx: f0[o + 7] * u + f1[o + 7] * t,
		vy: f0[o + 8] * u + f1[o + 8] * t,
		vz: f0[o + 9] * u + f1[o + 9] * t,
	}
}

/**
 * Advances playback to elapsedSeconds, returning frame indices, blend factor, due sounds, and completion state.
 * @param {object} recording - From createThrowRecorder().finish().
 * @param {number} elapsedSeconds - Seconds since playback began.
 * @returns {{frame0:Float32Array|null, frame1:Float32Array|null, t:number, done:boolean, dueSounds:Array<object>}}
 */
export function advancePlayback(recording, elapsedSeconds) {
	const total = recording?.frames?.length || 0
	if (total === 0) return { frame0: null, frame1: null, t: 0, done: true, dueSounds: [] }
	const maxIndex = total - 1
	const exact = Math.max(0, elapsedSeconds / recording.stepSeconds)
	const done = exact >= maxIndex
	const i0 = done ? maxIndex : Math.floor(exact)
	const i1 = done ? maxIndex : Math.min(maxIndex, i0 + 1)
	const t = done ? 0 : exact - i0
	const dueSounds = []
	while (recording.soundCursor < recording.sounds.length && recording.sounds[recording.soundCursor].step <= (done ? total : i1)) {
		dueSounds.push(recording.sounds[recording.soundCursor])
		recording.soundCursor += 1
	}
	return { frame0: recording.frames[i0], frame1: recording.frames[i1], t, done, dueSounds }
}
