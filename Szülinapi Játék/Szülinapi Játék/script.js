let lufik = []
let pontok = 0
let vege = false
const lassu = 500
const gyors = 800

setInterval(() => {
    if (!vege) {
        ujLufi("lassu");

        setTimeout(() => {
            ujLufi("gyors");
        }, gyors);
    }     
}, lassu);
    
setInterval(() => {
    if (!vege) {
        mozgat();
    } 
}, 10);


let db = 0;
function ujLufi(tipus, event) {
    let lufi = document.createElement("img");

    // if (tipus == "lassu") {
    //     lufi.src = "green-balloon.gif"
    //     lufi.style.width = "100px";
    // }
    // else
    // {
    //     lufi.src = "purple-balloon.gif"
    //     lufi.style.width = "120px";
    // }

    lufi.src = (tipus == "lassu") ? "green-balloon.gif" : "purple-balloon.gif"
    lufi.style.width = (tipus == "lassu") ? "100px" : "120px"

    lufi.style.bottom = -300 + "px"
    lufi.style.left = Math.floor(Math.random() * (document.body.clientWidth) + 1) + "px"
    lufi.style.position = "absolute"
    lufi.style.zIndex = 1;
    lufi.id = db 
    lufi.addEventListener("click",function() {
        pukkanas(this.id)
    })
    document.body.appendChild(lufi)
    lufik.push(lufi)
    db++

}


function mozgat() {
    for (let i = 0; i < lufik.length; i++) {
        if (lufik[i].id%2==0) {
            lufik[i].style.bottom = parseInt(lufik[i].style.bottom) + 2 +"px"
        }
        else{
            lufik[i].style.bottom = parseInt(lufik[i].style.bottom) + 5 +"px"
        }
        if (parseInt(lufik[i].style.bottom)>innerHeight){
            document.body.removeChild(lufik[i])
            lufik.splice(i,1)
            if(pontok>0){
                pontok--
                document.getElementById("pontok").innerHTML = pontok
                document.getElementById("pontok").style.color = "darkred"
                setTimeout(() => {
                    document.getElementById("pontok").style.color = "white"
                }, 200);
            }
        }
    }
}             

function pukkanas(id) {
    let robbanasSnd = new Audio("pukkanas.mp3");
    robbanasSnd.play();
    document.getElementById(id).style.width ="300px"
    document.getElementById(id).style.transform ="translateX(-100px)"
    document.getElementById(id).setAttribute("src","pukkanas.gif")
    document.getElementById("pontok").style.color = "lightgreen"
    setTimeout(() => {
        document.body.removeChild(document.getElementById(id))
    }, 100);
    setTimeout(() => {
        document.getElementById("pontok").style.color = "white"
    }, 200);
    if (id%2==0) {
        pontok++;
    }
    else{
        pontok+=2;
    }
    document.getElementById("pontok").innerHTML = pontok 
    lufik.splice(lufik.indexOf(document.getElementById(id)),1)

    if (pontok >= 20) {
        vege = true
        document.getElementById("vege").innerHTML = `<h1>Boldog szülinapot!</h1>
                                                        <button id="ujra">Újra</button>`

        document.getElementById("ujra").onclick = function(){
            for (let i = 0; i < lufik.length; i++){
                document.body.removeChild(lufik[i])
            }
            pontok = 0
            document.getElementById("pontok").innerHTML = pontok
            lufik = []
            db = 0
            vege = false
            document.getElementById("vege").innerHTML = ``
        }
         
    }
}

alert(("b"+"a"+ +"b"+"a").toLowerCase())