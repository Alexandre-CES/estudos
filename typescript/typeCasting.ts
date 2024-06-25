export{};

const valor:unknown = 'Opa, falaê';
console.log((valor as string).length);

const carro:string = 'carro';
const tamanhoString:number = (<string>carro).length;
console.log(tamanhoString);

