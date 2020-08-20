function tratarErroELancar(error) {
    // throw new Error('ERROR...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.massage,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log('FINALLY')
    }
}

const obj = {
    nome: 'João'
}
imprimirNome(obj)
