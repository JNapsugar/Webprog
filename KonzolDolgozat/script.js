/*
1.) Megkérdeziket a felhasználót, hogy hányszor dobjunk és hány
oldalú dobókockával.
Generáltok annyi dobást, és kiírjátok az eredményeket.
*/
console.log("1.")
let dobas = prompt("Adja meg hányszor szeretne dobni")
let kocka = prompt("Adja meg hány oldalú kockával szeretne dobni")
let dobasok = []
for (let i = 0; i < dobas; i++) {
    dobasok.push(Math.floor(Math.random() * (kocka - 1 + 1) + 1));
}

for (let i = 0; i < dobasok.length; i++) {
    console.log(dobasok[i]) 
}


/*
2.) Kérjétek be egy kör szükséges adatait,
írjátok ki a területét, kerületét!
A pí pontos értékét használjátok!
*/
let sugar = prompt("Adja meg a kör sugarát")
alert("A kör területe: " + Math.pow(sugar,2)*Math.PI)
alert("A kör kerülete: " + 2*sugar*Math.PI)

/*
3.) Kérjetek be 2 számot és írjátok ki
console-ba 1-100-ig az összes számot, ami
osztható mindkét bekért számmal!
*/
console.log("3.")
let a = prompt("Adja meg az első számot")
let b = prompt("Adja meg a második számot")
for (let i = 1; i <= 100; i++) {
    if (i%a == 0 && i%b == 0) {
        console.log(i)
    };
}

/*
4.) Kérjetek be a felhasználótól egy minimumot és egy maximumot.
Generáljatok 10 számot a 2 határérték között és mentsétek le egy tömbbe.
Írjátok ki a legnagyobb elemet! (lehet használni beépített függvényt)
*/
let min = prompt("Adja meg a minimumot")
let max = prompt("Adja meg a maximumot")
let szamok = []
for (let i = 0; i < 10; i++) {
    szamok.push(Math.floor(Math.random() * (max - min + 1) + min))
}
alert(Math.max(...szamok))

/*
5.) Kérj be egy számot a felhasználótól.
Tölts fel egy tömböt a megadott számig.
(pl ha a megadott szám 7, akkor a tömb [1,2,3,4,5,6,7] legyen!)
*/

let szam = prompt("Adjon meg egy számot")
let tomb = []
for (let i = 0; i < szam; i++) {
    tomb.push(i)
}
console.log(tomb)