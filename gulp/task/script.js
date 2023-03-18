import named from 'vinyl-named'
import webpack from 'webpack-stream'

const script = () => {
	return app.gulp
		.src(app.path.source.script, { sourcemaps: app.isDev })
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'script',
					message: 'error: <%= error.message %>',
				})
			)
		)
		.pipe(named())
		.pipe(
			webpack({
				mode: app.isBuild ? 'production' : 'development',
			})
		)
		.pipe(app.gulp.dest(app.path.build.script))
		.pipe(app.plugin.sync.stream())
}

export default script
