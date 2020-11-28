function aprovadoReprovado(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

aprovadoReprovado(8.1)
aprovadoReprovado(6.5)


function verdadeiroFalso(valor) {
    if (valor) {
        console.log(`É verdade ${valor}`)
    }
}

verdadeiroFalso()
verdadeiroFalso(null)
verdadeiroFalso(undefined)
verdadeiroFalso(NaN)
verdadeiroFalso('')
verdadeiroFalso(0)
verdadeiroFalso(-1)
verdadeiroFalso(' ')
verdadeiroFalso('?')
verdadeiroFalso([])
verdadeiroFalso([1, 2])
verdadeiroFalso({})
