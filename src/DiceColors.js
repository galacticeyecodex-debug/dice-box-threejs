import {TEXTURELIST} from "./const/texturelist"
import {COLORSETS} from "./const/colorsets"

export class DiceColors {
	
	constructor(options = {}) {
		this.colorsets = {}
		this.imageCache = new Map()
		this.assetPath = options.assetPath
		// LoreWeaver fork: optional function(path) giving each texture's URL, e.g. a data URL in a one-file app.
		this.assetUrl = options.assetUrl
	}

	async ImageLoader(data) {
		if (Array.isArray(data)) {
			return Promise.all(data.map((entry) => this.ImageLoader(entry)))
		}
		const jobs = []
		if (data.source && data.source != '') {
			jobs.push(this.loadImage(data.source).then((img) => { data.texture = img }))
		}
		if (data.source_bump && data.source_bump != '') {
			jobs.push(this.loadImage(data.source_bump).then((img) => { data.bump = img }))
		}
		if (jobs.length) await Promise.all(jobs)
		return data
	}

	loadImage(src){
		const url = typeof this.assetUrl === 'function' ? this.assetUrl(src) : this.assetPath + src
		if (this.imageCache.has(url)) return this.imageCache.get(url)
		const promise = new Promise((resolve, reject) => {
			let img = new Image()
			img.onload = () => resolve(img)
			img.crossOrigin = "anonymous";
			img.src = url
			img.onerror = (error) => reject(error)
		}).catch((e) => {
			this.imageCache.delete(url)
			console.error("Unable to load image texture")
		})
		this.imageCache.set(url, promise)
		return promise
	}

	// randomColor() {
	// 	// random colors
	// 	let rgb=[];
	// 	rgb[0] = Math.floor(Math.random() * 254);
	// 	rgb[1] = Math.floor(Math.random() * 254);
	// 	rgb[2] = Math.floor(Math.random() * 254);
		
	// 	// this is an attempt to make the foregroudn color stand out from the background color
	// 	// it sometimes produces ok results
	// 	let brightness = ((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) +  (parseInt(rgb[2]) * 114)) / 1000;
	// 	let foreground = (brightness > 126) ? 'rgb(30,30,30)' : 'rgb(230,230,230)'; // high brightness = dark text, else bright text
	// 	let background = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
		
	// 	return {background: background, foreground: foreground };
	// }
	
	async getColorSet(options) {
		let setName, texture
		if(typeof options === "string") {
			setName = options
		}
		if(typeof options === "object") {
			setName = options.colorset
		}
		// if colorset has already been created and cached, then return it
		if(this.colorsets.hasOwnProperty(setName)) {
			return this.colorsets[setName]
		}

		// LoreWeaver fork: a copy, so loading one set never changes the shared list for the next.
		let colorset = { ...COLORSETS[setName] };
		texture = options.texture || colorset.texture
		
		// get texture data
		colorset.texture = this.getTexture(texture)

		// load textures
		colorset.texture = await this.ImageLoader(colorset.texture)

		// if material type was specified then use it
		if(options.material) {
			colorset.texture.material = options.material
		}

		// save it for later
		this.colorsets[setName] = colorset

		return colorset;
	}

	async makeColorSet(options = {}){
		// LoreWeaver fork: kept by everything that shapes the set, not by name alone, so a set whose colours,
		// texture or material change under the same name is rebuilt instead of reusing the old look.
		const cacheKey = `custom:${JSON.stringify(options)}`
		if(this.colorsets.hasOwnProperty(cacheKey)) {
			return this.colorsets[cacheKey]
		}

		let defaultSet = COLORSETS["white"]
		let colorset = Object.assign({},defaultSet,options)
		// get texture data
		let texture = this.getTexture(colorset.texture)

		// load textures
		colorset.texture = await this.ImageLoader(texture)

		if(options.material) {
			colorset.texture.material = options.material
		}

		if(colorset.name.toLowerCase() === "white"){
			// create a unique name
			colorset.name = `${Date.now()}`
		}

		// save it for later
		this.colorsets[cacheKey] = colorset

		return colorset
	}
	
	getTexture(texturename) {
		if (Array.isArray(texturename)) {
			let textures = [];
			for(let i = 0, l = texturename.length; i < l; i++){
				textures.push(this.getTexture(texturename[i]));
			}
			return textures;
		}
		
		// LoreWeaver fork: copies, because loading images and setting a material change the object returned.
		if (TEXTURELIST.hasOwnProperty(texturename)) {
			return { ...TEXTURELIST[texturename] }
		}
		return { ...TEXTURELIST['none'] }
	}

}