let boutonid = document.querySelector("#boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUsere = JSON.parse(localStorage.getItem("connecter")) || []
    let emailid = document.querySelector("#emailid").value;
    let passwordid = document.querySelector("#passwordid").value;
    
    tbeUser = JSON.parse(localStorage.getItem("inscpce"));
    tbeUser.forEach(element => {
        if (emailid === element.emailid && passwordid === element.passwordid) {
            result = element
            // tbeUser.push(usere)
            // localStorage.setItem('inscpce',JSON.stringify(tbeUser))
            // window.location.replace("../index.html")
        }
        // else{
        //     window.location.reload()
        // } 
    });
    if (typeof result !== "undefined"){

        localStorage.setItem("conecternow",JSON.stringify([result]))
        window.location.replace("../index.html");
    }
    else{
        window.location.reload()
    } 
    // if (emailid === tbeUser.emailid && passwordid === tbeUser.passwordid) {
    //     console.log(tbeUser.emailid)
    //     usere = {
    //         emailid : emailid,
    //         passwordid :passwordid,
            
    //     }
    //     tbeUser.push(usere)
    //     localStorage.setItem('inscpce',JSON.stringify(tbeUser))
    //     window.location.replace("../index.html")}
    if (emailid === "aaa@123" && passwordid === "aaa@123") {
        alert("VOUS ETES BIEN ADMINITRATEUR DE CE SITE")
        console.log(tbeUser.emailid)
        usere = {
            emailid : emailid,
            passwordid :passwordid,
            
        }
        tabUsere.push(usere)
        localStorage.setItem('connecter',JSON.stringify(tabUsere))
        window.location.replace("../lereste/admin.html")
    }
    
})
// CONNEXION
// let butonco = document.querySelector("#boutonid")
// const conner = document.querySelector("form")
// conner.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if (document.querySelector("#passwordid").value === 2){
//         alert('erreur')
        
//         window.location.replace("index.html");
//     }
    
    
//     // let tabeUser = JSON.parse(localStorage.getItem("inscpce"));
//     // let result ;
//     // tabeUser.forEach((utilisateur) => {
//     //     alert('erreur')
//     //     if(document.querySelector("#emailid").value === utilisateur.emailid && document.querySelector("#passwordid").value === utilisateur.passwordid ){
//     //         result = utilisateur
//     //         window.location.replace("../index.html")
//     //     }
        
//     //     // window.location.replace("../index.html");
//     //     // console.log(result)
//     // });

//     // if (typeof result !== "undefined"){
//     //     alert('erreur')
//     //     localStorage.setItem("conecternow",JSON.stringify([result]))
//     //     window.location.replace("../index.html");
//     // }
//     // else {
//     //     alert('erreur')
//     //     window.location.reload()
//     // }

//     // tabeUser.filter(user => user.emailid === document.querySelector("#emailid").value)
//     // window.location.replace("../index.html");
    

//     tabeUser.push(utilisateur)
//     localStorage.setItem("inscpce",JSON.stringify(tabeUser))
    

// })

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

