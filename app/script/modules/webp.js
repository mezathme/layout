function isWebp() {
	function checkWebp(callback) {
		let webp = new Image()
		webp.onload = webp.onerror = function () {
			callback(webp.height == 2)
		}
		webp.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}

	checkWebp(function (support) {
		if (support == true) {
			document.documentElement.classList.add('webp')
		} else {
			document.documentElement.classList.add('no-webp')
		}
	})
}

export default isWebp
