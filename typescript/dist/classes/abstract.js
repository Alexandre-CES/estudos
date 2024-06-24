"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNome() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirCheque() {
        return `${this.retornarNome} - Salario: ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const funcionario = new FuncionarioCLT('Alexandre', 'Cabral', 1400);
const funcionario1 = new FuncionarioPJ('Carlinhos', 'Roberto', 150, 160);
console.log(funcionario.emitirCheque());
console.log(funcionario1.emitirCheque());
class TesteBase {
    retornarInfo() {
        return `Valor: ${this.retornarValor()}`;
    }
}
class TesteSoma extends TesteBase {
    constructor(valor1, valor2) {
        super();
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    retornarValor() {
        return this.valor1 + this.valor2;
    }
}
class TesteMulti extends TesteBase {
    constructor(valor1, valor2) {
        super();
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    retornarValor() {
        return this.valor1 * this.valor2;
    }
}
const testeSoma = new TesteSoma(10, 20);
const testeMulti = new TesteMulti(10, 20);
console.log(testeSoma.retornarInfo(), testeMulti.retornarInfo());
