function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Herbety')
p1.falar()

const p2 = new Pessoa('Araújo')
p2.falar()
