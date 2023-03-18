import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import preprocess from 'sass'

import prefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'
import queries from 'gulp-group-css-media-queries'
import webp from 'gulp-webpcss'

const compiler = gulpSass(preprocess)

const style = () => {
	return app.gulp
		.src(app.path.source.style, { sourcemaps: app.isDev })
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'style',
					message: 'error: <%= error.message %>',
				})
			)
		)
		.pipe(
			compiler({
				outputStyle: 'expanded',
			})
		)
		.pipe(queries())
		.pipe(
			app.plugin.condition(
				app.isBuild,
				webp({
					webpClass: '.webp',
					noWebpClass: '.no-webp',
				})
			)
		)
		.pipe(
			app.plugin.condition(
				app.isBuild,
				prefixer({
					grid: true,
					overrideBrowserslist: ['last 10 versions'],
					cascade: true,
				})
			)
		)
		.pipe(
			app.plugin.condition(app.isBuild, app.gulp.dest(app.path.build.style))
		)
		.pipe(app.plugin.condition(app.isBuild, clean()))
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.style))
		.pipe(app.plugin.sync.stream())
}

export default style
