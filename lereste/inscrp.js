// let boutonid = document.querySelector("#boutonid");
// boutonid.addEventListener("click",(event)=>{
//     event.preventDefault()
//     let tabUser = JSON.parse(localStorage.getItem("formulnan")) || []
//     let nameid = document.querySelector("#nameid").value;
//     let prenomid = document.querySelector("#prenomid").value;
//     let emailid = document.querySelector("#emailid").value;
//     let addresseid = document.querySelector("#addresseid").value;
    
//     let user = {
//         nameid : nameid,
//         prenomid :prenomid,
//         emailid : emailid,
//         addresseid :addresseid,
//     }
//     tabUser.push(user)
//     localStorage.setItem("formulnan",JSON.stringify(tabUser))
// })  

let nombre14 = document.querySelector(".nomezm");
let ezd = JSON.parse(localStorage.getItem("conecternow"));
ezd.forEach((user) => {
    wh = ` <span>${user.nameid}</span>`


    nombre14.innerHTML = wh

});
// now223 = ezd.nameid
// nombre14.innerHTML = now223

// COLLABORATION

let boutonid = document.querySelector("#boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUsere = JSON.parse(localStorage.getItem("collabepo")) || []
    let nameid = document.querySelector("#nameid").value;
    let prenomid = document.querySelector("#prenomid").value;
    let passewordid = document.querySelector("#passewordid").value;
    let emailid = document.querySelector("#emailid").value;
    let objetifid = document.querySelector("#objetifid").value;
    
    let usere = {
        nameid : nameid,
        prenomid :prenomid,
        emailid : emailid,
        passewordid :passewordid,
        objetifid :objetifid,
    }
    
    tabUsere.push(usere)
    localStorage.setItem('collabepo',JSON.stringify(tabUsere))
    window.location.replace("../lereste/pos.html")
})  








let boutonide = document.querySelector("#boutonide");
boutonide.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("collabete")) || []
    let nameide = document.querySelector("#nameide").value;
    let prenomide = document.querySelector("#prenomide").value;
    let passwordide = document.querySelector("#passwordide").value;
    let emailide = document.querySelector("#emailide").value;
    let objetifide = document.querySelector("#objetifide").value;
    
    let user = {
        nameide : nameide,
        prenomide :prenomide,
        emailide : emailide,
        passwordide :passwordide,
        objetifide :objetifide,
    }
    tabUser.push(user)
    localStorage.setItem('collabete',JSON.stringify(tabUser))
})  


// let boutonide = document.querySelector("#boutonide");
// boutonid.addEventListener("click",(event)=>{
//     event.preventDefault()
//     let tabUser = JSON.parse(localStorage.getItem("collabtel")) || []
//     let nameide = document.querySelector("#nameide").value;
//     let prenomide = document.querySelector("#prenomide").value;
//     let passewordide = document.querySelector("#passwordide").value;
//     let emailide = document.querySelector("#emailide").value;
//     let objetifide = document.querySelector("#objetifide").value;
    
//     let user = {
//         nameide : nameide,
//         prenomide :prenomide,
//         emailide : emailide,
//         passewordide :passewordide,
//         objetifide :objetifide,
//     }
//     tabUser.push(user)
//     localStorage.setItem('collabtel',JSON.stringify(tabUser))
// })  


// const nav = document.querySelector('.lodhe')
// const nav1 = document.querySelector('.sortira')
// const nav12 = document.querySelector('.sortira')

// nav12.addEventListener('click', ()=> {
//     nav1.classList.remove('active');
// })
// nav.addEventListener('click', ()=> {
//     nav1.classList.add('active');
// })


// let boutonide = document.querySelector("#boutonid");
// boutonide.addEventListener("click",(event)=>{
//     event.preventDefault()
//     let tabUser = JSON.parse(localStorage.getItem("collab")) || []
//     let nameid = document.querySelector("#nameid").value;
//     let prenomid = document.querySelector("#prenomid").value;
//     let passewordid = document.querySelector("#passwordid").value;
//     let emailid = document.querySelector("#emailid").value;
//     let objetifid = document.querySelector("#objetifid").value;
    
//     let user = {
//         nameid : nameid,
//         prenomid :prenomid,
//         emailid : emailid,
//         passewordid :passewordid,
//         objetifid :objetifid,
//     }
//     tabUser.push(user)
//     localStorage.setItem('collab',JSON.stringify(tabUser))
// })  


// RECUPERER LES COORDONNEES DE L'UTILISATEUR CONNECTER
// let tbody = document.querySelector(".infoPreso table tbody");
// let data = JSON.parse(localStorage.getItem("connect"));
// data.forEach((user) => {
//     now = ` <tr>
//         <td>${user.nameid}</td>
//         <td>${user.emailid}</td>
//         <td>${user.passewordid}</td>
//         <td><button>Mofifier</button></td>
        
       
//     </tr>`
//     tbody.innerHTML += now

// });




// RECUPERER LE NOM DE L'UTILISATEUR CONNECTER
// let affi = document.querySelector("h1.nomez");
// let data = JSON.parse(localStorage.getItem("instant"));
// data.forEach(eus => {
    
//     affi.innerHTML = eus.nameid

// });


// data.forEach((user) => {
//     a = `<h1>${user.nameid}<h1>`
//     affi.innerHTML += a


// });



// const clique = document.querySelector('.lodhe')
// const sote = document.querySelector('.sortira')
// const c = document.querySelector('body')



// c.addEventListener('click', ()=> {
//     sote.classList.remove('active');
// })
// clique.addEventListener('click', ()=> {
//     sote.classList.add('active');
// })

