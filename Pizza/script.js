Betolt()
let pizzak = []
function Betolt() {
    document.getElementById("content").innerHTML=""
    fetch("https://pizza.kando-dev.eu/Pizza")
    .then(
        function(data) {
            return data.json()
        } 
    )
    .then(
        function(data) {
            console.log(data);
            let gluten = "Gluténmentes"
            for (let i = 0; i < data.length; i++) {
                pizzak.push(data[i])
                gluten = data[i].isGlutenFree==1? "Gluténmentes" : "Nem gluténmentes"
                document.getElementById("content").innerHTML += 
                `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${data[i].id}. ${data[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${gluten}</h6>
                <img src="${data[i].kepURL}"><br>
                <button id="${data[i].id}" onclick="Torles(this.id)">Törlés</button>
                <button id="${data[i].id}" onclick="ModositasBetolt(${i})">Módosítás</button>
                </div>
            </div>`
                
            }
        }
    )
}


document.getElementById("felvitel").onclick = function(){

        let gluten01 = document.getElementById("ujGluten").checked? 1 : 0
        let body={
            id: document.getElementById("ujId").value,
            name: document.getElementById("ujNev").value,
            isGlutenFree: gluten01,
            kepURL: document.getElementById("ujKep").value
        }

        if (document.getElementById("felvitel").innerText=="Módosítás") {
            Modositas(body)
        }
        else{
            fetch("https://pizza.kando-dev.eu/Pizza",{
            method :"POST",
            body : JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
              }
            })
            alert("Sikeres felvitel")
        }

        Betolt()
        document.getElementById("ujId").value = ""
        document.getElementById("ujNev").value = ""
        document.getElementById("ujKep").value = ""
        document.getElementById("ujGluten").checked = false
}

function Torles(id) {
    if (confirm("Biztos törölni szeretné?")) {
        fetch("https://pizza.kando-dev.eu/Pizza/"+id,{
            method :"DELETE",
        })  
        Betolt()
    }
}


function ModositasBetolt(i) {
    console.log(pizzak)
            document.getElementById("felvitel").innerText = "Módosítás"
            document.getElementById("cim").innerText = "Pizza módosítása"
            document.getElementById("ujId").value = pizzak[i].id
            document.getElementById("ujNev").value = pizzak[i].name
            document.getElementById("ujKep").value = pizzak[i].kepURL
            document.getElementById("ujGluten").checked = pizzak[i].isGlutenFree==1? true : false
}

function Modositas(body) {
    fetch("https://pizza.kando-dev.eu/Pizza/"+body.id,{
                method :"PUT",
                body : JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                  }
            })  

    alert("Sikeres módosítás")
    document.getElementById("felvitel").innerText = "Felvitel"
    document.getElementById("cim").innerText = "Új pizza felvitele"
}