var comprarRefri = false
var comprarCerva = false
var comprarSuco = false

var convidado = {
    nome: 'Junior',
    idade: 17,
    bebeCerva: true,
    bebeRefri: true
}
if (convidado.bebeRefri) {
    comprarRefri = true
} else if (convidado.bebeCerva && convidado.idade >= 18) {
    comprarCerva = true
} else {
    comprarSuco = true
}


console.log(comprarCerva)