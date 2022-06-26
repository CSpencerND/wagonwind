const btn = document.getElementById("menu-btn")
const nav = document.getElementById("nav-menu")

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("translate-x-0")
    nav.classList.toggle("translate-x-full")
})
