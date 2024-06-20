//Variáveis
let nome: string = 'Alexandre';

console.log(nome);

//Arrays
let strArray: string[] = ['teste', 'teste2'];
console.log(strArray);

//Objects
let objeto:{
    id: number,
    name: string,
    amount: number
};

objeto = {id:1, name:'bola', amount:43};
console.log(objeto);

//functions
function somarNumeros(a: number, b: number): number{
    return a + b
}

console.log(somarNumeros(2,2));
