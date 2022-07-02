// {{{ hamburger menu
const navButton = document.getElementById("menuButton")
const navMenu = document.getElementById("navMenu")
const buttonSpan = document.querySelectorAll(".buttonSpan")

navButton.addEventListener("click", () => {
    navButton.classList.toggle("open")

    if (navMenu.classList.contains("slide-from-right")) {
        navMenu.classList.toggle("translate-x-0")
    } else if (navMenu.classList.contains("slide-from-top")) {
        navMenu.classList.toggle("translate-y-0")
    } else if (navMenu.classList.contains("slide-from-left")) {
        navMenu.classList.toggle("translate-x-0")
    }

    navMenu.classList.toggle("darken-screen")

    if (navButton.classList.contains("open")) {
        navButton.ariaExpanded = true
    } else navButton.ariaExpanded = false

    for (let i of navMenu.children) {
        i.classList.toggle("opacity-100")
    }
})

document.addEventListener("click", (e) => {
    if (
        e.target.id !== "navMenu" &&
        e.target.id !== "menuButton" &&
        e.target.className !== "hamburger-top" &&
        e.target.className !== "hamburger-middle" &&
        e.target.className !== "hamburger-bottom"
    ) {
        navButton.classList.remove("open")
        navButton.ariaExpanded = false
        navMenu.classList.remove("translate-x-0")
        navMenu.classList.remove("translate-y-0")
        navMenu.classList.remove("darken-screen")

        for (let i of navMenu.children) {
            i.classList.remove("opacity-100")
        }
    }
})
// }}}

// {{{ login modal
const loginModal = document.getElementById("loginModal")
const openLoginModal = document.getElementById("loginButton")

openLoginModal.addEventListener("click", () => {
    loginModal.showModal()
})

loginModal.addEventListener("click", (e) => {
    const rect = loginModal.getBoundingClientRect()

    if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
    ) {
        loginModal.close()
    }
})

document.onkeyup = (event) => {
    if (event.key === "Escape") {
        loginModal.close()
    }
}
// }}}

// {{{ registration modal
const registrationModal = document.getElementById("registrationModal")
const openRegistrationModal = document.getElementById("registrationButton")

openRegistrationModal.addEventListener("click", () => {
    loginModal.close()
    registrationModal.showModal()
})

registrationModal.addEventListener("click", (e) => {
    const rect = registrationModal.getBoundingClientRect()

    if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
    ) {
        registrationModal.close()
    }
})

document.onkeyup = (event) => {
    if (event.key === "Escape") {
        registrationModal.close()
    }
}
// }}}

// {{{ demo user modal
const demoUserModal = document.getElementById("demoUserModal")
const openDemoUserModal = document.getElementById("demoUserModalButton")

openDemoUserModal.addEventListener("click", () => {
    loginModal.close()
    demoUserModal.showModal()
})

demoUserModal.addEventListener("click", (e) => {
    const rect = demoUserModal.getBoundingClientRect()

    if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
    ) {
        demoUserModal.close()
    }
})

document.onkeyup = (event) => {
    if (event.key === "Escape") {
        demoUserModal.close()
    }
}
// }}}

const html = document.getElementById("html")
const darkToggle = document.getElementById("darkToggle")
const sunMoon = document.getElementById("sunMoon")

darkToggle.addEventListener("click", () => {
    html.classList.toggle("dark")
    sunMoon.classList.toggle("fa-moon")
    sunMoon.classList.toggle("fa-sun")
})
