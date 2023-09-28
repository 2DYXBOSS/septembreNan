let boutonid = document.querySelector("#bouste");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUserer = JSON.parse(localStorage.getItem("poster")) || []
    let nome = document.querySelector("#nome").value;
    let emai = document.querySelector("#emai").value;
    let aute = document.querySelector("#aute").value;
    let nomdepr = document.querySelector("#nomdepr").value;
    let nomdd = document.querySelector("#nomdd").value;
    let descr = document.querySelector("#descr").value;
    let somme = document.querySelector("#somme").value;
    let aide = document.querySelector("#aide").value;
    
    let usere = {
        nome : nome,
        emai :emai,
        aute : aute,
        nomdepr :nomdepr,
        nomdd :nomdd,
        descr :descr,
        aide :aide,
        somme :somme,
    }
    tabUserer.push(usere)
    localStorage.setItem('poster',JSON.stringify(tabUserer))
    window.location.replace("../lereste/contacte.html");
})  
