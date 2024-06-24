//abstract
export{};

abstract class Funcionario{
    constructor(private nome:string, private sobrenome:string){}

    abstract retornarSalario(): number;

    get retornarNome():string{
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirCheque():string{
        return `${this.retornarNome} - Salario: ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario{
    constructor(nome:string,sobrenome:string, private salario:number){
        super(nome,sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario{
    constructor(nome:string, sobrenome:string, private valorHora:number, private horasTrabalhadas:number){
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const funcionario = new FuncionarioCLT('Alexandre','Cabral',1400);
const funcionario1 = new FuncionarioPJ('Carlinhos','Roberto',150,160);

console.log(funcionario.emitirCheque());
console.log(funcionario1.emitirCheque());

//const funcionario = new Funcionario('Alexandre','Cabral'); -> erro

//pra ver se eu entendi direito
abstract class TesteBase{
    abstract retornarValor(): number;
    retornarInfo(){
        return `Valor: ${this.retornarValor()}`;
    }
}

class TesteSoma extends TesteBase{
    constructor(private valor1:number, private valor2:number){
        super();
    }
    retornarValor(): number {
        return this.valor1 + this.valor2;
    }
}

class TesteMulti extends TesteBase{
    constructor(private valor1:number, private valor2:number){super();}
    retornarValor(): number {
        return this.valor1 * this.valor2;
    }
}
const testeSoma = new TesteSoma(10,20); const testeMulti = new TesteMulti(10,20);
console.log(testeSoma.retornarInfo(), testeMulti.retornarInfo()); 