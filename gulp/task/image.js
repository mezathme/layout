import minify from 'gulp-imagemin'
import webp from 'gulp-webp'

const image = () => {
	return app.gulp
		.src(app.path.source.image)
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'image',
					message: 'error: <%= error.message %>',
				})
			)
		)
		.pipe(app.plugin.newer(app.path.build.image))
		.pipe(app.plugin.condition(app.isBuild, webp()))
		.pipe(
			app.plugin.condition(app.isBuild, app.gulp.dest(app.path.build.image))
		)
		.pipe(
			app.plugin.condition(app.isBuild, app.gulp.src(app.path.source.image))
		)
		.pipe(
			app.plugin.condition(
				app.isBuild,
				minify({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3,
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.image))
		.pipe(app.gulp.src(app.path.source.svg))
		.pipe(app.gulp.dest(app.path.build.image))
		.pipe(app.plugin.sync.stream())
}

export default image
