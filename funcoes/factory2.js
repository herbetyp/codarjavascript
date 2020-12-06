function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Tv 32', 1500))
console.log(criarProduto('Tv 40', 2000))
