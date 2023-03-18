import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './release'
const sourceFolder = './app'

const path = {
	build: {
		html: `${buildFolder}/`,
		style: `${buildFolder}/style/`,
		script: `${buildFolder}/script/`,
		image: `${buildFolder}/assets/image/`,
		font: `${buildFolder}/assets/font/`,
	},
	source: {
		html: `${sourceFolder}/*.pug`,
		style: `${sourceFolder}/style/*.scss`,
		script: `${sourceFolder}/script/*.js`,
		image: `${sourceFolder}/assets/image/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${sourceFolder}/assets/image/**/*.svg`,
		font: `${sourceFolder}/assets/font/*.{otf,ttf,woff,woff2}`,
	},
	watch: {
		html: `${sourceFolder}/**/*.pug`,
		style: `${sourceFolder}/style/**/*.scss`,
		script: `${sourceFolder}/script/**/*.js`,
		image: `${sourceFolder}/assets/image/**/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
		font: `${sourceFolder}/assets/font/*.{otf,ttf,woff,woff2}`,
	},
	clean: buildFolder,
	rootFolder: rootFolder,
	buildFolder: buildFolder,
	sourceFolder: sourceFolder,
}

export default path
