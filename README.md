# dice-box-threejs
3D Dice implemented with ThreeJS and Cannon ES

## LoreWeaver fork

This fork is used by LoreWeaver Table. It changes the library in these ways (each change is marked
"LoreWeaver fork" in the code):

| Change | Why |
|---|---|
| `throwVector.js`: a throw's direction is random all the way round, and its strength stays close to the same | The original took a throw's strength from the length of a random arrow, so some throws barely left the hand, and three throws in four came from the left |
| New options `throw_spread`, `throw_start`, `wall_bounce` | Starting the dice at 0.9 of the way out put them partly inside the walls (at 0.93), pinning some at the edge. Measured: with `throw_start: 0.75` and `wall_bounce: 0.4`, dice that barely moved fell from 5.2% to 0.3% |
| New option `shine` (0 to 1) | Metal, glass and wood had their reflections switched off, so they looked almost like plastic. `shine` gives them a soft room to reflect |
| New option `assetUrl(path)` | Lets an app hand over each texture and sound file itself, e.g. as data URLs in a one-file build |
| `updateConfig` works | It called `Object.apply`, which does nothing, so `sounds`, `volume`, `strength` and the rest could not be changed after start |
| Sounds load when switched on, and again for dice of a new material; a missing set is skipped | Before, a material without loaded sounds threw an error, and "perfectmetal" asked for files that don't exist |
| Custom colorsets are kept by their content, and textures are copied before use | A set changed under the same name kept its old look, and one set's material could leak into the next |
| New method `fadeDice(ids, opacity, duration)` | Fades dice that don't count, such as the lower die when the higher one is kept. Eases in over `duration` ms (default 900) and resolves when done |
| `dist` is committed | The app installs the fork straight from GitHub |

Tests: `npm test` (Node's own test runner).

Based on [Major's 3D Dice](https://majorvictory.github.io/3DDiceRoller/)

The goal of this project is to decouple the UI of Major's 3D Dice and strip down the dice box to just the essentials. Just a module that accepts simple dice notation input and outputs a JSON object when the dice finish rolling.

Why another dice roller when you have [@3d-dice/dice-box](https://github.com/3d-dice/dice-box)?
Teall dice had already solved predeterministic rolling, which is a feature some developers really need. Major's 3D dice are based on Teall Dice.

## Demo
https://codesandbox.io/s/dice-box-threejs-j79h35?file=/src/index.js

## Install using NPM
```
npm install @3d-dice/dice-box-threejs
```

## Config Options
```
const defaultConfig = {
	framerate: (1/60),
	sounds: false,
	volume: 100,
	color_spotlight: 0xefdfd5,
	shadows: true,
	theme_surface:  "green-felt",
	sound_dieMaterial: 'plastic',
	theme_customColorset: null,
	theme_colorset: "white", // see available colorsets in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/colorsets.js
	theme_texture: "", // see available textures in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/texturelist.js
	theme_material: "glass", // "none" | "metal" | "wood" | "glass" | "plastic"
	gravity_multiplier: 400,
	light_intensity: 0.7,
	baseScale: 100,
	strength: 1, // toss strength of dice
	onRollComplete: () => {}
}
```

## Getting Results
### There are three ways to get results
1. You can define an `onRollComplete` callback function when creating the Dice Box
```
const Box = new DiceBox("#scene-container",{
  onRollComplete: (results) => {
    console.log(`I've got results :>> `, results);
  }
});
```
2. You can listen for the custom event that is triggered when results are ready
```
document.addEventListener("rollComplete",(e => {
  console.log(`I've got custom event results :>> `, e.detail);
}))
```
3. You can await the results from the `roll` method. Just be sure the function this call is in is `async`
```
setTimeout(async () => {
  const result = await Box.roll("6d6")
  console.log('result :>> ', result);
}, 1000);
```

## Predetermined Outcomes
As mentioned previously, this project was forked for it's predeterministic rolling capability. The notation to roll your predetermined outcomes looks like this:
```
Box.roll("6d6@4,4,4,4,4,4") // rolls six dice that will land on 4's
```

## Notes
In order to use textures or sounds, you will need to manually copy the assets out of the `./public` folder and into your static assets folder where you're building your app.
