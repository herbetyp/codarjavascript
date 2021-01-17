// callback
setTimeout(() => {
    console.log('Executando callback1...')
    setTimeout(() => {
        console.log('Executando callback2...')
    }, 2000)
    setTimeout(() => {
        console.log('Executando callback3...')
    }, 2000)
}, 2000)

// promise
function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promisse...')
            resolve()
        }, tempo)        
    })
}

esperarPor()
    .then(esperarPor())
    .then(esperarPor())
