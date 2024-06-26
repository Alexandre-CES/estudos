//generic constraints
export{};

interface Pessoa{
    nome:string;
    idade:number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[]{
    return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
    {nome:'Nome1', idade:1},
    {nome:'Nome2', idade:2},
    {nome:'Nome3', idade:3},
    {nome:'Nome4', idade:4},
    {nome:'Nome5', idade:5},
    {nome:'Nome6', idade:6}
];

const pessoasComIdadeMaiorQue3 = obterPessoaIdadeMaiorQue(pessoas, 3);
console.log(pessoasComIdadeMaiorQue3);

//exemplo 2
function juntarObjetosErr<U,V>(objeto1: U, objeto2: V){
    return {
        ...objeto1,
        ...objeto2
    };
}

const pessoaErr = juntarObjetosErr(
    {nome: 'Alexandre', idade: 18},
    36 //executa mesmo estando errado
);

console.log(pessoaErr);


//exemplo 2 correto
function juntarObjetos<U extends object,V extends object>(objeto1: U, objeto2: V){
    return {
        ...objeto1,
        ...objeto2
    };
}

const pessoa = juntarObjetos(
    {nome: 'Alexandre', idade: 18},
    {email: 'email@email.com'}
    //36 -> agora tem erro
);

console.log(pessoa);

//exemplo3
function prop<T, K extends keyof T>(objeto: T, chave: K){
    return objeto[chave];
}

const pessoa1 = prop(
    {nome: 'Alexandre'}, 'nome'
);
console.log(pessoa1);