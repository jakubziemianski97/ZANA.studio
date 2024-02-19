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

window.addEventListener('scroll', () => {
	if (lastScrollY < window.scrollY) {
		nav.classList.add('hidden')
	} else {
		nav.classList.remove('hidden')
	}
	lastScrollY = window.scrollY
})

const showError = input => {
	const formBox = input.parentElement
	// const errorMsg = formBox.querySelector('.contact__form-box-error')

	formBox.classList.add('error')
	// error.textContent = message
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
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year + ' '
}

navBtn.addEventListener('click', handleNav)
handleCurrentYear()
