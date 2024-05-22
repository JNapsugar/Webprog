/* 1)
* Kérj be 2 számot a felhasználótól 
és mentsd el őket egy-egy változóba.
* Készíts egy új változót "osszeg" néven és assignment 
operátor segítségével kösd hozzá értékként az 
elsoSzam és masodikSzam változók összegét.
* Logold ki az osszeg változó értékét.
*/

function elso(){
    let elsoSzam = Number(document.getElementById("elsoSzam").value)
    let masodikSzam = Number(document.getElementById("masodikSzam").value)
    let osszeg = elsoSzam + masodikSzam
    document.getElementById("kiiras").innerHTML = osszeg
}


/* 2)
Kérd be a felhasználó vezetéknevét és keresztnevét
külön változókba.
Írd ki neki alertben, hogy Üdv X Y!
*/

function masodik(){
    let vezetek = document.getElementById("vezetek").value
    let kereszt = document.getElementById("kereszt").value
    document.getElementById("kiiras").innerHTML = "Üdv " + vezetek + " " +kereszt + "!"
}


/* 3)
- Kérj be egy számot egy "szam" változóba.
- Állíts elő egy boolean értéket 
a "szam" változóban eltárolt értéket vizsgálva:
- A boolean érték legyen true, ha a "szam" változó 
értéke páros volt és legyen false ha páratlan volt.
- Konzolba írasd ki a boolean-t.

ternary/conditional operátor!
(boolean ? any1 : any2) -> true esetén any1, false-nál any2 
*/

function harmadik(){
    let szam = Number(document.getElementById("szam").value)
    let paros = (szam%2==0 ? true : false)
    document.getElementById("kiiras").innerHTML =  paros
}


/* 4)
Növeld operátorokkal a szam2-t (NE értékadóval), hogy true legyen
az alábbi console.log kiírás
*/
function negyedik(){
    let szam2 = 11;
    let target = 20;
    while(szam2 <= target)
        szam2++
       
    document.getElementById("kiiras").innerHTML =  szam2 > target
}



/* 5) Kérj be egy számot!
Írd ki a négyzetgyökét!
*/
function otodik(){
    let szam3 = Number(document.getElementById("szam").value)
    document.getElementById("kiiras").innerHTML =  Math.sqrt(szam3)
}



/* 6) Kérd be egy háromszög szükséges adatait!
Írd ki a területet!
*/
function hatodik(){
    let a = Number(document.getElementById("a").value)
    let m = Number(document.getElementById("m").value)
    document.getElementById("kiiras").innerHTML =  (a*m)/2
}


function Hover(id){
    document.getElementById("szoveg").style.border = 'dashed 0.3rem rgb(215, 195, 247)';
    document.getElementById("szoveg").style.backgroundColor = 'rgb(231, 236, 255)';
    document.getElementById("cuccok").style.opacity = 0;
    switch (id) {
        case "elso":
            document.getElementById("szoveg").innerHTML = "Kérj be 2 számot a felhasználótól és mentsd el őket egy-egy változóba. <br>Készíts egy új változót 'osszeg' néven és assignment operátor segítségével kösd hozzá értékként az elsoSzam és masodikSzam változók összegét. <br>Logold ki az osszeg változó értékét."
            break;
    
        case "masodik":
            document.getElementById("szoveg").innerHTML = 'Kérd be a felhasználó vezetéknevét és keresztnevét külön változókba. <br>Írd ki neki alertben, hogy Üdv X Y!'
            break;
        case "harmadik":
            document.getElementById("szoveg").innerHTML = '- Kérj be egy számot egy "szam" változóba.<br>- Állíts elő egy boolean értéket a "szam" változóban eltárolt értéket vizsgálva: <br>- A boolean érték legyen true, ha a "szam" változó értéke páros volt és legyen false ha páratlan volt.- <br>Konzolba írasd ki a boolean-t.'
            break;
        case "negyedik":
            document.getElementById("szoveg").innerHTML = 'Növeld operátorokkal a szam2-t (NE értékadóval), hogy true legyen az alábbi console.log kiírás'
            break;
        case "otodik":
            document.getElementById("szoveg").innerHTML = 'Kérj be egy számot! Írd ki a négyzetgyökét!'
            break;
        case "hatodik":
            document.getElementById("szoveg").innerHTML = 'Kérd be egy háromszög szükséges adatait! Írd ki a területet!'
            break;
    }
}


