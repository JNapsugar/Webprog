let dobasSzam = 0;
for (let i = 2; i < 31; i++) {
    document.getElementById("szamok").innerHTML+=`<li  class="page-item" id="szam${i}"><a href="#" class="page-link">${i}</a></li>`
    
    document.getElementById(`szam${i}`).onclick = function() { 
        dobasSzam = this.id
        console.log(dobasSzam)
    } 
}


for (let i = 2; i < 31; i++) {
    document.getElementById(`szam${i}`).onclick = function() { 
        dobasSzam = parseInt(this.innerText)

    } 
    
}

let szinek = ["#cddafd","#dfe7fd","#cfbaf0","#bee1e6","#e2ece9"]
document.getElementById("generalas").onclick=function() {
    document.getElementById("kockak").innerHTML=""
    let random
    let dobasok=[]
    for (let i = 0; i < dobasSzam; i++) {
        random = Math.floor(Math.random() * (6) + 1)
        dobasok.push(random)
        let szin = szinek[Math.floor(Math.random() * (4 + 1))]
        document.getElementById("kockak").innerHTML+=`<img src="kockak/${random}.png" class="kocka" style="background-color:${szin}">`
    }
   
    document.getElementById("atlag").innerText = Atlag(dobasok).toString().substring(0,4)
    document.getElementById("leggyakoribb").innerText = Leggyakoribb(dobasok)
    document.getElementById("atlagElteres").innerText = AtlagElteres(dobasok).toString().substring(0,4)
    document.getElementById("szoras").innerText = "ฅ^•ﻌ•^ฅ"

}

function Atlag(dobasok) {
    let ossz = 0
    for (let i = 0; i < dobasok.length; i++) {
        ossz+=dobasok[i]
    }
    return ossz/dobasok.length
}

function Leggyakoribb(dobasok) {
    let DobasSzamok = [0,0,0,0,0,0,0]
    for (let i = 0; i < dobasok.length; i++) {
        DobasSzamok[dobasok[i]]++
    } 
    return DobasSzamok.indexOf(Math.max(...DobasSzamok))
}

function AtlagElteres(dobasok) {
    let atlag = Atlag(dobasok)
    let elteresek = []
    for (let i = 0; i < dobasok.length; i++) {
        elteresek.push(Math.abs(atlag-dobasok[i]))
    }
    return Atlag(elteresek)
}