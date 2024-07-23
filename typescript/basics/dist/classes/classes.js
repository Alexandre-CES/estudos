"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Alexandre', 'Cabral');
console.log(typeof pessoa.nomeCompleto, ': ', pessoa.nomeCompleto());
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 85436;
estudante.nomeEstudante = 'Robson';
console.log('Código: ' + estudante.codigoEstudante + ' Nome: ' + estudante.nomeEstudante);
class Estudante_1 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}
const estudante_1 = new Estudante_1(124, 'Robson');
console.log(`Código: ${estudante_1.codigoEstudante} Nome: ${estudante_1.nomeEstudante}`);
class Estudante_pvd {
    constructor(codigo, nome, idade) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }
    retornarDados() {
        return `Cod: ${this.codigo} - Nome: ${this.nome} - Idade: ${this.idade}`;
    }
}
const estudante_pvd = new Estudante_pvd(3221, 'Alexandre', 18);
console.log(estudante_pvd.retornarDados());
class Estudante_ptd {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}
class Pessoa_ptd extends Estudante_ptd {
    constructor(codigo, nome, curso) {
        super(codigo, nome);
        this.curso = curso;
    }
    retornarDados() {
        return `Cod: ${this.codigo} - Nome: ${this.nome} - Curso: ${this.curso}`;
    }
}
const estudante_ptd = new Pessoa_ptd(979, 'Alexandre', 'typescript');
console.log(estudante_ptd.retornarDados());
