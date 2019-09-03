function imc (altura, peso) {
    return peso / (altura * altura)
}

var pessoas = [
    {
        nome: 'junior',
        altura: 1.71,
        peso: 60
    },
    {
        nome: 'celia',
        altura: 1.66,
        peso: 65
    },
    {
        nome: 'raiza',
        altura: 1.55,
        peso: 63
    }
]

for (var pessoa of pessoas){
    var resultado = imc (pessoa.altura, pessoa.peso)

    console.log (pessoa.nome, resultado)
}