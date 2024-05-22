
for (let i = 1; i <= 90; i++) {
    document.getElementById("szamok").innerHTML+= '<div class="szam" id="szam'+i+'"><p class="szamp">'+i+'</p></div>' 
    if (i%10 == 0) {
        document.getElementById("szamok").innerHTML+= '<br>'
    } 
    document.getElementById("szam" + i).setAttribute("onclick",`Valasztas("szam${i}",${i})`);
}

let sorsolt = []
for (let i = 0; i < 5; i++) {
    let szam = Math.floor(Math.random() * (90) + 1) 
    while (sorsolt.includes(szam)) {
        Math.floor(Math.random() * (90) + 1)
    }
    sorsolt[i] = szam; 
}
console.log(sorsolt)

let isClicked = false
let tippek = []
let clickedek = []
function Valasztas(szam, i) {
    clickedek[i-1]=!clickedek[i-1]
    if (clickedek[i-1] && tippek.length < 5){
        document.getElementById(szam).style.border = "2px white dotted"
        tippek.push(szam)
    }
    else if(!clickedek[i-1] && tippek.length != 5){
        document.getElementById(szam).style.border = "1px solid black"
        let index = tippek.indexOf(szam);
        let x = tippek.splice(index, 1);
    }
}



let talalatokdb = 0
document.getElementById("sorsolas").onclick = function () {
    document.getElementById("nagy").innerHTML = '<div class="konkretszamok" id="nyero"><h2>Nyerő számok</h2></div><br><div class="konkretszamok" id="valasztott"><h2>Választott számok</h2></div><p id="talalatokp">Találatok száma: <span id="talalatok"></span></p>'
    for (let i = 0; i < sorsolt.length; i++) {
        document.getElementById("nyero").innerHTML += '<div class="szam"><p class="szamp">'+sorsolt[i]+'</p></div>'
    }
    for (let i = 0; i < tippek.length; i++) {
        if (tippek[i].length == 5)
            document.getElementById("valasztott").innerHTML += '<div class="szam"><p class="szamp">'+tippek[i][4]+'</p></div>'
            if (sorsolt.includes(Number(tippek[i][4]))) {
                talalatokdb++
            }
        else
            document.getElementById("valasztott").innerHTML += '<div class="szam"><p class="szamp">'+tippek[i][4]+tippek[i][5]+'</p></div>'
            if (sorsolt.includes(Number(tippek[i][4]+tippek[i][5]))) {
                talalatokdb++
            }
    }
    document.getElementById("talalatok").innerHTML = talalatokdb
}