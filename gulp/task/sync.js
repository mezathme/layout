const sync = done => {
	app.plugin.sync.init({
		server: {
			baseDir: `${app.path.build.html}`,
		},
		notify: false,
		online: true,
		port: 3000,
	})
}

export default sync
