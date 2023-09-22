
// CONNEXION
let butonco = document.querySelector("#boutonid")
const conner = document.querySelector("form")
conner.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tabeUser = JSON.parse(localStorage.getItem("inscriptionsurpc"));
    let result ;
    tabeUser.forEach((utilisateur) => {
        if(document.querySelector("#emailid").value === utilisateur.emailid && document.querySelector("#passwordid").value === utilisateur.passewordid )
        result = utilisateur
        // console.log(result)
    });

    if (typeof result !== "undefined"){
        localStorage.setItem("conectermow",JSON.stringify([result]))
        window.location.replace("../index.html");
    }
    else {
        window.location.reload()
    }

    tabeUser.push(utilisateur)
    localStorage.setItem("inscriptionsurpc",JSON.stringify(tabeUser))
    

})

// let butoncoe = document.querySelector(".boutonide")
// const connere = document.querySelector("form")
// connere.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let tabeUsere = JSON.parse(localStorage.getItem("inscription"));
//     let resulte ;
//     tabeUsere.forEach((utilisateure) => {
//         if(document.querySelector("#emailide").value === utilisateure.emailid && document.querySelector("#passwordide").value === utilisateure.passewordid )
//         resulte = utilisateure
//         // console.log(result)
//     });

//     if (typeof resulte !== "undefined"){
//         localStorage.setItem("instante",JSON.stringify([resulte]))
//         window.location.replace("../index.html");
//     }
//     else {
//         window.location.reload()
//     }

//     tabeUsere.push(utilisateure)
//     localStorage.setItem("inscription",JSON.stringify(tabeUsere))
    

// })

