export{};

interface Animal1 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal1 {
    raca: string;
}

const cachorro: Cachorro ={
    nome: 'cachorro',
    idade: 3,
    porte: 'pequeno',
    raca: 'vira-lata'
};

console.log(cachorro);

//extensão com múltiplas interfaces
interface Cobra{
    nome:string;
}
interface Aranha{
    nome:string;
}

interface Animal extends Cobra, Aranha{
    idade: number;
}

const animal: Animal = {
    nome:'Rodolfo',
    idade: 12
}
console.log(animal);

// Omit

interface Funcionario{
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'>{ //reescreveu o tipo do id
    id:string;
    linguagem: string;
}

const desenvolvedor: Desenvolvedor = {
    id: '1',
    nome: 'Rodolfo',
    salario: 1200,
    linguagem: 'Typescript'
}

console.log(desenvolvedor);