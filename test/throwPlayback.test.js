// test/throwPlayback.test.js
// LoreWeaver fork: recorded throw playback interpolates simulated physics poses smoothly and fires sound cues on cue.
import test from 'node:test'
import assert from 'node:assert/strict'
import { advancePlayback, createThrowRecorder, sampleDiePose } from '../src/throwPlayback.js'

function mockDie(x, y, z, q, v = [0, 0, 0]) {
	return {
		body: {
			position: { x, y, z },
			quaternion: { x: q[0], y: q[1], z: q[2], w: q[3] },
			velocity: { x: v[0], y: v[1], z: v[2] },
		},
	}
}

test('createThrowRecorder and advancePlayback interpolate poses and trigger recorded sound cues in order', () => {
	const rec = createThrowRecorder(1, 1 / 60)
	rec.pushFrame([mockDie(0, 0, 100, [0, 0, 0, 1], [60, 0, -10])])
	rec.pushSound({ kind: 'table', speed: 400, mass: 300 })
	rec.pushFrame([mockDie(10, 0, 50, [0, 0, 0, -1], [30, 0, 0])])
	rec.pushFrame([mockDie(20, 0, 0, [0, 0, 0, 1], [0, 0, 0])])
	const playback = rec.finish()

	const mid = advancePlayback(playback, 0.5 / 60)
	assert.equal(mid.done, false)
	assert.equal(mid.dueSounds.length, 1)
	assert.equal(mid.dueSounds[0].kind, 'table')
	// Shortest-path quaternion nlerp handles opposite-sign equivalent quaternions cleanly.
	const pose = sampleDiePose(mid.frame0, mid.frame1, 0, mid.t)
	assert.ok(Math.abs(pose.x - 5) < 1e-4)
	assert.ok(Math.abs(pose.z - 75) < 1e-4)
	assert.ok(Math.abs(Math.abs(pose.qw) - 1) < 1e-4)
	assert.ok(Math.abs(pose.vx - 45) < 1e-4)

	const end = advancePlayback(playback, 10)
	assert.equal(end.done, true)
	assert.equal(end.dueSounds.length, 0)
	const finalPose = sampleDiePose(end.frame0, end.frame1, 0, end.t)
	assert.equal(finalPose.x, 20)
	assert.equal(finalPose.z, 0)
})
