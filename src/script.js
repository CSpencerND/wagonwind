const btn = document.getElementById("menuButton")
const nav = document.getElementById("navMenu")

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("translate-x-0")
    // nav.classList.toggle("translate-x-full")
})
