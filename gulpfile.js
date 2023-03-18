import gulp from 'gulp'
// Config Import
import path from './gulp/config/path.js'
import plugin from './gulp/config/plugin.js'
//Task Import

import clean from './gulp/task/clean.js'
import { convertOTF, convertTTF, fontStyle } from './gulp/task/font.js'
import html from './gulp/task/html.js'
import image from './gulp/task/image.js'
import script from './gulp/task/script.js'
import style from './gulp/task/style.js'
import sync from './gulp/task/sync.js'
import watch from './gulp/task/watch.js'

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugin: plugin,
	task: {
		sync: sync,
		html: html,
		style: style,
		script: script,
		image: image,
		clean: clean,
		watch: watch,

		font: {
			convertOTF: convertOTF,
			convertTTF: convertTTF,
			fontStyle: fontStyle,
		},
	},
}

console.log(app.gulp.series(convertOTF, convertTTF, fontStyle))

const development = app.gulp.series(
	app.task.clean,

	app.gulp.parallel(
		app.task.html,
		app.task.style,
		app.task.script,
		app.task.image
	),
	app.gulp.parallel(app.task.watch, app.task.sync)
)

const build = app.gulp.series(
	app.task.clean,

	app.gulp.parallel(
		app.task.html,
		app.task.style,
		app.task.script,
		app.task.image
	)
)

const font = app.gulp.series(
	app.task.font.convertOTF,
	app.task.font.convertTTF,
	app.task.font.fontStyle
)

app.gulp.task('development', development)
app.gulp.task('build', development)
app.gulp.task('font', font)
