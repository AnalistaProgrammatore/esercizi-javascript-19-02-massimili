/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
// calcolo del MCD col metodo iterativo
let primoNumero = 96
let secondoNumero = 57
let resto

function mcd(x, y) {
    do {
        resto = x % y
        x = y
        y = resto
    } while (resto > 0)
    return x
}
console.log("MCD trovato con metodo iterativo: " + mcd(primoNumero, secondoNumero))
// calcolo del MCD col metodo ricorsivo
function mcdRecursive(x, y) {
    resto = x % y
    if (resto === 0) {
        return y
    }
    else {
        x = y
        y = resto
        return mcdRecursive(x, y)
    }
}
console.log("MCD trovato con metodo ricorsivo: " + mcdRecursive(primoNumero, secondoNumero))