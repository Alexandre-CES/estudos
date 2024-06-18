//object

const objPessoa = {
    name:'name',
    age: 54
};
console.log(objPessoa);

//object como parâmetros de função
function onboarding01(funcionario: {name: string}){
    return 'Seha bem-vindo ' + funcionario.name;
}
console.log(onboarding01({name: 'Roberto'}));

//object nomeado
interface Pessoa {
    name: string;
    funcao: string;
}
function onboarding02(pessoa: Pessoa){
    return(
        'Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        '.'
    );
}
console.log(onboarding02({name: 'Rodolfo', funcao:'Roberto'}));

//object como type alias
type Pessoa1 = {
    name:string;
    funcao: string;
    linguagem: string;
}
function onboarding03(pessoa: Pessoa1){
    return(
        'Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.'
    );
}
console.log(onboarding03({name: 'Rodolfo', funcao:'Roberto', linguagem:'Robson'}));

//optional object
interface Pessoa2{
    name:string;
    funcao:string;
    linguagem:string;
    email?:string; //opcional
}
function onboarding04(pessoa: Pessoa2){
    return(
        'Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.'
    );
}
console.log(onboarding04({name: 'Rodolfo', funcao:'Roberto', linguagem:'Robson'}));

//propriedade readonly
interface Pessoa3{
    name:string;
    funcao:string;
    readonly linguagem:string;
}
function onboarding05(pessoa: Pessoa3){
    return(
        'Seja bem-vindo ' +
        pessoa.name +
        '! ' +
        'sua função será ' +
        pessoa.funcao +
        ' e você trabalhará com ' +
        pessoa.linguagem +
        '.'
    );
}
console.log(onboarding05({
    name: 'Rodolfo', 
    funcao:'Roberto', 
    linguagem:'Robson'
}));