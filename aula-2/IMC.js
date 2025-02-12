//Calculadora de IMC
var peso = 80
var altura = 1.86

var imc = peso / (altura * altura)

console.log(`Seu IMC é ${imc.toFixed(2)}`)

if (imc < 18.5) {
	console.log("Abaixo do peso")
} else if (imc < 25) {
	console.log("Peso normal")
} else if (imc < 30) {
	console.log("Sobrepeso")
} else if (imc < 40) {
	console.log("Obesidade")
} else {
	console.log("Obesidade mórbida")
}