function Onclick(id){
    document.getElementById("szoveg").style.border = 'dashed 0.3rem rgb(215, 195, 247)';
    document.getElementById("cuccok").style.border = 'dashed 0.3rem rgb(215, 195, 247)';
    document.getElementById("szoveg").style.backgroundColor = 'rgb(231, 236, 255)';
    document.getElementById("cuccok").style.backgroundColor = 'rgb(231, 236, 255)';
    document.getElementById("cuccok").style.opacity = 1;

    switch (id) {
        case "elso":
            document.getElementById("szoveg").innerHTML = "Kérj be 2 számot a felhasználótól és mentsd el őket egy-egy változóba. <br>Készíts egy új változót 'osszeg' néven és assignment operátor segítségével kösd hozzá értékként az elsoSzam és masodikSzam változók összegét. <br>Logold ki az osszeg változó értékét."
            document.getElementById("cuccok").innerHTML = '<p><label>Adjon meg egy számot</label><input type="number" name="elsoSzam" id="elsoSzam"></p><p><label>Adjon meg mégegy számot</label><input type="number" name="masodikSzam" id="masodikSzam"></p><p><button onclick="elso()" class="pici">Összeadás</button></p><p>Összeg: <span id="kiiras"></span></p>'
            break;
        case "masodik":
            document.getElementById("szoveg").innerHTML = 'Kérd be a felhasználó vezetéknevét és keresztnevét külön változókba. <br>Írd ki neki alertben, hogy Üdv X Y!'
            document.getElementById("cuccok").innerHTML = '<p><label>Adja meg a vezetéknevét</label><input type="text" name="vezetek" id="vezetek"></p><p><label>Adja meg a keresztnevét</label><input type="text" name="kereszt" id="kereszt"></p><p><button onclick="masodik()" class="pici">Kiírás</button></p><p><span id="kiiras"></span></p>'
            break;
        case "harmadik":
            document.getElementById("szoveg").innerHTML = '- Kérj be egy számot egy "szam" változóba.<br>- Állíts elő egy boolean értéket a "szam" változóban eltárolt értéket vizsgálva: <br>- A boolean érték legyen true, ha a "szam" változó értéke páros volt és legyen false ha páratlan volt.- <br>Konzolba írasd ki a boolean-t.'
            document.getElementById("cuccok").innerHTML = '<p><label>Adjon meg egy számot</label><input type="number" name="szam" id="szam"></p><p><button onclick="harmadik()" class="pici">Páros?</button></p><p><span id="kiiras"></span></p>'
            break;
        case "negyedik":
            document.getElementById("szoveg").innerHTML = 'Növeld operátorokkal a szam2-t (NE értékadóval), hogy true legyen az alábbi console.log kiírás'
            document.getElementById("cuccok").innerHTML = '<p><button onclick="negyedik()" class="pici">♥</button></p><p><span id="kiiras"></span></p>'
            break;
        case "otodik":
            document.getElementById("szoveg").innerHTML = 'Kérj be egy számot! Írd ki a négyzetgyökét!'
            document.getElementById("cuccok").innerHTML = '<p><label>Adjon meg egy számot</label><input type="number" name="szam" id="szam"></p><p><button onclick="otodik()" class="pici">Négyzetgyök</button></p>A négyzetgyöke: <span id="kiiras"></span></p>'
            break;
        case "hatodik":
            document.getElementById("szoveg").innerHTML = 'Kérd be egy háromszög szükséges adatait! Írd ki a területet!'
            document.getElementById("cuccok").innerHTML = '<p><label>Adjon meg egy háromszög oldalát</label><input type="number" name="a" id="a"></p><p><label>Adja meg a háromszög magasságát</label><input type="number" name="m" id="m"></p><p><button onclick="hatodik()" class="pici">Terület</button></p><p>A területe: <span id="kiiras"></span>cm</p>'
            break;
    }
}