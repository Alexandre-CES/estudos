//get & set

//get
export {};

class Quadrado{
    private _altura:number = 6;
    private _largura:number = 12;

    get calcularQuadrado(){
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);

class Estudante{
    private _nome = 'Alexandre';
    private _semestre: number;
    private _curso:string;

    public get nome(){
        return this._nome
    }
}
const estudante = new Estudante();
const resultado = estudante.nome;
console.log(resultado)

//set
class Pessoa{
    nome:string;

    definirNome(nome:string){
        this.nome = nome;
    }
}
const pessoa = new Pessoa();
pessoa.definirNome('Alexandre');
console.log(pessoa.nome);


//os dois
class Estudante1{
    curso:string;

    constructor(curso:string){
        this.curso = curso;
    }

    public get cursos(){
        return this.curso;
    }

    public set cursos(setCurso:string){
        this.curso = setCurso;
    }
}
const estudante1 = new Estudante1('JavaScript');
estudante1.cursos = 'Typescript'; //set
console.log(estudante1.cursos); //get