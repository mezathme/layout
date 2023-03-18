import webp from 'gulp-html-webp'
import pug from 'gulp-pug'
import version from 'gulp-version-number'

const html = () => {
	return app.gulp
		.src(app.path.source.html)
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'html',
					message: 'error: <%= error.message %>',
				})
			)
		)
		.pipe(pug({ pretty: true, verbose: true }))
		.pipe(app.plugin.condition(app.isBuild, webp()))
		.pipe(
			app.plugin.condition(
				app.isBuild,
				version({
					value: '%DT%',
					append: { key: '_version', cover: 0, to: ['css', 'js'] },
					output: { file: 'gulp/version.json' },
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugin.sync.stream())
}

export default html
