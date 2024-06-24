"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
const funcionario = new Funcionario('Alexandre', 'Cabral', 'Programador');
const funcionario1 = new Funcionario('Alexandre', 'Cabral', 'Programador');
console.log(Funcionario.contratacoes);
class Funcionario_1 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario_1.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario_1.contratacoes;
    }
}
Funcionario_1.contratacoes = 0;
const funcionario_0 = new Funcionario_1('Alexandre', 'Cabral', 'Programador');
const funcionario_1 = new Funcionario_1('Alexandre', 'Cabral', 'Programador');
console.log(Funcionario_1.retornarContratacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}`);
    }
}
Cachorro.QTD_CACHORRO_VENDIDO = 0;
const cachorro_1 = new Cachorro('Sammy', 6, ['Yorkshire']);
const cachorro_2 = new Cachorro('Cenoura', 12, ['Poodle']);
class Teste {
    constructor() {
        Teste.quantidade++;
    }
    printValue() {
        console.log(Teste.quantidade);
    }
}
Teste.quantidade = 0;
const teste1 = new Teste();
const teste2 = new Teste();
teste1.printValue();
