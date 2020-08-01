const nome = 'João'

const concatenacao = 'Olá ' + nome + '!'

const templateString = `Olá ${nome}!`

console.log(concatenacao, templateString)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidade')}!`)
