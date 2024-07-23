"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quadrado {
    constructor() {
        this._altura = 6;
        this._largura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
class Estudante {
    constructor() {
        this._nome = 'Alexandre';
    }
    get nome() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nome;
console.log(resultado);
class Pessoa {
    definirNome(nome) {
        this.nome = nome;
    }
}
const pessoa = new Pessoa();
pessoa.definirNome('Alexandre');
console.log(pessoa.nome);
class Estudante1 {
    constructor(curso) {
        this.curso = curso;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const estudante1 = new Estudante1('JavaScript');
estudante1.cursos = 'Typescript';
console.log(estudante1.cursos);
