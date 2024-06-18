"use strict";
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
