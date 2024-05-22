    /* 1)
* Kérj be 2 számot a felhasználótól és mentsd el őket egy-egy változóba.
* Készíts egy új változót "hatvany" néven. Az első számot emeld a második szám hatványára, és mentsd el a hatvany változóba.
* Logold ki az osszeg változó értékét.
*/
document.getElementById('elso').onclick = function(){
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let hatvany = Math.pow(a,b)
    document.getElementById('eredmeny').innerHTML = hatvany
}


/* 2)
* Fűzd hozzá a " felhasználó!" stringet az uzenet változóban eltárolt értékhez és írd ki a felhasználónak!
*/
document.getElementById('masodik').onclick = function(){
    let uzenet = "Szia";
    uzenet+=" felhasználó!"
    document.getElementById('szia').innerHTML = uzenet
}


/* 3)
* Generálj véletlen számot 1-10 között a "szam" változóba.
* Conditional (3 operandusú) operátor segítségével írd ki a felhasználónak, hogy nagyobb-e vagy nem nagyobb, mint 5.
*/
document.getElementById('harmadik').onclick = function(){
    let szam = Math.floor(Math.random()*10);
    document.getElementById('randomszam').innerHTML = szam

    if (szam > 5) {
        document.getElementById('nagyobb').innerHTML = "A szám nagyobb mint 5"
    } else if (szam < 5){
        document.getElementById('nagyobb').innerHTML = "A szám kisebb mint 5"
    }
    else{
        document.getElementById('nagyobb').innerHTML = "A szám egyenlő 5-tel"
    }
}


/* 4)
 * Hozz létre egy 5 elemű tömböt. Logold ki a 3. elemét.
 */
document.getElementById('negyedik').onclick = function(){
    let tomb = [" ฅ^•ﻌ•^ฅ ", " /ᐠ - ˕ -マ Ⳋ ", " ᓚᘏᗢ ", " ≽^- ˕ -^≼ ", " ฅ/ᐠ. ̫ .ᐟ\ฅ "]
    document.getElementById('tomb').innerHTML = tomb
    document.getElementById('harmadikelem').innerHTML = tomb[2]
}


 /* 5)
 * Kérj be egy számot a felhasználótól és írd ki neki az abszolút értékét. Használj beépített függvényt!
 
 */
 document.getElementById('otodik').onclick = function(){
    let szam = Number(document.getElementById('szam').value)
    document.getElementById('abszolut').innerHTML = Math.abs(szam)

}