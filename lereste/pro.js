let nombre14 = document.querySelector(".nom");
let nombre145 = document.querySelector(".mail");
let nombre1455 = document.querySelector(".obje");
let ezd = JSON.parse(localStorage.getItem("conecternow"));
ezd.forEach((user) => {
    wh = ` <h1>${user.nameid}</h1>`
    whu = ` <h3>${user.emailid}</h3>`
    whuas = ` <p>${user.odjectifif}</p>`


    nombre14.innerHTML = wh
    nombre145.innerHTML = whu
    nombre1455.innerHTML = whuas

});