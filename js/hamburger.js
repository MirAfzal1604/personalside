// function myFunction(x) {
//     x.classList.toggle("change");
// }
const navLink = document.querySelector(".nav_links");
const burger = document.querySelector(".burger");
// const closeMain = document.querySelector(".close");

burger.addEventListener("click", show);

function show() {
    navLink.style.display = "flex";
    navLink.style.top = "0";
}

function myClose() {
    navLink.style.top = "-100%";
}


