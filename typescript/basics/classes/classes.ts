//classes
export{};

class Pessoa {
    //fields
    nome: string;
    sobrenome: string;

    //constructor
    constructor(nome:string, sobrenome:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //method
    nomeCompleto():string{
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Alexandre', 'Cabral');
console.log(typeof pessoa.nomeCompleto, ': ', pessoa.nomeCompleto());

//->exemplo 2

class Estudante{
    codigoEstudante: number;
    nomeEstudante: string;
}
    
//criar objeto ou instância
const estudante = new Estudante();

//Inicializar objeto
estudante.codigoEstudante = 85436;
estudante.nomeEstudante = 'Robson';

console.log('Código: ' + estudante.codigoEstudante + ' Nome: ' + estudante.nomeEstudante);

//->exemplo 3
class Estudante_1{
    codigoEstudante: number;
    nomeEstudante: string;

    constructor(codigoEstudante:number, nomeEstudante:string){
        this.codigoEstudante= codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

const estudante_1 = new Estudante_1(124,'Robson');
console.log(`Código: ${estudante_1.codigoEstudante} Nome: ${estudante_1.nomeEstudante}`);

// ==> ACCESS MODIFIERS

//-> puclic = todos os exemplos anteriores(default)

//-> private
class Estudante_pvd{
    codigo:number;
    nome:string;
    private idade:number; //

    constructor(codigo:number,nome:string,idade:number) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }

    retornarDados(){
        return `Cod: ${this.codigo} - Nome: ${this.nome} - Idade: ${this.idade}`;
    }
}

const estudante_pvd = new Estudante_pvd(3221,'Alexandre',18);
//console.log(estudante_pvd.idade); -> erro
console.log(estudante_pvd.retornarDados());

//-> protected
class Estudante_ptd{
    codigo: number;
    protected nome: string;

    constructor(codigo:number,nome:string){
        this.codigo = codigo;
        this.nome = nome;
    }
}

class Pessoa_ptd extends Estudante_ptd{
    private curso: string;

    constructor(codigo:number,nome:string,curso:string) {
        super(codigo,nome);
        this.curso = curso;
    }

    retornarDados(){
        return `Cod: ${this.codigo} - Nome: ${this.nome} - Curso: ${this.curso}`;
    }
}

const estudante_ptd = new Pessoa_ptd(979, 'Alexandre', 'typescript');
//console.log(estudante_ptd.nome); -> erro
console.log(estudante_ptd.retornarDados());