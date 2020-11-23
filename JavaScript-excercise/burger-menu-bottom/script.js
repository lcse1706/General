// const bottomNav = document.querySelector(".arrow");
// const navigation = document.querySelector("nav")


// bottomNav.addEventListener("click", function () {
//     bottomNav.classList.toggle("on");
//     navigation.classList.toggle("on");
// })


const bottomNav = document.querySelector(".arrow");
const activeElement = document.querySelectorAll(".active")

bottomNav.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("on")
    }
})