let cade = require("./cadena");

let esPalin = cade.nEsP("eye")
let numPal = cade.nP("Hola como estas");
let numLet = cade.nL("Hi wanna eat a salchitaco?")
let numVoc = cade.nV("Haber cuantas vocales tengo prro?")
let numCons = cade.nCon("Haber ahora las consonantes?")

console.log("La palabra es "+ esPalin)
console.log("El numero de palabras son "+ numPal)
console.log("El numero de letras son "+ numLet)
console.log("El numero de vocales son "+ numVoc)
console.log("El numero de consonantes son "+ numCons)