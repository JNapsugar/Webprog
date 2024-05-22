let operator =["+","-","*", "=", "/"]
opi = 0
for (let i = 1; i <= 9; i++) {
    if (i%3==0) {
        document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="gomb${i}"><p class="szam" id="szam${i}">${i}</p></div>`
        document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="operatorgomb${opi}"><p class="szam" id="operatortext${opi}">${operator[opi]}</p></div><br>`
        opi++
    }
    else{
        document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="gomb${i}"><p class="szam" id="szam${i}">${i}</p></div>`
    }
}
document.getElementById("szamologep").innerHTML+=`<br><div class="gomb" id="gomb10"><p class="szam" id="szam13">0</p></div>`
document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="operatorgomb5"><p class="szam" id="operatortext5">Clear</p></div>`
document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="operatorgomb3"><p class="szam" id="operatortext3">=</p></div>`
document.getElementById("szamologep").innerHTML+=`<div class="gomb" id="operatorgomb4"><p class="szam" id="operatortext4">/</p></div>`


let szam1 = "";
let szam2 = "";
let eredmeny = 0;
let egyik = true;
let selected_operator = ""
let gombok = document.getElementsByClassName("gomb")
for (let i = 0; i < gombok.length ; i++) {
    gombok[i].onclick = function(){
        if (operator.includes(gombok[i].innerText)) {
            document.getElementById("kijelzotext").innerHTML = ""
            eredmeny=Number(szam1)
            egyik = !egyik
            if (gombok[i].innerText == "="){
                switch (selected_operator) {
                    case "+":
                        eredmeny += Number(szam2)
                        break;
                    case "-":
                        eredmeny -= Number(szam2)
                        break;
                    case "*":
                        eredmeny = Number(eredmeny*szam2)
                        break;
                    case "/":
                        eredmeny = Number(eredmeny/szam2)
                        break;
            }
            document.getElementById("kijelzotext").innerHTML = eredmeny       
            }
            else{
                selected_operator = gombok[i].innerText
            }
        }
        else if(gombok[i].innerText == "Clear")
        {
            document.getElementById("kijelzotext").innerHTML = ""
            szam1 = "";
            szam2 = "";
            eredmeny = 0;
            egyik = true;
        }
        else
        {
            if (egyik) {
                szam1+=gombok[i].innerText
                document.getElementById("kijelzotext").innerHTML = szam1
            }
            else{
                szam2+=gombok[i].innerText
                document.getElementById("kijelzotext").innerHTML = szam2
            }
        }
    }

}