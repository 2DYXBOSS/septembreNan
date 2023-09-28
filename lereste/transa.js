let data = JSON.parse(localStorage.getItem("collabepo"));
// let nomezz = document.querySelector(".nomez");
// nomezz.innerText = data.nameid
let nom = document.querySelector(".nome");
let comm = document.querySelector(".com");
let mail = document.querySelector(".mail");
let obj = document.querySelector(".desc");
data.forEach((user) => {
    a = `<h1>${user.nameid}<h1>`
    b = `<h1>${user.prenomid}<h1>`
    c = `<p>${user.emailid}<p>`
    d = `<p>${user.objectifid}<p>`
    e = `<p>${user.passewordid}<p>`     

});
nom.innerHTML += ( a + b )
mail.innerHTML += c
obj.innerHTML += d
comm.innerHTML += e


// let affi = document.querySelector("h1.ikjk");

// data.forEach((user) => {
//     b = `<h1>${user.nameid}<h1>`
    
//     affi.innerHTML += b


// });