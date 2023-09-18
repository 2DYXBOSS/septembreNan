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



// COLLABORATION
let boutonid = document.querySelector(".boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("collab")) || []
    let nameid = document.querySelector(".nameid").value;
    let prenomid = document.querySelector(".prenomid").value;
    let passewordid = document.querySelector(".passwordid").value;
    let emailid = document.querySelector(".emailid").value;
    let objetifid = document.querySelector(".objetifid").value;
    
    let user = {
        nameid : nameid,
        prenomid :prenomid,
        emailid : emailid,
        passewordid :passewordid,
        objetifid :objetifid,
    }
    tabUser.push(user)
    localStorage.setItem('collab',JSON.stringify(tabUser))
})  


// RECUPERER LES COORDONNEES DE L'UTILISATEUR CONNECTER
let tbody = document.querySelector(".infoPreso table tbody");
let data = JSON.parse(localStorage.getItem("connect"));
data.forEach((user) => {
    now = ` <tr>
        <td>${user.nameid}</td>
        <td>${user.emailid}</td>
        <td>${user.passewordid}</td>
        <td><button>Mofifier</button></td>
        
       
    </tr>`
    tbody.innerHTML += now

});


// RECUPERER LE NOM DE L'UTILISATEUR CONNECTER
// let affi = document.querySelector("span.nomez");

// data.forEach((user) => {
//     a = `<h1>${user.nameid}<h1>`
//     affi.innerHTML += a


// });

