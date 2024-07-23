"use strict";
function somarNumeros(num1, num2) {
    return num1 + num2;
}
console.log(somarNumeros(2, 2));
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('opa, falaê'));
const saudar1 = (mensagem) => {
    return mensagem;
};
console.log(saudar('Falaê'));
const saudar2 = new Function('mensagem', 'return "Falaê " + mensagem ');
console.log(saudar2('Povo'));
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome, 'Email..: ', email || '');
}
informarDadosPessoa(717312, 'Nome');
informarDadosPessoa(717312, 'Nome', 'email@gmail.com');
function descontoCompra(preco, desconto = 0) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100, 0.5));
function somarNumerosRest(...numeros) {
    let total = 0;
    numeros.forEach((numero) => { total += numero; });
    return total;
}
console.log(somarNumerosRest(16, 15));
const listarFrutas = (frase, ...frutas) => {
    return frase + ' ' + frutas.join(', ');
};
console.log(listarFrutas('Você deve ir na feita comprar ...: '), 'Maçã', 'Uva', 'Morango');
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoEstoque = new Produtos();
console.log('Produtos disponíveis no estoque...: ');
departamentoEstoque.exibirProdutos('Mouse', 'Monitor');
