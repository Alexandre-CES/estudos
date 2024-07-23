"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(12 / 12 / 12));
class Funcionario1 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
class Funcionario2 {
    constructor(nome, codigo) {
        this.codigo = codigo;
        this.nome = nome;
    }
}
const func = new Funcionario2('Alexandre', 242);
func.nome = 'Teste';
console.log(func);
const iFuncionario = {
    codigo: 213,
    nome: 'Alexandre'
};
const iFuncionario1 = {
    codigo: 412,
    nome: 'sgfasf'
};
iFuncionario1.codigo = 1234;
iFuncionario1.nome = 'Alexandre';
