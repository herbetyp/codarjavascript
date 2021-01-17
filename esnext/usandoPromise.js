// Com promise...
const http = require('http')

const getTurma = (letra) => {
    return new Promise((resolve, reject) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
        http.get(url, resp => {
            let resultado = ''

            resp.on('data', dados => {
                resultado += dados
            })
            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(error => console.log(error.message))
