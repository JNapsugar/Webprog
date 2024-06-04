document.getElementById("FooldalNav").onclick = function () {
    document.getElementById("content").innerHTML = `
    <div id="szabalyok"></div>
        <div id="jatektabla">
            <div id="SudokuBtn" class="StartGomb"><p>Sudoku</p><img src="Sudoku.png"></div>
            <div id="AmobaBtn" class="StartGomb"><p>Amőba</p><img src="Amoba.png"></div>
            <a href="../Pokemon/Pokemon/index.html"><div id="PokemonBtn" class="StartGomb"><p>Pokemon TCG</p><img src="Pokemon.png"></div></a>
        </div>
        <div id="gombok"></div>`
        document.getElementById("SudokuNav").onclick = Sudoku
        document.getElementById("SudokuBtn").onclick = Sudoku
        document.getElementById("AmobaNav").onclick = Amoba
        document.getElementById("AmobaBtn").onclick = Amoba
} 

//#region Sudoku
document.getElementById("SudokuNav").onclick = Sudoku
document.getElementById("SudokuBtn").onclick = Sudoku
function Sudoku() {
    //#region Setup
    document.getElementById("szabalyok").innerHTML = `
        <h2>Szabályok</h2>
        <p>A játékmező egy 9x9-es négyzet, amely 3 cella szélességű kisebb négyzetekre van osztva.</p>
        <p>A játék célja a számok beírása 1-től 9-ig minden sorba, minden oszlopba és minden 3x3-as négyzetbe úgy, hogy mindegyik számjegy csak egyszer forduljon elő.</p>
        <img src="SudokuRules.png">`

    document.getElementById("gombok").innerHTML = `
        <h2>Táblák</h2>
        <button id="veletlen">Véletlen tábla</button><br>
        <button id="sablon1">1. Tábla</button><br>
        <button id="sablon2">2. Tábla</button><br>
        <button id="sablon3">3. Tábla</button><br>
        <button id="ellenorzes">Ellenőrzés</button>`

        document.getElementById("jatektabla").innerHTML = "";
        document.getElementById("jatektabla").style.border =  "5px solid black";

        for (let i = 1; i <= 9; i++) {
            document.getElementById("jatektabla").innerHTML += `<div class="NagyNegyzet" id="Nagy${i}"></div>`
            for (let j = 1; j <= 9; j++) {
                document.getElementById(`Nagy${i}`).innerHTML += `<input type="number" class="KisNegyzet NegyzetHover" id="Negyzet${i}_${j}" min="1" max="9" disabled>`
            }
        }
        
    //#endregion
    //#region Sablonok
    let sablon1 = [1,2,0,0,0,6,7,0,0,8,0,6,0,7,1,0,4,0,0,0,9,8,2,3,0,0,5,6,7,1,3,0,5,0,4,0,0,2,3,0,0,0,1,9,0,0,0,8,2,1,0,6,3,0,0,6,0,9,0,7,5,0,0,0,3,0,0,0,0,0,1,9,0,5,0,3,0,2,0,8,6]
    let sablon1Megoldas = [1,2,3,4,5,6,7,8,9,8,5,6,9,7,1,3,4,2,4,7,9,8,2,3,1,6,5,6,7,1,3,9,5,2,4,8,4,2,3,6,8,7,1,9,5,5,9,8,2,1,4,6,3,7,8,6,2,9,1,7,5,3,4,7,3,4,5,6,8,2,1,9,9,5,1,3,4,2,7,8,6]
    let sablon2 = [1,0,7,0,2,5,0,6,0,0,0,6,3,4,0,0,0,1,4,5,0,0,0,8,0,7,0,0,5,3,6,1,0,0,0,0,0,0,0,0,0,9,6,0,2,0,2,9,8,0,0,0,0,7,0,0,1,0,0,8,0,4,0,0,9,3,0,0,0,0,7,8,2,0,0,0,0,0,5,9,1]
    let sablon2Megoldas = [1,3,7,9,2,5,8,6,4,9,8,6,3,4,7,5,2,1,4,5,2,1,6,8,9,7,3,7,5,3,6,1,2,4,8,9,8,1,4,7,3,9,6,5,2,6,2,9,8,4,5,3,1,7,5,7,1,2,9,8,3,4,6,4,9,3,1,6,5,2,7,8,2,8,6,7,3,4,5,9,1]
    let sablon3 = [5,3,0,6,0,0,0,9,8,0,7,0,1,9,5,0,0,0,0,0,0,0,0,0,0,6,0,8,0,0,4,0,0,7,0,0,0,6,0,8,0,3,0,2,0,0,0,3,0,0,1,0,0,6,0,6,0,0,0,0,0,0,0,0,0,0,4,1,9,0,8,0,2,8,0,0,0,5,0,7,9]
    let sablon3Megoldas = [5,3,4,6,7,2,1,9,8,6,7,8,1,9,5,3,4,2,9,1,2,3,4,8,5,6,7,8,5,9,4,2,6,7,1,3,7,6,1,8,5,3,9,2,4,4,2,3,7,9,1,8,5,6,9,6,1,2,8,7,3,4,5,5,3,7,4,1,9,2,8,6,2,8,4,6,3,5,1,7,9]
    let sablonok = [sablon1, sablon2, sablon3]
    let sablonMegoldasok = [sablon1Megoldas, sablon2Megoldas, sablon3Megoldas]

    document.getElementById("sablon1").onclick = function () {Inditas(sablon1,sablon1Megoldas)}
    document.getElementById("sablon2").onclick = function () {Inditas(sablon2,sablon2Megoldas)}
    document.getElementById("sablon3").onclick = function () {Inditas(sablon3,sablon3Megoldas)}
    document.getElementById("veletlen").onclick = function () {let szam = Math.floor(Math.random()*sablonok.length); Inditas(sablonok[szam],sablonMegoldasok[szam])}

    //#endregion
    //#region  Játék
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
         //#region Ellenőrzés
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
                else{
                    kis++ 
                }
            }
            if (helyes) {
                document.getElementById('gombok').innerHTML += "<p id='siker'>Gratulálunk, minden szám helyes!</p>"
            }       
        }
