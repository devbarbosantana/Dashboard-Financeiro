//Lista vazia
let gastos = []

//Ação ao clicar o Botão
document.getElementById("btn-adicionar").addEventListener("click", function(){

//Pega os 3 valores colocados no Programa
descricao = document.getElementById("descricao").value
valor = Number(document.getElementById("valor").value)
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

//Variáveis das Categorias
let totalAlimentacao = 0
let totalTransporte = 0
let totalLazer = 0

//Soma todos os valores
let total = 0

//Percorre o Array
for (let i = 0; i < gastos.length; i++){
    total = total + gastos[i].val
    //Se a categoria for Alimentação soma a sua variável
    if(gastos[i].cat === "Alimentação"){
    totalAlimentacao = totalAlimentacao + gastos[i].val
    //Se a categoria for Transporte soma a sua variável
    } else if (gastos[i].cat === "Transporte"){
    totalTransporte = totalTransporte + gastos[i].val
    //Se a categoria for Lazer soma a sua variável
    } else if (gastos[i].cat === "Lazer"){
    totalLazer = totalLazer + gastos[i].val
    } 
}

//Atualiza total no HTML
document.getElementById("total").textContent = total

//Atualiza o Gráfico de Pizza
grafico.data.datasets[0].data = [totalAlimentacao, totalTransporte, totalLazer]
grafico.update()
})

// Gráfico de Pizza
let grafico = new Chart(document.getElementById("grafico"), {
    type: "pie",
    data: {
        labels: ["Alimentação", "Transporte", "Lazer"],
        datasets:[{
            data: [0, 0, 0]
        }]
    }
})