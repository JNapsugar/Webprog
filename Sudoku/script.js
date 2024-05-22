for (let i = 1; i <= 9; i++) {
    document.getElementById("jatektabla").innerHTML += `<div class="NagyNegyzet" id="Nagy${i}"></div>`
    for (let j = 1; j <= 9; j++) {
        document.getElementById(`Nagy${i}`).innerHTML += `<input type="number" class="KisNegyzet" id="Negyzet${i}_${j}" min="1" max="9" >`
    }
}

//tyhu nagyon csunya buta szegeny

let sablon1 = [1,2,0,0,0,6,7,0,0,8,0,6,0,7,1,0,4,0,0,0,9,8,2,3,0,0,5,6,7,1,3,0,5,0,4,0,0,2,3,0,0,0,1,9,0,0,0,8,2,1,0,6,3,0,0,6,0,9,0,7,5,0,0,0,3,0,0,0,0,0,1,9,0,5,0,3,0,2,0,8,6]

let sablon1Megoldas = [1,2,3,4,5,6,7,8,9,8,5,6,9,7,1,3,4,2,4,7,9,8,2,3,1,6,5,6,7,1,3,9,5,2,4,8,4,2,3,6,8,7,1,9,5,5,9,8,2,1,4,6,3,7,8,6,2,9,1,7,5,3,4,7,3,4,5,6,8,2,1,9,9,5,1,3,4,2,7,8,6]

let sablon2 = [1,0,7,0,2,5,0,6,0,0,0,6,3,4,0,0,0,1,4,5,0,0,0,8,0,7,0,0,5,3,6,1,0,0,0,0,0,0,0,0,0,9,6,0,2,0,2,9,8,0,0,0,0,7,0,0,1,0,0,8,0,4,0,0,9,3,0,0,0,0,7,8,2,0,0,0,0,0,5,9,1]

let sablon2Megoldas = [1,3,7,9,2,5,8,6,4,9,8,6,3,4,7,5,2,1,4,5,2,1,6,8,9,7,3,7,5,3,6,1,2,4,8,9,8,1,4,7,3,9,6,5,2,6,2,9,8,4,5,3,1,7,5,7,1,2,9,8,3,4,6,4,9,3,1,6,5,2,7,8,2,8,6,7,3,4,5,9,1]

let sablon3 = [5,3,0,6,0,0,0,9,8,0,7,0,1,9,5,0,0,0,0,0,0,0,0,0,0,6,0,8,0,0,4,0,0,7,0,0,0,6,0,8,0,3,0,2,0,0,0,3,0,0,1,0,0,6,0,6,0,0,0,0,0,0,0,0,0,0,4,1,9,0,8,0,2,8,0,0,0,5,0,7,9]

let sablon3Megoldas = [5,3,4,6,7,2,1,9,8,6,7,8,1,9,5,3,4,2,9,1,2,3,4,8,5,6,7,8,5,9,4,2,6,7,1,3,7,6,1,8,5,3,9,2,4,4,2,3,7,9,1,8,5,6,9,6,1,2,8,7,3,4,5,5,3,7,4,1,9,2,8,6,2,8,4,6,3,5,1,7,9]

let sablonok = [sablon1, sablon2, sablon3]
let sablonMegoldasok = [sablon1Megoldas, sablon2Megoldas, sablon3Megoldas]

function Inditas(sablon, sablonMegoldas) {
    let nagy = 1
    let kis = 1
    for (let i = 0; i < sablon.length; i++) {
        document.getElementById(`Negyzet${nagy}_${kis}`).value = null
        document.getElementById(`Negyzet${nagy}_${kis}`).disabled = false
        document.getElementById(`Negyzet${nagy}_${kis}`).style.color = "black"
            if (sablon[i] != 0) {
                document.getElementById(`Negyzet${nagy}_${kis}`).value = sablon[i]
                document.getElementById(`Negyzet${nagy}_${kis}`).disabled = true
            }

            if (kis == 9) {
                kis = 1
                nagy++
            }
            else
            {kis++ }
    }

    document.getElementById("ellenorzes").onclick = function() {
        kis = 1
        nagy = 1
        let mezo
        let helyes = true
        for (let i = 0; i < sablonMegoldas.length; i++) {
            mezo = document.getElementById(`Negyzet${nagy}_${kis}`)
            if (sablon[i] == 0) {
                if (sablonMegoldas[i] == mezo.value) {
                    mezo.style.color = "lightgreen"
                }
                else{
                    mezo.style.color = "red"
                    helyes = false
                }
            }
    
        
                if (kis == 9) {
                    kis = 1
                    nagy++
                }
                else
                {kis++ }
        }
        if (helyes) {
            document.getElementById('gombok').innerHTML += "<p id='siker'>Gratulálunk, minden szám helyes!</p>"
        }
    
    }

}





document.getElementById("sablon1").onclick = function () {Inditas(sablon1,sablon1Megoldas)}
document.getElementById("sablon2").onclick = function () {Inditas(sablon2,sablon2Megoldas)}
document.getElementById("sablon3").onclick = function () {Inditas(sablon3,sablon3Megoldas)}
document.getElementById("veletlen").onclick = function () {let szam = Math.floor(Math.random()*sablonok.length); Inditas(sablonok[szam],sablonMegoldasok[szam])}