// par nome/valor
const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Oi' // contexto léxico 2
    return saudacao
}

// Objetos são grupos de pares chave/valor
const cliente = {
    nome: 'João',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Pátria',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
