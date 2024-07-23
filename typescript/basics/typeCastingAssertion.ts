//type casting
export{};

const valor:unknown = 'Opa, falaê';
console.log((valor as string).length);

const carro:string = 'carro';
const tamanhoString:number = (<string>carro).length;
console.log(tamanhoString);

//type assertions
function exibirPreco(preco:number, desconto:number,formato:boolean):number | string{
    const precoDesconto = preco * (1-desconto);

    return formato ? `R$${precoDesconto}` : precoDesconto;
}

//const descontoFinal = exibirPreco(100, 0.05,true) as string;
const descontoFinal = <number>exibirPreco(100, 0.05,false);
console.log(descontoFinal);

//exemplo2
/*
type Humano = {
    nome: string;
    idade: number;
    idioma:string
}

const humano = {
    idade: 36,
    idioma:'Português'
}
    
const humano_02 = humano as Humano;
console.log(humano_02.nome.toLocaleLowerCase()); --> erro
*/

type Humano = {
    nome: string;
    idade: number;
    idioma:string
}

const humano = {
    idade: 36,
    idioma:'Português'
}

//const humano_02: Humano = humano; --> erro
//console.log(humano_02.nome.toLocaleLowerCase());