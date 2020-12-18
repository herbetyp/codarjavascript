const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // get keys
console.log(Object.values(pessoa)) // get values
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writabl: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 12345

console.log(obj)
