// Armazenando uma função em uma variavel
const imprimieSoma = function (num1, num2) {
    console.log(num1 + num2)
}

imprimieSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (num1, num2) => {
    return num1 + num2
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (num1, num2) => num1 - num2

console.log(subtracao(5, 3))

// Apenas um parametro
const imprimirTexto = texto => console.log(texto)
imprimirTexto('JavaScript')
