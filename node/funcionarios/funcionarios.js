const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getPais = (func) => func.pais === 'China'
const getGenero = (func) => func.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // Mulher chinesa com o menor salário
    console.log(funcionarios.filter(getPais).filter(getGenero).reduce(menorSalario))
})
