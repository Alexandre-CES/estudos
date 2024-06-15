//Arrays

//Colchete
let materials: string[] = ['Pen', 'rubber'];

//Array object
let materials1: Array<string> = ['note'];

console.log(materials, materials1);

// Adicionar strings com método 'push'
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('mandarim');
console.log(idiomas);

//Identificar tamanho do array
console.log(idiomas.length);

//Spread Operator
idiomas = ['Japonês', ...idiomas];
console.log(idiomas);

//Laços de iteração
function iterarLinguagens(linguagens:string[]): void{
    for(let i = 0; i < linguagens.length; i++){
        console.log(linguagens[i]);
    }
}

iterarLinguagens(idiomas);