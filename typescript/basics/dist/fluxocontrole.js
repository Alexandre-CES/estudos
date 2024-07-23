"use strict";
let taskCompleted = true;
if (taskCompleted) {
    console.log('Completed');
}
let desconto;
let itemContador = 14;
if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
}
else if (itemContador > 5 && itemContador <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log(`Você teve um desconto de ...: ${desconto}%`);
const idadeVotacao = 16;
const podeVotar = (idadeVotacao >= 16) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.';
console.log(podeVotar);
let diaUtilSemana = 5;
switch (diaUtilSemana) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    default:
        console.log('Não é dia útil');
        break;
}
const arrayNumeros = [1, 11, 2, 25, 3];
const ordemNumerica = arrayNumeros.sort((n1, n2) => n1 - n2);
console.log(ordemNumerica);
let contador = 0;
while (contador < 5) {
    if (contador >= 1) {
        break;
    }
    console.log(contador);
    contador++;
}
let contadorUsuario = 0;
const usuario = ['Alexandre', 'Carlinhos'];
while (usuario[contadorUsuario]) {
    console.log(`Usuários...: ${usuario[contadorUsuario]}`);
    contadorUsuario++;
}
let contador_01 = 0;
do {
    console.log(contador_01);
    contador_01++;
} while (contador_01 < 0);
module.exports = {};
