/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
let n = 30
const serie = [0, 1]
let somma
function fibonacci(x) {
    if (x === n) {
        return
    }
    else {
        somma = serie[x - 1] + serie[x - 2]
        serie.push(somma)
        return fibonacci(x + 1)
    }
}
fibonacci(2)
console.log(serie)