//Lista vazia
let gastos = []

//Ação ao clicar o Botão
document.getElementById("btn-adicionar").addEventListener("click", function(){

//Pega os 3 valores colocados no Programa
descricao = document.getElementById("descricao").value
valor = document.getElementById("valor").value
categoria = document.getElementById("categoria").value

//Objeto para gastos
let gasto = {
    des: descricao,
    val: valor,
    cat: categoria
}

//Array de gastos
gastos.push(gasto)

//Lista com objetos já descritos
let item = document.createElement("li")
item.textContent = `${descricao} - R$ ${valor} (${categoria})`
document.getElementById("lista").appendChild(item)

//Soma todos os valores
let total = 0

for (let i = 0; i < gastos.length; i++){
    total = total + gastos[i].val
}

//Atualiza total no HTML
document.getElementById("total").textContent = total
})