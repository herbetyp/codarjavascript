const filhas = ['Valeska', 'Cibalena']
const filhos = ['Washington', 'Paulo']

const todos = filhos.concat(filhos, 'João')
console.log(todos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [
    [6, 7]
]))
