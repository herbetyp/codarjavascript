// Escopo global
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)

// Escopo de funcao
function teste() {
    var local = 123
}

teste()
console.log(local)
