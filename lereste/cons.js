
// CONNEXION
let butonco = document.querySelector(".boutonide")
const conner = document.querySelector("form")
conner.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tabeUser = JSON.parse(localStorage.getItem("inscripte"));
    let result ;
    tabeUser.forEach((utilisateur) => {
        if(document.querySelector(".emailide").value === utilisateur.emailid && document.querySelector(".passwordide").value === utilisateur.passewordid )
        result = utilisateur
        // console.log(result)
    });

    if (typeof result !== "undefined"){
        actu = localStorage.setItem("connect",JSON.stringify([result]))
        window.location.replace("../index.html");
    }
    else {
        window.location.reload()
    }

    tabeUser.push(utilisateur)
    localStorage.setItem("inscripte",JSON.stringify(tabeUser))
    

})

