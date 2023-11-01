const precoCombustivel = 5.99;
const gastoMedio = 1;
const distanciaPercorrida = 150;
const calculo = (distanciaPercorrida/gastoMedio)*precoCombustivel
console.log("Percorrendo a distância de " + distanciaPercorrida + " km o gasto total será de: R$ " + calculo.toFixed(2));