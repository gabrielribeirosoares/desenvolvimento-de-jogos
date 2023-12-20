const etanol = 3.50
const gasolina = 5.68

const distancia = 350
const consumo = 15
const tipoCombustivel = 'Gasolina';

const litrosPorQuilometro = (distancia / consumo)


if (tipoCombustivel === 'Etanol') {
    const viagem = etanol * litrosPorQuilometro
    console.log(viagem.toFixed(2));
} else {
    const viagem = gasolina * litrosPorQuilometro
    console.log(viagem.toFixed(2));
}
