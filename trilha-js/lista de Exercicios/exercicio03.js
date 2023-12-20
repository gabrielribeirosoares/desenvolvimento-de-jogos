// condições:

// 1 - a vista no devito - 10% desconto
// 2- a vista no dinheiro ou PIX - 15% desconto
// 3 - em duas vezes, etiqueta sem juros
// acima de duas, preco etiqueta com juros 10%



const precoEtiqueta = 100;
const formaDePagamento = 4

if (formaDePagamento ===1 ) {
    console.log(precoEtiqueta - (precoEtiqueta*0.1))
} else if (formaDePagamento ===2) {
    console.log(precoEtiqueta - (precoEtiqueta*0.15))
} else if (formaDePagamento ===3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta*0.1))
}
