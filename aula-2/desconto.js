var produto = "Notebook"
var preco = 1000
var desconto = 10

var precoComDesconto = preco * (1 - desconto / 100)

console.log(`O ${produto} custava R$ ${preco}, mas com o desconto de ${desconto}% vai custar R$ ${precoComDesconto}`)