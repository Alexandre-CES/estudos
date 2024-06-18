//any

const numAny:any = 888;
const strAny:any = ['Nome'];

const result = numAny + strAny;

console.log(result);

//any inferido implicitamente
let frase;
frase = 'opa, tudo legal?';

//exemplo de uso
const formulario: {[campoFormulario: string]:any} = {
    nome: 'nome',
    sobrenome:'sobrenome',
    idade:18
};
console.log(formulario);

//unknown

//sem erro
let unkVar: unknown;

unkVar = true;
unkVar = 'unknown';
unkVar = 123;
unkVar = [];

console.log(unkVar);

/*
com erro

let unkVar1: unknown;
let unstring: string = unkVar1;
*/

// any x unknown

let varAny: any = 'teste';
let varUnk: unknown = 'teste';

console.log(varAny.trim());
//console.log(varUnk.trim()); Erro

if(typeof varUnk == 'string'){
    console.log(varUnk.trim());
}