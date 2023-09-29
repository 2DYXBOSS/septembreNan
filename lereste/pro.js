let nombre14 = document.querySelector(".nom");
let nombre145 = document.querySelector(".mail");
let nombre1455 = document.querySelector(".obje");
let ezd = JSON.parse(sessionStorage.getItem("conecternow"));
ezd.forEach((user) => {
    wh = ` <h1>${user.nameid}</h1>`
    whu = ` <h3>${user.emailid}</h3>`
    whuas = ` <p>${user.odjectifif}</p>`


    nombre14.innerHTML = wh
    nombre145.innerHTML = whu
    nombre1455.innerHTML = whuas

});



let rec = document.querySelector(".jyaz2");
let egcdfczzd = JSON.parse(localStorage.getItem("poster"));
egcdfczzd.forEach((user) => {
    gdsh = `  <div class="aetyatuz">
                <h1 style="color: black; font-size: 1.5rem;font-family: 'Rowdies', cursive;">${user.nomdd}</h1>
                <h3>${user.nomdepr}</h3>
                <p>${user.descr}</p>
            </div>
        `
    rec.innerHTML += gdsh

});



