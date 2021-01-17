let promise = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Paulo'])
})

promise
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(console.log)
