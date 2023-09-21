
// INSCRIPTION PC
let boutonid = document.querySelector(".boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("inscription")) || []
    let nameid = document.querySelector(".nameid").value;
    let passewordid = document.querySelector(".passwordid").value;
    let emailid = document.querySelector(".emailid").value;
    let confpassword = document.querySelector(".confpassword").value;
    let odjectifif = document.querySelector(".odjectifif").value;
    // tabUser.forEach((utilisateur) => {
    //     if(document.querySelector(".emailid").value === utilisateur.emailid )
    //     window.location.replace("../index.html")
        
    //     alert(utilisateur)
    //     // console.log(result)
       
    // });
    let user = {
        nameid : nameid,
        emailid : emailid,
        passewordid :passewordid,
        odjectifif : odjectifif,
        confpassword :confpassword,

    } 

    // if( document.querySelector(".emailid").value === emailid )
    tabUser.push(user)
    localStorage.setItem('inscription',JSON.stringify(tabUser))
    
    window.location.replace("../lereste/conev.html")

    
    
})  ;


// let boutonide = document.querySelector(".boutonide");
// boutonide.addEventListener("click",(event)=>{
//     event.preventDefault()
//     let tabUsere = JSON.parse(localStorage.getItem("inscriptionipc")) || []
//     let nameide = document.querySelector(".nameide").value;
//     let passwordide = document.querySelector(".passwordide").value;
//     let emailide = document.querySelector(".emailide").value;
//     let confpassworde = document.querySelector(".confpassworde").value;
//     let odjectifife = document.querySelector(".odjectifife").value;
//     // tabUser.forEach((utilisateur) => {
//     //     if(document.querySelector(".emailid").value === utilisateur.emailid )
//     //     window.location.replace("../index.html")
        
//     //     alert(utilisateur)
//     //     // console.log(result)
       
//     // });
//     let user = {
//         nameide : nameide,
//         emailide : emailide,
//         passwordide :passwordide,
//         odjectifife : odjectifife,
//         confpassworde :confpassworde,

//     } 

//     // if( document.querySelector(".emailid").value === emailid )
//     tabUsere.push(user)
//     localStorage.setItem('inscriptionipc',JSON.stringify(tabUsere))
    
//     window.location.replace("../lereste/conev.html")

    
    
// })  ;





// INSCRIPTION PHONE
// let boutonide = document.querySelector("#boutonide");
// boutonide.addEventListener("click",(event)=>{
//     event.preventDefault()
//     let tabUsere = JSON.parse(localStorage.getItem("inscriptephone")) || []
//     let nameide = document.querySelector("#nameide").value;
//     let passewordide = document.querySelector("#passwordide").value;
//     let emailide = document.querySelector("#emailide").value;
    
//     let user = {
//         nameide : nameide,
//         emailide : emailide,
//         passewordide :passewordide,

//     }
//     tabUsere.push(user)
//     localStorage.setItem('inscriptephone',JSON.stringify(tabUsere))
//     // verif = JSON.parse(localStorage.getItem("inscriptephone"))
//     // verif.forEach((utilisateur) => {
//     //     if(document.querySelector("#emailide").value === utilisateur.emailide ){
//     //         window.location.reload()
//     //     }
        
//     //     // console.log(result)
       
//     // });
//     window.location.replace("../lereste/conev.html")

    
    
// })  ;