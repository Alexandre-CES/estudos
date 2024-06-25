"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valor = 'Opa, falaê';
console.log(valor.length);
const carro = 'carro';
const tamanhoString = carro.length;
console.log(tamanhoString);
function exibirPreco(preco, desconto, formato) {
    const precoDesconto = preco * (1 - desconto);
    return formato ? `R$${precoDesconto}` : precoDesconto;
}
const descontoFinal = exibirPreco(100, 0.05, false);
console.log(descontoFinal);
const humano = {
    idade: 36,
    idioma: 'Português'
};
