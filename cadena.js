var contador = 0;

function esPalindromo(cad) {
    const cadRevertida = cad.split("").reverse().join("")
  
    return cadRevertida === cad ? "Palindromo" : "No es palindromo"
  }

function numeroPalabras(cad){
    //return contador++ ? cad.length.split(" ") : "La cadena no tiene palabras"

  
    for(let i = 0; i < cad.length; i++){
        if(cad[i]==" "){
            contador++
        }
    }
    return contador + 1;
}
function numeroLetras(cad){
    return cad.length;
}
function numeroVocales(cad){
    return cad.replace(/[^aeiouAEIOU]/g, '').length;
}
function numeroConsonantes(cad){
    return cad.replace(/[b-df-hj-np-tv-z-B-DF-HJ-NP-TV-Z]/g, '').length;
}
module.exports.nEsP = esPalindromo;
module.exports.nP = numeroPalabras;
module.exports.nL = numeroLetras;
module.exports.nV = numeroVocales;
module.exports.nCon = numeroConsonantes;
