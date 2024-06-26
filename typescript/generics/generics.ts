//generics
export{};

function retornarElementosRandomicos<T>(items: T[]): T{
    const indice = Math.floor(Math.random() * items.length);
    return items[indice];
};

let arrayNum = [1, 2, 3, 4];
console.log(retornarElementosRandomicos<number>(arrayNum));

let arrayStr = ['a', 'b', 'c', 'd'];
console.log(retornarElementosRandomicos<string>(arrayStr));

//exemplo 2
function exibirElementos<T>(array: T[]): void {
    array.forEach(elemento => {
        console.log(elemento);
    });
};

let number: number[] = [1,2,3,4,5];
let strings: string[] = ['a', 'b', 'c'];

exibirElementos<number>(number);
exibirElementos<string>(strings);