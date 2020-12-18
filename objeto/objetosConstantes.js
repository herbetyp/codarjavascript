const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: 'José'
})
pessoaConstante.nome = 'Paulo'
console.log(pessoaConstante.nome)
