peso = 80
altura = 1.80
imc = peso / (altura**2)
console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log('Você está abaixo do peso')
}
else if (18.5 <= imc < 25) {
    console.log('Você está no peso ideal')
}
else if (25 <= imc < 30) {
    console.log('Você está com sobrepeso')
}
else if (30 <= imc < 40) {
    console.log('Você está com obesidade')
}
else if (imc > 40) {
    console.log('Você está com obesidade mórbida')}