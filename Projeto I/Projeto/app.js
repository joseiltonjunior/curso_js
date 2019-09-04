var input = document.getElementById("quantidade");
var botaoIncrementa = document.querySelector("#btn-incrementa");

var botaoDecrementa = document.querySelector("#btn-decrementa");

botaoDecrementa.addEventListener('click', decrementa)
botaoIncrementa.addEventListener('click', incrementa)

function incrementa ()
{
    input.value++;
}

function decrementa ()
{
    input.value--;
}