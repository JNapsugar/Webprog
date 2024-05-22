let reds = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
let blacks = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
vizszintes1 = [3,6,9,12,15,18,21,24,27,30,33,36]
vizszintes2 = [2,5,8,11,14,17,20,23,26,29,32,35]
vizszintes3 = [1,4,7,10,13,16,19,22,25,28,31,34]


for (let i = 1; i <40; i++) {  
    if (i<=36) {
        if (reds.includes(i)) {
            document.getElementsByClassName('container-first')[0].innerHTML +=`<div class="number red-item spot" id="number${i}">
                                                                            <div class="value" >${i}</div>
                                                                        </div>`
        }
        else{
            document.getElementsByClassName('container-first')[0].innerHTML +=`<div class="number black-item spot" id="number${i}">
                                                                            <div class="value" >${i}</div>
                                                                        </div>`
        } 
    }
    else{
        document.getElementsByClassName('container-first')[0].innerHTML +=`<div class="column-item spot" id="column${i}">
                                                                             <div class="value">2-1</div>
                                                                             </div>`
    }
}


let spots = document.getElementsByClassName("spot")
let bet = "0"
let  bet_type = "number"
for (let i = 0; i < spots.length; i++) {
    document.getElementById(spots[i].id).onclick = function(){
        //Kiszedi előzőt
        if (bet_type == "number") {
            if (reds.includes(bet)) {
                    document.getElementById("number"+bet).style.backgroundColor = 'red'  
                }
                else if (bet == 0){
                    document.getElementById("number"+bet).style.backgroundColor = 'green'  
                }
                else{
                    document.getElementById("number"+bet).style.backgroundColor = 'black' 
                }
        }
        else{
            document.getElementById(bet).style.backgroundColor = 'green' 
        }

        //Választ másik
        if (document.getElementById(spots[i].id).classList[0] == "number") {
            document.getElementById(spots[i].id).style.backgroundColor = 'blue'
                bet = document.getElementById(spots[i].id).innerText
                bet_type = "number"
        }
        else{
            document.getElementById(spots[i].id).style.backgroundColor = 'blue'
                 bet = spots[i].id
                 bet_type = document.getElementById(spots[i].id).classList[0]
        }
        console.log(bet)
        console.log(bet_type)  
    }

}




let sorsolt = 0;
document.getElementById("sorsolas_img").onclick = function () {
    if (reds.includes(sorsolt)) {
        document.getElementById("number"+sorsolt).style.backgroundColor = 'red'  
    }
    else if (sorsolt == 0){
        document.getElementById("number"+sorsolt).style.backgroundColor = 'green'  
    }
    else{
        document.getElementById("number"+sorsolt).style.backgroundColor = 'black' 
    }
    sorsolt = Math.floor(Math.random() * (36 - 0 + 1))
    document.getElementById("number"+sorsolt).style.backgroundColor = "gold"
    document.getElementById("sorsoltszam").innerHTML = sorsolt
    document.getElementById("sorsolas_img").classList.add("forgas")
    setTimeout(() => {
        document.getElementById("sorsolas_img").classList.remove("forgas")
    }, 1000);

    switch (bet_type) {
        case "number":
            if (bet == sorsolt) {
              document.getElementById("nyeremey").innerHTML = "az összes"  
            }
        break;
        case "column-item":
            
        break;
        case "doz-item":

        break;
        case "range":
            
        break;
        case "even-odd":
            
        break;
        case "color":
            
        break;
    }
}



