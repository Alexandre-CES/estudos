export {};

interface Pessoa{
    readonly nome:string; //pode ser definido, não alterado
    sobrenome:string;
    idade?:number; //opcional
}
 
function exibirDados(pessoa:Pessoa) {
    return `
    Nome: ${pessoa.nome} 
    Sobrenome: ${pessoa.sobrenome}
    Idade:  ${pessoa.idade}`;
}

const alexandre:Pessoa ={
    nome: 'Alexandre',
    sobrenome: 'Cabral',
}
//alexandre.nome = 'Rodolfo'; -> erro
console.log(exibirDados(alexandre));

//implements Class
interface IAnimal{
    nome:string;
    idade:number;
    vivo:boolean;
    comer(tipoComida:string):void;
}

class Gato implements IAnimal {
    nome:string;
    idade:number;
    vivo:boolean;

    constructor(nome:string, idade:number, vivo:boolean) {
        this.nome = nome;
        this.idade = idade;
        this.vivo = vivo;
    }

    comer(tipoComida:string){
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}

const gato = new Gato('Miau', 1, true);
gato.comer('Rodolfo');

//interface vs alias type
interface Pessoa1{
    nome:string;
    sobrenome:string;
    idade:number;
}

type Pessoa2 = {
    nome:string;
    sobrenome:string;
    idade:number;
}

