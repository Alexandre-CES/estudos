"use strict";
//Variáveis
let nome = 'Alexandre';
console.log(nome);
//Arrays
let strArray = ['teste', 'teste2'];
console.log(strArray);
//Objects
let objeto;
objeto = { id: 1, name: 'bola', amount: 43 };
console.log(objeto);
//functions
function somarNumeros(a, b) {
    return a + b;
}
console.log(somarNumeros(2, 2));
//  BOOLEAN
/* Boolean != boolean

Boolean == object
bolean == primitive */
let taskCompleted = true;
if (taskCompleted) {
    console.log('Completed');
}
else {
    console.log('Not completed');
}
