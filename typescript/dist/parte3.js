"use strict";
//Arrays
//Colchete
let materials = ['Pen', 'rubber'];
//Array object
let materials1 = ['note'];
console.log(materials, materials1);
// Adicionar strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('mandarim');
console.log(idiomas);
//Identificar tamanho do array
console.log(idiomas.length);
//Spread Operator
idiomas = ['Japonês', ...idiomas];
console.log(idiomas);
//Laços de iteração
function iterarLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
iterarLinguagens(idiomas);
