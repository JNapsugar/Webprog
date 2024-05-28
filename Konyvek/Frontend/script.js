
let konyvek = []
KonyvekGet()

document.getElementById("Konyvek").onclick = KonyvekGet()
document.getElementById("UjKonyv").onclick = UjModositasKonyv("POST",0)

function KonyvekGet() {
    document.getElementById('content').innerHTML = `<h1>Könyvek</h1><div id="konyvek"></div>`
    fetch("https://localhost:7017/")
    .then(
        function(data) {
            return data.json()
        } 
    )
    .then(
        function(data) {
            for (let i = 0; i < data.length; i++) {
                Konyvek.push(data[i])
                console.log(data)
                document.getElementById('konyvek').innerHTML += `
                <div class = "card">
                    <p class="nev">Könyv neve: ${data[i].nev}</p>
                    <h2>Kiadás éve: ${data[i].kiadasEve}</h2>
                    <p>Könyv értékelése: ${data[i].ertekeles}</p>
                    <img src="${data[i].kepneve}" onclick="Megtekintes(${i})">
                    <p class="ikonok">
                        <i class="bi bi-pencil" id="modositas" onclick="UjModositasKonyv("PUT",${i})"></i>
                        <i class="bi bi-trash3" id="torles" onclick="Torles(${i})"></i>
                    </p>
                </div>
                `   
            }
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
    document.getElementById("vissza") = KonyvekGet()
}

function UjModositasKonyv(method, id) {
    document.getElementById("content").innerHTML = `        
    <div class="ujKonyv">
        <table>
        <p><i class="bi bi-arrow-left-circle" id="vissza"></i></p>
        <h1 id ="cim">${method == "POST" ? "Új könyv felvitele" : "Könyv módosítása"}</h1>
        <table>
            <tr>
                <td><label>Könyv neve:</label></td>
                <td><input type="text" id="ujNev"></td>
            </tr>
            <tr>
                <td><label>Kiadás éve:</label></td>
                <td><input type="text" id="ujKiadas"></td>
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
        ${method == "POST" ? 
            `<button id='Felvitel' onclick='Felvitel(method, 'https://localhost:7017/')'></button>` :
            `<button id='Felvitel' onclick='Felvitel(method, 'https://localhost:7017/'+${id})'></button>`
        }
    </div>`
    document.getElementById("vissza").onclick = KonyvekGet()

    function Felvitel(method, url) {
        let body={
            nev: document.getElementById("ujNev").value,
            kiadasEve: document.getElementById("ujKiadas").value,
            ertekeles: Number(document.getElementById("ujErtekeles").value),
            kepneve: document.getElementById("ujKepnev").value,
        }
    
        fetch(url,{
            method : method,
            body : JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'}})
    
        alert("(Adatok tárolása sikeres!)")
    }

}



function Torles(id) {
    fetch("https://localhost:7017/"+id,{method : "DELETE"})
    alert("Adatok törlése sikeres!")
    KonyvekGet
}
