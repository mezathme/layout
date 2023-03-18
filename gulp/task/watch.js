const watch = () => {
	return [
		app.gulp.watch(app.path.watch.html, app.task.html),
		app.gulp.watch(app.path.watch.style, app.task.style),
		app.gulp.watch(app.path.watch.script, app.task.script),
		app.gulp.watch(app.path.watch.image, app.task.image),
	]
}

export default watch
