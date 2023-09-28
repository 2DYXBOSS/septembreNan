let boutonid = document.querySelector("#ser3");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    // let tabUsere = JSON.parse(localStorage.getItem("payer")) || []
    let monr = document.querySelector("#monr").value;
    let env = document.querySelector("#env").value;
    let recoi = document.querySelector("#recoi").value;
    // let nop = document.querySelector("#nop").value;
    
    alert("La transaction de :"+ " "  + " " + parseFloat(monr)+ " " + " FCFA"  + " "+ "sur le numero suivant :" +" "  + " "+ parseFloat(recoi) +" "  + " "+"été effectuée avec succès par le numero suivant : "+ " "  + " "+ parseFloat(env) )
    
    // let usere = {
    //     nameid : nameid,
    //     prenomid :prenomid,
    //     emailid : emailid,
    //     passewordid :passewordid,
    //     objetifid :objetifid,
    // }
    // tabUsere.push(usere)
    // localStorage.setItem('inscpc',JSON.stringify(tabUsere))
    // alert("votre depot de ",)
})  
