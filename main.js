// FOR ACTIVE NAV
const hamburgerLink = document.querySelector('.hamburger-link')

hamburgerLink.addEventListener('click', activeNav)
hamburgerLink.addEventListener('focusout', activeNav)

function activeNav() {
    const nav = document.querySelector('nav')
    nav.classList.toggle('active')

    const link = document.querySelectorAll('nav a')
    link.forEach(e => {
        e.classList.toggle('visible')
    })
}

// FOR EMAIL
const inputEmail = document.getElementById('hero-email-input')
const form = document.getElementById('emailForm')

form.addEventListener('submit', e => {
    e.preventDefault()
    errorChecking()
})

function errorChecking() {
    const emailVal = inputEmail.value

    if (emailVal === '') {
        inputEmail.placeholder = 'name@example.com'
        inputEmail.classList.add('error')
    } else {
        if (validateEmail(emailVal)) {
            inputEmail.placeholder = 'Enter your e-mail address'
            inputEmail.classList.remove('error')
        } else {
            inputEmail.placeholder = 'I think this is not an email'
        }

    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}