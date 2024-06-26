"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retornarElementosRandomicos(items) {
    const indice = Math.floor(Math.random() * items.length);
    return items[indice];
}
;
let arrayNum = [1, 2, 3, 4];
console.log(retornarElementosRandomicos(arrayNum));
let arrayStr = ['a', 'b', 'c', 'd'];
console.log(retornarElementosRandomicos(arrayStr));
function exibirElementos(array) {
    array.forEach(elemento => {
        console.log(elemento);
    });
}
;
let number = [1, 2, 3, 4, 5];
let strings = ['a', 'b', 'c'];
exibirElementos(number);
exibirElementos(strings);
