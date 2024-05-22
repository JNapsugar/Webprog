let urhajok = []
let pontok = 0
let vesztes = false
let szint = 1


setInterval(() => {
    if (vesztes == false) {
        ujUrhajo();
    }
        
    }, (600-(szint*10)));
    
setInterval(() => {
    if (vesztes == false) {
        mozgat();
    } 
}, 10);


let db = 0;
function ujUrhajo(event) {
    let urhajo = document.createElement("img");
    urhajo.src = "urhajo.gif"

    urhajo.style.width = "200px";
    urhajo.style.top = Math.floor(Math.random() * (800) + 1) + "px"
    urhajo.style.left = 0 + "px"
    urhajo.style.position = "absolute"
    urhajo.style.filter ="hue-rotate("+ Math.floor(Math.random() * (360) + 1) + "deg)"
    urhajo.id = db   
    urhajo.setAttribute("onclick",`robban("${db}")`)
    document.body.appendChild(urhajo)
    urhajok.push(urhajo)
    db++
}



function mozgat() {
    for (let i = 0; i < urhajok.length; i++) {
        urhajok[i].style.left = parseInt(urhajok[i].style.left) + (3+(szint*0.5)) +"px"
        if (parseInt(urhajok[i].style.left)>innerWidth){
            document.body.removeChild(urhajok[i])
            urhajok.splice(i,1)
            if(pontok>0){
                pontok-=(2*szint)
                document.getElementById("pontok").innerHTML = pontok
                if(pontok<0){document.getElementById("pontok").innerHTML = 0}

                document.getElementById("pontok").style.color = "red"
                setTimeout(() => {
                    document.getElementById("pontok").style.color = "white"
                }, 200);
                
            }
            else{
                document.getElementById("vesztes").innerHTML = `<h1>Game Over</h1>
                                                                <button id="ujra">Újraindítás</button>`
                vesztes = true

                document.getElementById("ujra").onclick = function(){
                    for (let i = 0; i < urhajok.length; i++){
                        document.body.removeChild(urhajok[i])
                    }
                    pontok = 0
                    document.getElementById("pontok").innerHTML = pontok
                    szint = 1
                    document.getElementById("szint").innerHTML = pontok
                    urhajok = []
                    db = 0
                    vesztes = false
                    document.getElementById("vesztes").innerHTML = ``
                }
            }
            
        }
    }
}



function robban(id) {
    var robbanasSnd = new Audio("puff.mp3");
    robbanasSnd.play();
    document.getElementById(id).style.filter ="hue-rotate(0deg)"
    document.getElementById(id).setAttribute("src","robbanas.gif")
    document.getElementById("pontok").style.color = "lightgreen"
    setTimeout(() => {
        document.body.removeChild(document.getElementById(id))
    }, 100);
    setTimeout(() => {
        document.getElementById("pontok").style.color = "white"
    }, 200);
    pontok+=5
    document.getElementById("pontok").innerHTML = pontok 
    urhajok.splice(urhajok.indexOf(document.getElementById(id)),1)

    szint = Math.floor(pontok/20)+1
    document.getElementById("szint").innerHTML = szint
}



