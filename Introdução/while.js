var convidados = [
    {
        nome: 'Junior',
        idade: 20,
        bebeRefri: false,
        bebeCerva: true
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
var i = 0

while (i < convidados.length) {
    console.log(convidados[i].nome, convidados [i].bebeCerva)
    if (convidados[i].bebeCerva) {
        comprarCerva = true
        break
    }
    i++
}

console.log (comprarCerva)