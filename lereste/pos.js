
let tbody = document.querySelector(".zedjyd");
let data = JSON.parse(localStorage.getItem("poster"));
data.forEach((user) => {
    // now = ` <tr>
    //     <td>${user.nameid}</td>
    //     <td>${user.prenomid}</td>
    //     <td>${user.emailid}</td>
    //     <td>${user.passewordid}</td>
       
       
    // </tr>`

    // ns = `<div class="jusdk1">
    //     <div class="gsdaje1">
            
    //     </div>
    //     <div class="gsdaje2">
    //         <h1 style="padding-bottom: 10px;">${user.nameid}</h1>
    //         <h5>Poussiere sur la route</h5>
    //         <p style="padding-bottom: 10px;">${user.prenomid}</p>
    //         <h5>${user.napres}</h5>
    //         <p>${user.passewordid}</p>
    //         <p>${user.napres}</p>
    //     </div>
    //     </div>`


    

    nttd = `
        <div class="zedjyd" style="color: black;width: 100%;">
            <div class="kdhcep">
                <div class="kljdd1">
                    <div class="dskdzq1">
                        <img src="https://source.unsplash.com/random/post" height="100%" width="100%" alt="">
                    </div>
                    <div class="dskdzq2">
                        <h1 style="color: green;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">${user.nome}</h1>
                        <h3 style="color: black;">${user.emai}</h3>
                        <p style="color: black;">${user.aute}</p>
                    </div>
                </div>
                <div class="kljdd2">
                    <h1 style="color: green;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Type de projet</h1>
                    <p style="color: black;">${user.nomdepr}</p>

                    <h1 style="color: green;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Description du projet</h1>
                    <h3 style="color: black;">${user.nomdd}</h3>
                    <p style="color: black;">${user.descr}</p>
                    <h1 style="color: green;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Pourquoi doit-on vous aidez ?</h1>
                    <p style="color: black;">${user.aide}</p>
                    <h1 style="color: green;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Combien voulez vous et Pourquoi cette somme ?</h1>
                    <p style="color: black;">${user.somme}</p>
                </div>
                
            </div>
        </div> `
    tbody.innerHTML += nttd

});