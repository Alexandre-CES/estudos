"use strict";
const numAny = 888;
const strAny = ['Nome'];
const result = numAny + strAny;
console.log(result);
let frase;
frase = 'opa, tudo legal?';
const formulario = {
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 18
};
console.log(formulario);
let unkVar;
unkVar = true;
unkVar = 'unknown';
unkVar = 123;
unkVar = [];
console.log(unkVar);
let varAny = 'teste';
let varUnk = 'teste';
console.log(varAny.trim());
if (typeof varUnk == 'string') {
    console.log(varUnk.trim());
}
