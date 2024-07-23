export {};

class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome:string,
        private sobrenome:string,
        private titulo: string
    ){
        Funcionario.contratacoes++;
    }
}
const funcionario = new Funcionario('Alexandre','Cabral','Programador');
const funcionario1 = new Funcionario('Alexandre','Cabral','Programador');
console.log(Funcionario.contratacoes);

//metodos estáticos
class Funcionario_1 {
    private static contratacoes = 0;

    constructor(
        private nome:string,
        private sobrenome:string,
        private titulo: string
    ){
        Funcionario_1.contratacoes++;
    }

    public static retornarContratacoes(){
        return Funcionario_1.contratacoes;
    }
}
const funcionario_0 = new Funcionario_1('Alexandre','Cabral','Programador');
const funcionario_1 = new Funcionario_1('Alexandre','Cabral','Programador');

console.log(Funcionario_1.retornarContratacoes());

//propriedades estáticas
type Raca = 'Splitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro{
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor(nome:string, idade:number, racas:Raca[]){
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }

    public exibirInformacao(): void{
        console.log(`O cachorro ${this.nome} tem ${this.idade}`);
    }
}

const cachorro_1 = new Cachorro('Sammy',6,['Yorkshire']);
const cachorro_2 = new Cachorro('Cenoura',12,['Poodle']);

//pra eu ver se entendi
class Teste{
    private static quantidade:number = 0;
    constructor(){
        Teste.quantidade++;
    }
    printValue(){
        console.log(Teste.quantidade);
    }
}
const teste1 = new Teste();
const teste2 = new Teste();
teste1.printValue();