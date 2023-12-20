peso = 80
altura = 1.80
imc = peso / (altura**2)
console.log(imc)

if (imc < 18.5)
    console.log('Você está abaixo do peso')
elif (18.5 <= imc < 25)
    console.log('Você está no peso ideal')
elif (25 <= imc < 30)
    console.log('Você está com sobrepeso')
elif (30 <= imc < 40)
    console.log('Você está com obesidade')
elif (imc > 40)
    console.log('Você está com obesidade mórbida')