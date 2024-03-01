const navSmall = document.querySelector('.nav-small')
const navBtn = document.querySelector('.burger-btn')
const navSmallItems = document.querySelectorAll('.nav-small__item')
const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.nav')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.send')
const error = document.querySelector('.contact__form-box-error')
let lastScrollY = window.scrollY

document.addEventListener('DOMContentLoaded', function () {
	const navToggle = () => {
		if (!navSmall.classList.contains('nav-small--active')) {
			if (lastScrollY < window.scrollY) {
				nav.classList.add('hidden')
			} else {
				nav.classList.remove('hidden')
			}
		}
		lastScrollY = window.scrollY
	}

	window.addEventListener('scroll', navToggle)

	navBtn.addEventListener('click', handleNav)

	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year + ' '
	}
	handleCurrentYear()
})

const handleNav = () => {
	navSmall.classList.toggle('nav-small--active')

	navSmallItems.forEach(item => {
		item.addEventListener('click', () => {
			navSmall.classList.remove('nav-small--active')
		})
	})
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0
	navSmallItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const showError = input => {
	const formBox = input.parentElement
	formBox.classList.add('error')
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el)
		} else {
			clearError(el)
		}
	})
}

const nameLength = input => {
	if (input.value.length === 0) {
		error.textContent = 'Podaj imię i nazwisko.'
		showError(input, error.textContent)
	} else if (input.value.length < 3) {
		error.textContent = 'Imię i nazwisko jest za krótkie.'
		showError(input, error.textContent)
	} else {
		clearError(input)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, error.textContent)
	}
}

const msgLength = textarea => {
	const error = textarea.parentElement.querySelector('.contact__form-box-error')

	if (textarea.value.length === 0) {
		error.textContent = 'Wpisz wiadomość.'
		showError(textarea, error.textContent)
	} else if (textarea.value.length < 10) {
		error.textContent = 'Wiadomość powinna składać się z minimum 10 znaków.'
		showError(textarea, error.textContent)
	} else {
		clearError(textarea)
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, email, msg])
	nameLength(username)
	msgLength(msg)
	checkMail(email)
})


// const sendForm = () => {
// 	const form = document.querySelector('.contact__form')

// 	if (!form) {
// 		console.log('nie mozna znalezc rodzica')
// 		return
// 	}

// 	const formBoxes = form.children

// 	for (let i = 0; i < formBoxes.length; i++) {
// 		const formBox = formBoxes[i]

// 		if (formBox.classList.contains('error')) {
// 			form.classList.remove('formularz')
// 			return
// 		}
// 	}
// 	form.classList.add('formularz')
// }

// sendBtn.addEventListener('click', sendForm)
