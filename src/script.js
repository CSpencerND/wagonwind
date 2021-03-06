// FIX: Organize this mess into functions
// NOTE: Might wanna separate into different files

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
    } else if (navMenu.classList.contains("slide-from-under")) {
        // navMenu.classList.toggle("max-md:border-b")
        navMenu.classList.toggle("max-md:border-b-current")
        if (navMenu.style.maxHeight) {
            navMenu.style.maxHeight = null
        } else {
            navMenu.style.maxHeight = navMenu.scrollHeight + "px"
        }
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

// modal close buttons {{{
const modalCloseButtons = document.querySelectorAll(".modal-close-button")
for (let button of modalCloseButtons) {
    button.onclick = () => {
        const modal = button.parentElement
        modal.close()
    }
}
// modal close buttons }}}

// {{{ dark mode toggle
const html = document.getElementById("html")
const darkPath = document.getElementById("darkSvgPath")

window.addEventListener("load", () => {
    if (html.classList.contains("dark")) {
        darkPath.setAttribute("d", moonD)
    } else {
        darkPath.setAttribute("d", sunD)
    }
})

const sunD =
    "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
const moonD =
    "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"

darkToggle.addEventListener("click", () => {
    html.classList.toggle("dark")
    if (html.classList.contains("dark")) {
        darkPath.setAttribute("d", moonD)
    } else {
        darkPath.setAttribute("d", sunD)
    }
})
// }}}

// TODO: Adapt to a generic collapse to modularize usage
// {{{ accordion
const accordions = document.getElementsByClassName("accordion-button")
const accordionBodies = Object.values(
    document.getElementsByClassName("accordion-body")
)
const accordionWrapper = document.querySelector(".accordion")
const isSingle = accordionWrapper.getAttribute("data-single") === "true"

for (let accordion of accordions) {
    accordion.onclick = () => {
        const icon = accordion.firstElementChild
        const content = accordion.nextElementSibling
        const accordionSiblings = accordionBodies.filter((body) => {
            return body != content
        })

        if (isSingle) {
            for (let sibling of accordionSiblings) {
                siblingIcon = sibling.previousElementSibling.firstElementChild
                if (sibling.style.maxHeight) {
                    sibling.style.maxHeight = null
                    siblingIcon.classList.toggle("rotate-180")
                }
            }
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }

        icon.classList.toggle("rotate-180")
    }
}
// accordion }}}
