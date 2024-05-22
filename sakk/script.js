document.body.onload = CreateCard()
let cardok = []

async function MyRequest(url, method, body=null) {
    let response = await fetch(url,{method:method, body:body})
    let adatok = await response.json()
    return adatok
}

async function CreateCard() {
    let adatok =  await MyRequest("https://chess.sulla.hu/chess","GET")
    for (let i = 0; i < cardok.length; i++) {
        document.body.removeChild(cardok[i])
    }
    cardok = []
    for (const adat of adatok) {
        let card = document.createElement("div")
        let cim = document.createElement("h1")
        let kep = document.createElement("img")
        let text = document.createElement("p")
        let link = document.createElement("a")
        card.appendChild(cim)
        card.appendChild(text)
        card.appendChild(link)
        card.appendChild(kep)
        card.style.float = "left"
        card.style.margin = "0.5rem"
        card.style.padding = "4rem"
        card.style.border = "2px solid"
        card.style.textAlign = "center"
        card.style.lineHeight = "2rem"
        card.style.backgroundColor= "lightgrey"
        card.style.borderRadius = "0.8rem";
        card.style.width = "20rem";
        kep.src = adat.image_url
        kep.style.borderRadius = "1rem"
        kep.style.height = "10rem"
        cim.innerText = `${adat.id}. ${adat.name}\n`
        text.innerText = `Születési éve:${adat.birth_date}\nNyert világbajnokságok:${adat.world_ch_won}`
        link.href = adat.profile_url
        link.innerText= "További információk\n"
        cardok.push(card)
        document.body.appendChild(card)
}   
}

document.getElementById("uj").onclick = async ()=> {
    
    let id = document.getElementById("id").value
    let nev = document.getElementById("nev").value
    let birth_date = document.getElementById("birthdate").value
    let world_ch_won = document.getElementById("worldch").value
    let profile_url = document.getElementById("profileurl").value
    let image_url = document.getElementById("imageurl").value

    let body = JSON.stringify({
        id: id,
        name: nev,
        birth_date: birth_date,
        world_ch_won: world_ch_won,   
        profile_url: profile_url,
        image_url: image_url,
    })

    let url = `https://chess.sulla.hu/chess`
    await MyRequest(url,"POST",body)
    CreateCard()
    alert("Sikeres felvétel")
}