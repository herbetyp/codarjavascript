const obj = {
    a: 1,
    b: 2,
    c: 3,

    soma() {
        return a + b + c
    }
}

// Parse de Obj para Json
console.log(JSON.stringify(obj))

// Parse de Json para Obj Inválido
/* console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) */

// Parse de Json para Obj Válido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

// Fomatos suportados
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [], "f": 1.5 }'))
