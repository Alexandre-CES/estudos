"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu ${distancia} metros.`);
    }
}
class Cachorro extends Animal {
    latir() {
        console.log('Au, au!');
    }
}
const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        return `Meu nome é ${this.nome} ${this.sobrenome}`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    retornarInfo() {
        return super.apresentarPessoa() + ` e sou ${this.funcao}`;
    }
}
const funcionario = new Funcionario('Alexandre', 'Cabral', 'Programador');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarInfo());
