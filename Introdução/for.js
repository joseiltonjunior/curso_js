var convidados = [
    {
        nome: 'Junior',
        idade: 20,
        bebeRefri: false,
        bebeCerva: false
    },
    {
        nome: 'Pedro',
        idade: 17,
        bebeRefri: true,
        bebeCerva: false
    },
    {
        nome: 'Manu',
        idade: 23,
        bebeRefri: true,
        bebeCerva: true
    }
]

var comprarCerva = false

console.log (convidados.length)

for (var i = 0; i < convidados.length; i++) {
    console.log(convidados[i].nome, convidados [i].bebeCerva)
    if (convidados[i].bebeCerva) {
        comprarCerva = true
        break
    }
}

console.log (comprarCerva)