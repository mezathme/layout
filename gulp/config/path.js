import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './release'
const sourceFolder = './app'

const path = {
	build: {
		html: `${buildFolder}/`,
		style: `${buildFolder}/assets/styles/`,
		script: `${buildFolder}/assets/scripts/`,
		image: `${buildFolder}/assets/images/`,
		font: `${buildFolder}/assets/fonts/`,
	},
	source: {
		html: `${sourceFolder}/*.pug`,
		style: `${sourceFolder}/assets/styles/*.scss`,
		script: `${sourceFolder}/assets/scripts/*.js`,
		image: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${sourceFolder}/assets/images/**/*.svg`,
		font: `${sourceFolder}/assets/fonts/*.{otf,ttf,woff,woff2}`,
	},
	watch: {
		html: `${sourceFolder}/**/*.pug`,
		style: `${sourceFolder}/assets/styles/**/*.scss`,
		script: `${sourceFolder}/assets/scripts/**/*.js`,
		image: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
		font: `${sourceFolder}/assets/fonts/*.{otf,ttf,woff,woff2}`,
	},
	clean: buildFolder,
	rootFolder: rootFolder,
	buildFolder: buildFolder,
	sourceFolder: sourceFolder,
}

export default path
