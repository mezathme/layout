import files from 'fs'
import fonter from 'gulp-fonter'
import converter from 'gulp-ttf2woff2'

export const convertOTF = () => {
	return app.gulp
		.src(`${app.path.sourceFolder}/assets/fonts/*.otf`, {})
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'font',
					message: 'convert error: <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(app.gulp.dest(app.path.build.font))
}

export const convertTTF = () => {
	return app.gulp
		.src(`${app.path.sourceFolder}/assets/fonts/*.ttf`, {})
		.pipe(
			app.plugin.plumber(
				app.plugin.notify.onError({
					title: 'font',
					message: 'convert error: <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['woff'],
			})
		)
		.pipe(app.gulp.dest(app.path.build.font))
		.pipe(app.gulp.src(`${app.path.sourceFolder}/assets/fonts/*.ttf`))
		.pipe(converter())
		.pipe(app.gulp.dest(app.path.build.font))
}

export const fontStyle = () => {
	let fontsFile = `${app.path.sourceFolder}/assets/styles/misc/font.scss`

	files.readdir(app.path.build.font, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!files.existsSync(fontsFile)) {
				files.writeFile(fontsFile, '', cb)
				let newFileOnly
				for (var i = 0; i < fontsFiles.length; i++) {
					//Записываем подключения шрифтов в файл стилей
					let fontFileName = fontsFiles[i].split('.')[0]
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0]
							? fontFileName.split('-')[0]
							: fontFileName
						let fontWeight = fontFileName.split('-')[1]
							? fontFileName.split('-')[1]
							: fontFileName
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700
						} else if (
							fontWeight.toLowerCase() === 'extrabold' ||
							fontWeight.toLowerCase() === 'heavy'
						) {
							fontWeight = 800
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900
						} else {
							fontWeight = 400
						}
						files.appendFile(
							fontsFile,
							`@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../assets/fonts/${fontFileName}.woff2") format("woff2"), url("../assets/fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
							cb
						)
						newFileOnly = fontFileName
					}
				}
			} else {
				console.log(
					"Delete 'assets/styles/misc/font.scss, before refresh file'"
				)
			}
		}
	})
	return app.gulp.src(app.path.sourceFolder).pipe(
		app.plugin.plumber(
			app.plugin.notify.onError({
				title: 'font',
				message: 'error: <%= error.message %>',
			})
		)
	)
	function cb() {}
}
