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
| New option `label_glow` (0 to 1) | On metal, the numbers light themselves (an emissive map of the numbers alone, scaled by how metallic the material is), because reflections made painted numbers almost unreadable |
| New option `assetUrl(path)` | Lets an app hand over each texture and sound file itself, e.g. as data URLs in a one-file build |
| `updateConfig` works | It called `Object.apply`, which does nothing, so `sounds`, `volume`, `strength` and the rest could not be changed after start |
| Sounds load when switched on, and again for dice of a new material; a missing set is skipped | Before, a material without loaded sounds threw an error, and "perfectmetal" asked for files that don't exist |
| Custom colorsets are kept by their content, and textures are copied before use | A set changed under the same name kept its old look, and one set's material could leak into the next |
| New method `fadeDice(ids, opacity, duration)` | Fades dice that don't count, such as the lower die when the higher one is kept. Eases in over `duration` ms (default 900) and resolves when done |
| `add(notation, { looks })` takes looks too | A reroll is thrown in beside the dice already on the table, in its die's own look |
| `roll(notation, { looks })`: a look for each die in one throw, and per-die face `labels` | Dice of different looks in one throw (an attack d20 in the player's dice beside fire-red damage dice), and system dice such as the d616: red, white and red d6s whose Marvel die shows an M on its 1 |
| New method `fadeAwayDice(duration)` | Every die fades away, then the dice are cleared, instead of vanishing in one frame |
| A fading die's shadow fades with it (`shadowFade`) | A shadow map can't be see-through, so a fading die's shadow is drawn with a fine, even dither of holes that grows at the same rate as the die fades; the soft shadow filter blurs it into a lighter shadow. Before, the shadow stayed solid and then vanished |
| New method `celebrateDice(ids, {color, duration, sparks})` | A die on a special face (such as a critical) pops, pulses with a warm glow and throws off sparks, then keeps a soft glow |
| Colorsets take `glow` (0 to 1) and `light` (a colour) (`glow.js`, `lightGlow.js`) | A die of light should look lit. A glowing die lights its own faces, so it shines whatever the room's light, and casts light around it: a soft pool on the table that follows it, spreads while it's in the air and fades with it, a faint halo, and a small real light so nearby dice catch the glow. The table is often the page behind a transparent canvas, so the pool is drawn. Above about 0.4, a white die washes out and its numbers are lost |
| True 3D depth sorting (`materialDepth.js`) | Upstream set `depthTest = false` and `transparent = true` on every die, making overlapping dice draw in spawn order instead of true 3D depth |
| GPU disposal & bounded LRU texture cache (`gpuCache.js`) | Cloned geometries, per-throw materials, and face canvas textures were never disposed, leaking WebGL memory during long sessions |
| Responsive orientation & resize (`viewportScale.js`, `scaleGeometry`) | `scaleGeometry` was commented out, leaving stale geometry sizes when rotating tablets or resizing windows; now rebuilds cleanly with `ResizeObserver` |
| Per-die sound materials & Web Audio pitch/velocity synthesis (`diceAudio.js`) | Mixed-material throws play each die's own sound, Web Audio shifts pitch by die mass and impact speed, and empty/pruned clip URLs are skipped cleanly |
| Per-set typography & bevel `edge` colour (`faceStyle.js`) | Colorsets can specify `font` (`serif`, `sans`, `mono`, `display`, or CSS family) and distinct chamfer `edge` colour |
| Zero-asset procedural textures (`proceduralTextures.js`) | Seeded per-face `swirl`, `marble_vein`, `nebula`, `hammered`, and `magma` canvas patterns (with bump & glow) requiring no external `.webp` files |
| Gemstone Fresnel & elemental shaders (`diceShaders.js`) | `onBeforeCompile` Fresnel rim on glass/gem dice and animated elemental surface shaders (`fire`, `frost`, `storm`, `arcane`) |
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
