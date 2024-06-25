//typeguards
export={};

//typeof
type alfanumerico = string | number;

const exibirTipo = (a: alfanumerico, b: alfanumerico) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }

    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }

    throw new Error('Argumentos inválidos! ambos devem ser numéricos ou string');
}   

console.log(exibirTipo(1,1));
console.log(exibirTipo('s','s'));
//console.log(exibirTipo('a',1));

//instanceof
class Carro{
    nome:string;
    marca:string;

    constructor(nome:string,marca:string){
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto{
    nome:string;
    ano:number;

    constructor(nome:string,ano:number){
        this.nome = nome;
        this.ano = ano;
    }
}

function detalhesVeiculo(veiculo: Carro | Moto): string{
    if(veiculo instanceof Carro){
        return`Carro: ${veiculo.nome} - ${veiculo.marca}`;
    }else if(veiculo instanceof Moto){
        return`Moto: ${veiculo.nome} - ${veiculo.ano}`;
    }
}

const carro = new Carro('Carro','Marca');
console.log(detalhesVeiculo(carro));

const moto = new Moto('Moto',2020);
console.log(detalhesVeiculo(moto));

// in
interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo:string
    corPeixe:string;

    constructor(grupo:string,corPeixe:string){
        this.grupo = 'peixe';
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal{
    grupo:string;
    corPassaro:string;

    constructor(grupo:string,corPassaro:string){
        this.grupo = grupo;
        this.corPassaro = corPassaro;
    }
}

function nadar(grupo:string){
    console.log(`${grupo} está nadando`);
}

function voar(grupo:string){
    console.log(`${grupo} está voando`);
}

function mover(animal: Animal){
    if('corPeixe' in animal){
        nadar((animal as Peixe).grupo);
    }else if('corPassaro' in animal){
        voar((animal as Passaro).grupo);
    }
}

const peixe = new Peixe('peixe','azul');
const passaro = new Passaro('passaro','branco'); 
mover(peixe);
mover(passaro);

//Meus exemplos e testes

//typeof
let varStr:string = 'teste';
let varNum:number = 123;
let varBool:boolean = true;
console.log(typeof(varStr), typeof(varNum), typeof(varBool));

//instanceof

class Pessoa{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
}
class Rodolfo{
    idade:number;
    constructor(idade:number){
        this.idade = idade;
    }
}

const responderInstancia = (sas:Pessoa | Rodolfo)=>{
    if(sas instanceof Pessoa){
        return sas.nome;
    }else if(sas instanceof Rodolfo){
        return sas.idade; 
    }
}
const pessoa = new Pessoa('Robson');
const rodolfo = new Rodolfo(45)
console.log(responderInstancia(pessoa)); 
console.log(responderInstancia(rodolfo));

//in
let objeto = {
    palavra:'sas',
}

if('palavra' in objeto){
    console.log('tem')
}