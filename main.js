// let deklarujemy zminną którą w dalszej części kodu możemy edytować
let wynik = null
let wynikZfunkcjiZparametrem = null
let wynikZdzielenia = null
let obwodTrojkata = null
// zminna stała. Która jeżli jest zadeklarowana 
// jako typ prosty ( string, number, bool, null lub undefinde) 
// nie można zminić w trakcie działania scryptu
const wynikZConsta = null
// semantyka tworzenia funkcji. 
// Słowo kluczowe function nasza nazwa funkcji,
// nawiast okrągłe a po nich nawiasy klamrowe
function dodawnieDwaDodwoch() {
    wynik = 2 + 2 
}
// semantyka tworzenia funkcji. 
// Słowo kluczowe function nasza nazwa funkcji,
// nawiast okrągłe, w nich wpisujemy parametry, 
// które będa reprezentować jakiś dane  a po nich nawiasy klamrowe
function dodawanieZparametrem(sum1, sum2, sum3) {
    wynikZfunkcjiZparametrem = sum1 + sum2 + sum3
}

// nazwa funkcji z nawiasami, jest jej wywołaniem
dodawnieDwaDodwoch()
// console.log(wynik)
dodawanieZparametrem("2", "2", null)

console.log(wynikZfunkcjiZparametrem)

function dzielenie(dzielna, dzielnik) {
    if(dzielnik > 1 || dzielnik < 0) {
        wynikZdzielenia = dzielna / dzielnik
    } else if(dzielnik === 1) {
        console.log("po kiego dzielisz przez jeden ")
    }  else if( dzielnik === dzielna) {
        wynikZdzielenia = 1
    } else {
        console.log( "nie dziel cholero przez zero")
    }
    //
}

dzielenie(10, -1)

console.log(wynikZdzielenia)




function trojkat(bokA, bokB, bokC) {
    if(bokA + bokB > bokC) {
        obwodTrojkata = bokA + bokB + bokC
    } else {
        console.log("nie ma trójkąta")
    }
}
trojkat(10, 5, 80)

console.log("obwodTrojkata", obwodTrojkata)

//    || znaczy lub 
//     && znaczy i 
//     =  do wartości z lewej strony przypisuje wartość z prawej 
//     ==   sprawdza czy warość jest równa
//     === sprawdza czy wartości i typ zminnej są równe - obie.
//     ! zaprzecza, zastępując jedn znak równa się 
//     np. != czy warości są różne lub !== czy warości i typ zminnej są różne
const dwa = 2
const dwaString = "2"

// dwa == dwaString => prawda
// dwa === dwaString => fałsz

function czyToSamo(item1, item2) {
    if(item1 === item2) {
        console.log(typeof item1)
        console.log(typeof item2)
        console.log("== sprawdza czy wartości są takie same")
    } else {
        console.log("=== sprawdza czy wartości i typ zmiennej są takie same.")
    }
}
czyToSamo(10, "10")



function data() {
    return new Date()
   
}
const dataZjavaScriptu = data()
console.log(dataZjavaScriptu)

function kolo(promien) {
    if(promien > 0) {
        return 2 * promien * 3.14
    } else {
        return "promień musi być większy od zera"
    }
}
const poleKoloOpromieniu50 = kolo(50)
console.log(poleKoloOpromieniu50)

const poleKoloOpromieniuMinus50 = kolo(-50)
console.log(poleKoloOpromieniuMinus50)

