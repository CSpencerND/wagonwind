// {{{ hamburger menu 
const button = document.getElementById("menuButton")
const nav = document.getElementById("navMenu")

button.addEventListener("click", () => {
    button.classList.toggle("open")
    nav.classList.toggle("translate-x-0")
    // nav.classList.toggle("translate-x-full")
})
// }}}

// {{{ login modal 
const modal = document.getElementById("modal")
const openModal = document.getElementById("loginButton")

openModal.addEventListener("click", () => {
    modal.showModal()
})

modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect()

    if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
    ) {
        modal.close()
    }
})

document.onkeyup = (event) => {
    if (event.key === "Escape") {
        modal.close()
    }
}
// }}}
