//readonly

export = {};

class Funcionario{
    readonly dataNascimento: Date;

    constructor(dataNascimento:Date){
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(12/12/12));
//funcionario.dataNascimento = new Date(14,12,1242); -> erro

class Funcionario1{
    constructor(readonly dataNascimento:Date){
        this.dataNascimento = dataNascimento;
    }
}

class Funcionario2{
    nome:string;
    readonly codigo:number;

    constructor(nome:string,codigo:number){
        this.codigo = codigo;
        this.nome = nome;
    }
}
const func = new Funcionario2('Alexandre',242);
func.nome = 'Teste';
//func.codigo = 214; erro
console.log(func);

interface IFuncionario{
    codigo:number;
    nome:string;
}

const iFuncionario: Readonly<IFuncionario> = {
    codigo: 213,
    nome: 'Alexandre'
}

/*iFuncionario.codigo = 12312;  //erro
iFuncionario.nome = 'asf';*/   //erro

const iFuncionario1: IFuncionario = {
    codigo: 412,
    nome: 'sgfasf'
}

iFuncionario1.codigo = 1234;
iFuncionario1.nome = 'Alexandre';