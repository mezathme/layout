import sync from 'browser-sync'
import condition from 'gulp-if'
import newer from 'gulp-newer'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'

const plugin = {
	plumber: plumber,
	notify: notify,
	sync: sync,
	newer: newer,
	condition: condition,
}

export default plugin
