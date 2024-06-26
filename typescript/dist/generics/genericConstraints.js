"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obterPessoaIdadeMaiorQue(pessoas, idade) {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}
const pessoas = [
    { nome: 'Nome1', idade: 1 },
    { nome: 'Nome2', idade: 2 },
    { nome: 'Nome3', idade: 3 },
    { nome: 'Nome4', idade: 4 },
    { nome: 'Nome5', idade: 5 },
    { nome: 'Nome6', idade: 6 }
];
const pessoasComIdadeMaiorQue3 = obterPessoaIdadeMaiorQue(pessoas, 3);
console.log(pessoasComIdadeMaiorQue3);
function juntarObjetosErr(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2
    };
}
const pessoaErr = juntarObjetosErr({ nome: 'Alexandre', idade: 18 }, 36);
console.log(pessoaErr);
function juntarObjetos(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2
    };
}
const pessoa = juntarObjetos({ nome: 'Alexandre', idade: 18 }, { email: 'email@email.com' });
console.log(pessoa);
function prop(objeto, chave) {
    return objeto[chave];
}
const pessoa1 = prop({ nome: 'Alexandre' }, 'nome');
console.log(pessoa1);