//#endregion
    }
    //#endregion  
}
//#endregion

//#region Amőba
document.getElementById("AmobaNav").onclick = Amoba
document.getElementById("AmobaBtn").onclick = Amoba
function Amoba() {
    //#region Setup
    document.getElementById("szabalyok").innerHTML = `
        <h2>Szabályok</h2>
        <p>A játékot két játékos játsza négyzetrácsos hálón. A játékosok felváltva rajzolnak egy-egy jelet (fekete X és barna kör) a háló mezőire.</p>
        <p>A játék célja, hogy a játékos a saját jeléből hármat helyezzen egymás mellé bármilyen irányban (vizszintesen, függőlegesen vagy átlósan) illetve, hogy ebben megakadályozza az ellenfelét.</p>
        <img src="Amoba.png">`

    document.getElementById("gombok").innerHTML = `<p id="KovetkezoJatekos">X jön</p>`

    document.getElementById("jatektabla").innerHTML = "";
    document.getElementById("jatektabla").style.border =  "5px solid black";

    for (let i = 1; i <= 9; i++) {
        document.getElementById("jatektabla").innerHTML += `<div class="NagyNegyzet NegyzetHover" id="Nagy${i}"></div>`
    }    
    //#endregion


    //#region jatek
    let nagynegyzetek = document.getElementsByClassName("NagyNegyzet") 
    let round = 1
    Round(round)
    function Round(round) {
        if(round<=9){
            document.getElementById("gombok").innerHTML = `<p id="KovetkezoJatekos">${round%2 == 1? "X jön":"O jön"}</p>`
            let negyzetek = document.getElementsByClassName("NegyzetHover")         
            for (let i = 0; i < negyzetek.length; i++) {  
                if (negyzetek[i].innerHTML == "") {
                negyzetek[i].onclick = function() {
                    negyzetek[i].innerHTML= round%2 == 1? `<p class="xo">x</p>` : `<p class="xo">o</p>`;
                    negyzetek[i].classList.remove("NegyzetHover")

                    //#region Ellenorzes

                    let jatekos = round%2 == 1? `<p class="xo">x</p>` :`<p class="xo">o</p>`
                        if ((nagynegyzetek[0].innerHTML == jatekos && nagynegyzetek[1].innerHTML  == jatekos && nagynegyzetek[2].innerHTML  == jatekos)||
                            (nagynegyzetek[3].innerHTML == jatekos && nagynegyzetek[4].innerHTML  == jatekos && nagynegyzetek[5].innerHTML  == jatekos)||
                            (nagynegyzetek[6].innerHTML == jatekos && nagynegyzetek[7].innerHTML  == jatekos && nagynegyzetek[8].innerHTML  == jatekos)||
                            (nagynegyzetek[0].innerHTML == jatekos && nagynegyzetek[3].innerHTML  == jatekos && nagynegyzetek[6].innerHTML  == jatekos)||
                            (nagynegyzetek[1].innerHTML == jatekos && nagynegyzetek[4].innerHTML  == jatekos && nagynegyzetek[7].innerHTML  == jatekos)||
                            (nagynegyzetek[2].innerHTML == jatekos && nagynegyzetek[5].innerHTML  == jatekos && nagynegyzetek[8].innerHTML  == jatekos)||
                            (nagynegyzetek[0].innerHTML == jatekos && nagynegyzetek[4].innerHTML  == jatekos && nagynegyzetek[8].innerHTML  == jatekos)||
                            (nagynegyzetek[2].innerHTML == jatekos && nagynegyzetek[4].innerHTML  == jatekos && nagynegyzetek[6].innerHTML  == jatekos)){
                            document.getElementById("gombok").innerHTML = `<p id="KovetkezoJatekos">${round%2 == 1? "X nyert":"O nyert"}</p><button id="AmobaUjra">Újra</button>`
                            document.getElementById("AmobaUjra").onclick = Amoba
                            for (let j = 0; j < nagynegyzetek.length; j++) {
                                nagynegyzetek[j].classList.remove("NegyzetHover")}
                            }
                        else{
                            round++
                            Round(round)
                        }  
                        //#endregion
                    }
                }
            }

        }
        else{
            document.getElementById("gombok").innerHTML = `<p id="KovetkezoJatekos">Döntetlen</p><button id="AmobaUjra">Újra</button>`
            document.getElementById("AmobaUjra").onclick = Amoba
        }

    }
}




//#endregion