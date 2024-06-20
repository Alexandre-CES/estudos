//functions

function somarNumeros(num1: number, num2:number):number{
    return num1 + num2;
}

console.log(somarNumeros(2,2));

//Função anônima
const saudar = function(mensagem:string):string{
    return mensagem;
}
console.log(saudar('opa, falaê'));

//arrow function
const saudar1 = (mensagem:string) =>{
    return mensagem;
}
console.log(saudar('Falaê'));

//function constructions
const saudar2 = new Function('mensagem', 'return "Falaê " + mensagem ');
console.log(saudar2('Povo'));

//optional parameter ?
function informarDadosPessoa(idPessoa: number, nome:string, email?: string){
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ',nome, 'Email..: ', email || '');
}
informarDadosPessoa(717312,'Nome');
informarDadosPessoa(717312,'Nome', 'email@gmail.com');

//default parameters p:t = dp
function descontoCompra(preco:number, desconto:number = 0): number{
    return preco * (1-desconto);
}
console.log(descontoCompra(100, 0.5));

// => REST PARAMETERS
function somarNumerosRest(...numeros: number[]):number{
    let total = 0;
    numeros.forEach((numero) => {total+=numero});

    return total;
}
console.log(somarNumerosRest(16,15));

const listarFrutas = (frase:string, ...frutas:string[]) => {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Você deve ir na feita comprar ...: '), 'Maçã', 'Uva', 'Morango');

class Produtos{
    public exibirProdutos(...produtos: string[]):void{
        for (const produto of produtos) {
            console.log(produto);
        } 
    }
}

const departamentoEstoque: Produtos = new Produtos();
console.log('Produtos disponíveis no estoque...: ');

departamentoEstoque.exibirProdutos(
    'Mouse',
    'Monitor'
);