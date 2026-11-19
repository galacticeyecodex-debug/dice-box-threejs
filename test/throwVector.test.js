// test/throwVector.test.js
// Run with: npm test (Node's own test runner, no extra packages).
import { test } from "node:test";
import assert from "node:assert/strict";
import { throwVector, THROW_SPEED_PER_PIXEL } from "../src/throwVector.js";

const STAGE = { width: 520, height: 270 };
const DIAGONAL = Math.hypot(STAGE.width, STAGE.height);

/** Makes a random() that returns the given numbers in turn. */
const sequence = (...values) => {
	let i = 0;
	return () => values[i++ % values.length];
};

test("no throw is weaker than the spread allows, whatever the random numbers", () => {
	const typical = THROW_SPEED_PER_PIXEL * DIAGONAL;
	for (let i = 0; i < 5000; i++) {
		const { boost } = throwVector({ ...STAGE, spread: 0.15 });
		assert.ok(boost >= typical * 0.85 - 1e-9, `boost ${boost} is below the floor`);
		assert.ok(boost <= typical * 1.15 + 1e-9, `boost ${boost} is above the ceiling`);
	}
});

test("the weakest random numbers still give a full-length throw", () => {
	const { vector, dist, boost } = throwVector({ ...STAGE, spread: 0.15, random: sequence(0, 0) });
	assert.ok(Math.abs(Math.hypot(vector.x, vector.y) - dist) < 1e-9, "the direction arrow is always full length");
	assert.ok(Math.abs(boost - THROW_SPEED_PER_PIXEL * DIAGONAL * 0.85) < 1e-9);
});

test("strength multiplies the speed", () => {
	const random = () => 0.5;
	const one = throwVector({ ...STAGE, strength: 1, random }).boost;
	const two = throwVector({ ...STAGE, strength: 2, random }).boost;
	assert.ok(Math.abs(two - one * 2) < 1e-9);
});

test("a spread of 0 makes every throw equally strong", () => {
	const speeds = new Set(Array.from({ length: 50 }, () => throwVector({ ...STAGE, spread: 0 }).boost.toFixed(6)));
	assert.equal(speeds.size, 1);
});

test("a spread outside 0..1 is clamped", () => {
	const strongest = throwVector({ ...STAGE, spread: 5, random: sequence(0, 1) }).boost;
	assert.ok(Math.abs(strongest - THROW_SPEED_PER_PIXEL * DIAGONAL * 2) < 1e-9);
});

test("throws come from every side about equally", () => {
	let fromLeft = 0;
	let fromTop = 0;
	const tries = 20000;
	for (let i = 0; i < tries; i++) {
		const { vector } = throwVector(STAGE);
		// The library starts the dice on the side opposite the arrow.
		if (vector.x > 0) fromLeft++;
		if (vector.y < 0) fromTop++;
	}
	assert.ok(Math.abs(fromLeft / tries - 0.5) < 0.03, `from the left ${fromLeft / tries}`);
	assert.ok(Math.abs(fromTop / tries - 0.5) < 0.03, `from the top ${fromTop / tries}`);
});
