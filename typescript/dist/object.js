"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objPessoa = {
    name: 'name',
    age: 54
};
console.log(objPessoa);
function onboarding01(funcionario) {
    return 'Seha bem-vindo ' + funcionario.name;
}
console.log(onboarding01({ name: 'Roberto' }));
function onboarding02(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ name: 'Rodolfo', funcao: 'Roberto' }));
function onboarding03(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ name: 'Rodolfo', funcao: 'Roberto', linguagem: 'Robson' }));
function onboarding04(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ name: 'Rodolfo', funcao: 'Roberto', linguagem: 'Robson' }));
function onboarding05(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding05({
    name: 'Rodolfo',
    funcao: 'Roberto',
    linguagem: 'Robson'
}));
const filho = {
    nome: 'Alexandre',
    sobrenome: 'Cabral',
    idade: 18
};
console.log(filho);
const usuario = {
    nome: 'alexandre',
    email: 'email@gmail.com'
};
const admin = {
    nome: 'alexandre',
    email: 'email@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
