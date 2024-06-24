"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirDados(pessoa) {
    return `
    Nome: ${pessoa.nome} 
    Sobrenome: ${pessoa.sobrenome}
    Idade:  ${pessoa.idade}`;
}
const alexandre = {
    nome: 'Alexandre',
    sobrenome: 'Cabral',
};
console.log(exibirDados(alexandre));
class Gato {
    constructor(nome, idade, vivo) {
        this.nome = nome;
        this.idade = idade;
        this.vivo = vivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}
const gato = new Gato('Miau', 1, true);
gato.comer('Rodolfo');
