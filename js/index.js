let allchar = "0123456789ABCDEF";
let bgColor = document.getElementById("demoq");

function myColor() {
    let randcol = "#";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * allchar.length)];
    }
    bgColor.style.color = randcol;
}

// let letters = "0123456789ABCDEF";
// const body = document.querySelector(".container-1");
// const colorelement = document.querySelector("#color");

// function getColor() {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * letters.length)];
//     }
//     body.style.backgroundColor = color;
//     colorelement.innerHTML = color;
// }