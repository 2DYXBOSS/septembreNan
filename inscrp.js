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


let boutonid = document.querySelector("#boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("userliste")) || []
    let nameid = document.querySelector("#nameid").value;
    let prenomid = document.querySelector("#prenomid").value;
    let passewordid = document.querySelector("#passwordid").value;
    let emailid = document.querySelector("#emailid").value;
    let objetifid = document.querySelector("#objetifid").value;
    
    let user = {
        nameid : nameid,
        prenomid :prenomid,
        emailid : emailid,
        passewordid :passewordid,
        objetifid :objetifid,
    }
    tabUser.push(user)
    localStorage.setItem('userliste',JSON.stringify(tabUser))
})  