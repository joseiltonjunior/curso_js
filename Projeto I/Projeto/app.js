var input = document.getElementById ("quantidade");
var botaoIncrementa = document.querySelector ("#btn-incrementa");

var botaoDecrementa = document.querySelector ("#btn-decrementa");

botaoDecrementa.addEventListener ('click', decrementa)
botaoIncrementa.addEventListener ('click', incrementa)




function incrementa () 
{
    input.value++;

    var item = botaoIncrementa.closest ('.item');
    var precoItem = item.querySelector ('.preco-item');
    var preco = Number (precoItem.textContent);

    var elementoTotal = document.querySelector ('#total');
    elementoTotal.textContent = preco + Number (elementoTotal.textContent);
}

function decrementa() 
{
    input.value--;
}