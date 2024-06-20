//Fluxo de controle
export = {};

// => BOOLEAN

/* Boolean != boolean

Boolean == object
bolean == primitive */

let taskCompleted: boolean = true;

if (taskCompleted){
    console.log('Completed');
}

// => IF ELSE

//if ...else if
let desconto:number;
let itemContador = 14;

if(itemContador > 0 && itemContador <= 5){
    desconto = 5;
}else if(itemContador > 5 && itemContador <= 10){
    desconto = 10;
}else{
    desconto = 15;
}
console.log(`Você teve um desconto de ...: ${desconto}%`);

//Ternário (? :) - if ... else
const idadeVotacao:number = 16;
const podeVotar = (idadeVotacao >= 16) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.';
console.log(podeVotar);

// => SWITCH...CASE
let diaUtilSemana:number = 5;
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

// => LOOP FOR

//basic
/*
for(let i = 0; i < 10; i++){
    console.log(i);
}
*/
const arrayNumeros = [1,11,2,25,3];
//key of
/*

for(const i of arrayNumeros){
    console.log(i);
}
*/

//index in
/*
for (const i in arrayNumeros) {
    console.log(arrayNumeros[i])
}
*/

//sort
const ordemNumerica: number[] = arrayNumeros.sort((n1,n2)=> n1 - n2);
console.log(ordemNumerica);


// => Do...While

//basic

let contador: number = 0;
while(contador < 5){
    if(contador >= 1){
        break;
    }
    console.log(contador);
    contador++;
}

let contadorUsuario:number = 0;
const usuario: string[] = ['Alexandre','Carlinhos'];

while(usuario[contadorUsuario]){
    console.log(`Usuários...: ${usuario[contadorUsuario]}`);
    contadorUsuario++;
}

//do...while
let contador_01:number = 0;
do{
    console.log(contador_01);
    contador_01++;
}while(contador_01 < 0);