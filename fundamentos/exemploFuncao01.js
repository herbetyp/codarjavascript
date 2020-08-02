// Funcao sem retorno
function imprimaSoma(num1, num2) {
    console.log(num1 + num2)
}

imprimaSoma(2, 3)
imprimaSoma(2)
imprimaSoma(2, 10, 5, 7, 8)
imprimaSoma()

// Funcao com retorno
function soma(num1, num2=1) {
    return num1 + num2
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
