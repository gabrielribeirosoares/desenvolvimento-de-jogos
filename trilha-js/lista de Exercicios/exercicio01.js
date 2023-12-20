
const m1 = 9
const m2 = 7
const m3 = 7

media = (m1+m2+m3)/3
console.log(media.toFixed(2))

if (media <5) {
    console.log('Aluno reprovado')
} else if (media >=5 && media <=7) {
    console.log('Aluno em recuperação')

} else {
    console.log('Aluno aprovado')
}
