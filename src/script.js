// {{{ hamburger menu
const button = document.getElementById("menuButton")
const nav = document.getElementById("navMenu")

button.addEventListener("click", () => {
    button.classList.toggle("open")
    nav.classList.toggle("translate-x-0")
})

document.addEventListener("click", (e) => {
    if (e.target.id !== "navMenu" && e.target.id !== "menuButton") {
        button.classList.remove("open")
        nav.classList.remove("translate-x-0")
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
