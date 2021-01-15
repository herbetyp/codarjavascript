// let e const
{
    var a = 2
    let b = 3
    const c = 4
    console.log(b)
    console.log(c)
}
console.log(a)

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Javascript'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {
    nome,
    idade
} = {
    nome: 'Ana',
    idade: 25
}
console.log(nome, idade)
