
let konyvek = []
KonyvekGet()

document.getElementById("Konyvek").onclick = function(){ KonyvekGet()}
document.getElementById("UjKonyv").onclick = function () {UjModositasKonyv("POST",0)}


function KonyvekGet() {
    konyvek = []
    document.getElementById('content').innerHTML = `<h1>Könyvek</h1>`
    fetch("http://localhost:5000/Konyv")
    .then(
        function(data) {
            return data.json()
        } 
    )
    .then(
        function(data) {
            for (let i = 0; i < data.length; i++) {
                konyvek.push(data[i])
                document.getElementById('content').innerHTML += `
                <div class = "card">
                    <p class="nev">Könyv neve: ${data[i].nev}</p>
                    <h2>Kiadás éve: ${data[i].kiadasEve}</h2>
                    <p>Könyv értékelése: ${data[i].ertekeles}</p>
                    <img src="${data[i].kepneve}" onclick="Megtekintes(${i})">
                    <p class="ikonok">
                        <i class="bi bi-pencil" id="modositas" onclick='UjModositasKonyv("PUT",${data[i].id-1})'></i>
                        <i class="bi bi-trash3" id="torles" onclick="Torles(${data[i].id})"></i>
                    </p>
                </div>
                `   
            }
            console.log(konyvek);
        }
    )
}

function Megtekintes(i) {
    document.getElementById("content").innerHTML = `        
        <div class="megtekintes">
            <p><i class="bi bi-arrow-left-circle" id="vissza"></i></p>
            <h2>Könyv neve: ${konyvek[i].nev}</h2>
            <h2>Kiadás éve: ${konyvek[i].kiadasEve}</h2>
            <p>Könyv értékelése: ${konyvek[i].ertekeles}</p>
            <img src="${konyvek[i].kepneve}">
        </div>`
    document.getElementById("vissza").onclick = function(){ KonyvekGet()}
}

function UjModositasKonyv(method, id) {
    document.getElementById("content").innerHTML = `        
    <div class="ujKonyv" id="ujKonyv">
        <p><i class="bi bi-arrow-left-circle" id="vissza"></i></p>
        <h1 id ="cim">${method == "POST" ? "Új könyv felvitele" : "Könyv módosítása"}</h1>
        <table>
            <tr>
                <td><label>Könyv neve:</label></td>
                <td><input type="text" id="ujNev"></td>
            </tr>
            <tr>
                <td><label>Kiadás éve:</label></td>
                <td><input type="number" id="ujKiadas"></td>
            </tr>
            <tr>
                <td><label>Könyv értékelése:</label></td>
                <td><input type="number" id="ujErtekeles"></td>
            </tr>
            <tr>
                <td><label>Kép címe:</label></td>
                <td><input type="text" id="ujKepnev"></td>
            </tr>
        </table>
    </div>`
    method == "POST" ? 
    document.getElementById("ujKonyv").innerHTML +=`<button id='Felvitel' onclick='Felvitel("POST", "http://localhost:5000/Konyv/")'>Felvitel</button>` :
    document.getElementById("ujKonyv").innerHTML +=`<button id='Felvitel' onclick='Felvitel("PUT", "http://localhost:5000/Konyv/${id}")'>Módisítás</button>`


    if (method == "PUT") {
        document.getElementById("ujNev").value = konyvek[id].nev
        document.getElementById("ujKiadas").value = konyvek[id].kiadasEve
        document.getElementById("ujErtekeles").value = konyvek[id].ertekeles
        document.getElementById("ujKepnev").value = konyvek[id].kepneve
    }
    document.getElementById("vissza").onclick = function () {KonyvekGet()}

}

function Felvitel(method, url) {
    let body={
        nev: document.getElementById("ujNev").value,
        kiadasEve: Number(document.getElementById("ujKiadas").value),
        ertekeles: Number(document.getElementById("ujErtekeles").value),
        kepneve: document.getElementById("ujKepnev").value,
    }

    fetch(url,{
        method : method,
        body : JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'}})

    alert("(Adatok tárolása sikeres!)")
    document.getElementById("ujNev").value = ""
    document.getElementById("ujKiadas").value = ""
    document.getElementById("ujErtekeles").value = ""
    document.getElementById("ujKepnev").value = ""
}


function Torles(id) {
    fetch(`http://localhost:5000/Konyv/${id}`,{method : "DELETE"})
    alert("Adatok törlése sikeres!")
    KonyvekGet()
}
