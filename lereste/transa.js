let data = JSON.parse(localStorage.getItem("connect"));


let ads = document.querySelector("h1.nomusee");
data.forEach((user) => {
    a = `<h1>${user.nameid}<h1>`
   
    ads.innerHTML += a

});


let affi = document.querySelector("h1.ikjk");

data.forEach((user) => {
    b = `<h1>${user.nameid}<h1>`
    
    affi.innerHTML += b


});