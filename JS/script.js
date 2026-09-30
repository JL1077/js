const preco = 50
const quantidade = 10
const subtotal = preco * quantidade
const valorMinimo = 67
const temDesconto = subtotal>valorMinimo

console.log(subtotal)
console.log(valorMinimo)

const cidadeCliente = "A"
const cidadeLoja = "B"


const temFrete = temDesconto && cidadeCliente == cidadeLoja
const  mensagem =`
preço: ${preco}
quantidadw: ${quantidade}
subtotal: ${subtotal}
valor mínimo para desconto: ${valorMinimo}
desconto aplicado? ${temDesconto ? "sim" : "não"}
frete grátis: ${temFrete}`
console.log(mensagem)


