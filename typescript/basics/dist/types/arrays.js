"use strict";
let schoolStuff = ['Pen', 'rubber'];
let schoolStuff1 = ['note'];
console.log(schoolStuff, schoolStuff1);
let idiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('mandarim');
console.log(idiomas);
console.log(idiomas.length);
idiomas = ['Japonês', ...idiomas];
console.log(idiomas);
function iterarLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
iterarLinguagens(idiomas);
