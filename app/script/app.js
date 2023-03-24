import isWebp from './modules/webp.js'

isWebp()

/* PopUp Start */
const profile = document.querySelector('.header__profile')
const popupProfile = document.querySelector('.popup--profile')
const notification = document.querySelector('.header__notification')
const popupNotification = document.querySelector('.popup--notification')
const loader = document.querySelector('.loader')

profile.addEventListener('click', event => {
	if (event.composedPath()[0] !== popupProfile) {
		profile.classList.toggle('active')
		changePopupHeight(popupProfile)
	}
})

notification.addEventListener('click', event => {
	if (event.composedPath()[0] !== popupNotification) {
		notification.classList.toggle('active')
		changePopupHeight(popupNotification)
	}
})

document.addEventListener('click', event => {
	let withinBoundaries = event.composedPath().includes(profile)

	if (!withinBoundaries) {
		profile.classList.remove('active')
	}

	withinBoundaries = event.composedPath().includes(notification)

	if (!withinBoundaries) {
		notification.classList.remove('active')
	}
})

window.addEventListener('resize', event => {
	changePopupHeight(popupNotification)
	changePopupHeight(popupProfile)
})

window.onload = event => {
	changePopupHeight(popupNotification)
	changePopupHeight(popupProfile)
	loader.style.display = 'none'

	window.scrollTo(0, 0)
}

const changePopupHeight = popup => {
	let popupBottomCoordinate = popup.getBoundingClientRect().bottom

	if (popupBottomCoordinate + 8 >= document.documentElement.clientHeight) {
		popup.style.height = document.documentElement.clientHeight - 56 - 48 + 'px'
	} else {
		if (
			calcHeight(popup) > popup.getBoundingClientRect().height &&
			popup.getBoundingClientRect().height !== 0
		) {
			popup.style.height =
				document.documentElement.clientHeight - 56 - 48 + 'px'
		} else {
			popup.style.height = calcHeight(popup) + 'px'
		}
	}
}

const calcHeight = parent => {
	let childrenCount = parent.children.length
	if (parent.classList.contains('popup--notification')) {
		let notificationHeight = (childrenCount / 2) * 60
		let dividerHeight = (childrenCount / 2) * 17

		return notificationHeight + dividerHeight + 48
	} else {
		let linkHeight = 40 * 8
		let dividerHeight = 3 * 17

		return linkHeight + dividerHeight + 16
	}
}

/* PopUp End */

/* TopPage Banner Start */
const closeWarningBanner = document.querySelector(
	'section.warning > .warning__close'
)

closeWarningBanner.addEventListener('click', event => {
	event.target.closest('section.warning').remove()
})

/* TopPage Banner End */

/* Loader Start */

window.onload = event => {
	setTimeout(() => {
		loader.style.display = 'none'
	}, 500)

	window.scrollTo(0, 0)
}

/* Loader End */

/* System Message Start */

const systemMessages = document.querySelector('.system-messages')

systemMessages.addEventListener('click', event => {
	if (event.target.closest('button.system-message__close')) {
		if (systemMessages.children.length > 1) {
			event.target.closest('.system-message').remove()
		} else {
			systemMessages.remove()
		}
	}
})
