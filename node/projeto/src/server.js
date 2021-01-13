const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const dataBase = require('./db')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/produtos', (req, resp, next) => {
    resp.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    resp.send(produto)
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    resp.send(produto)
})

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = dataBase.excludeProduto(req.params.id)
    resp.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})
