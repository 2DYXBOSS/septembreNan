let nombree = document.querySelector(".wdfhgj2");
let tbody = document.querySelector(".infoPreso table tbody");
let data = JSON.parse(localStorage.getItem("inscpce"));
data.forEach((user) => {
    now = ` <tr>
        <td>${user.nameid}</td>
        <td>${user.emailid}</td>
        <td>${user.passwordid}</td>
        <td>${user.odjectifif}</td>
       
    </tr>`
    tbody.innerHTML += now

});
now222 = data.length
nombree.innerHTML = now222


let nombre14 = document.querySelector(".wdfhgj1");
let tbody3 = document.querySelector(".infoPreso1 table tbody");
let data3 = JSON.parse(localStorage.getItem("conecternow"));
data3.forEach((user) => {
    now5 = ` <tr>
        <td>${user.nameid}</td>
        <td>${user.prenomid}</td>
        <td>${user.emailid}</td>
        <td>${user.passewordid}</td>
       
    </tr>`
    tbody3.innerHTML += now5

});
now223 = data3.length
nombre14.innerHTML = now223

let nombre = document.querySelector(".wdfhgj");
let tbody2 = document.querySelector(".infoPreso2 table tbody");
let data2 = JSON.parse(localStorage.getItem("collabepo"));
data2.forEach((user) => {
    now2 = ` <tr>
        <td>${user.nameid}</td>
        <td>${user.prenomid}</td>
        <td>${user.emailid}</td>
        <td>${user.passewordid}</td>
       
    </tr>`
    tbody2.innerHTML += now2
    

});

// data2.forEach((userrt) => { 
//     // now22 = ` <p>${userrt.nameid}</p>`
//     now22 = data2.length
//     nombre.innerHTML += now22
// });
now22 = data2.length
nombre.innerHTML = now22
