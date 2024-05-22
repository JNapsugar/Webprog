let nyuszik = []
document.onclick = nyulraj
function nyulraj(event) {
    let nyuszi = document.createElement("img");
    nyuszi.src = "nyuszi.gif"
    console.log(nyuszi)


    nyuszi.style.width = "200px";
    nyuszi.style.filter = `brightness(${Math.random()})`;
    nyuszi.style.left = event.clientX -100 + "px"
    nyuszi.style.top = event.clientY-100 + "px"
    nyuszi.style.position = "absolute"


    document.body.appendChild(nyuszi)
    nyuszik.push(nyuszi)

}

setInterval(() => {
    mozgat();
}, 10);

function mozgat() {
    for (let i = 0; i < nyuszik.length; i++) {
        nyuszik[i].style.left = parseInt(nyuszik[i].style.left) + 3 +"px"
        if (parseInt(nyuszik[i].style.left)>innerWidth){
            document.body.removeChild(nyuszik[i])
            nyuszik.splice(i,1)
        }
    }
}