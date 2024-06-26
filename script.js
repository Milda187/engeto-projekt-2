const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector(".hamIcon")
const hamIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
    if (hamIcon.classList[1] === "fa-bars") {
        hamIcon.classList.add("fa-xmark")
        hamIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamIcon.classList.add("fa-bars")
        hamIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }   
})
