"use strict";
console.log('Void: ');
function exVoidFunc(message) {
    console.log(message);
}
;
exVoidFunc('texto');
const exVoidFunc1 = (message) => {
    console.log(message);
};
exVoidFunc('texto1');
let varExVoid;
varExVoid = null;
varExVoid = undefined;
console.log(varExVoid);
console.log('\nNull & Undefined: ');
let varNull = null;
console.log(typeof varNull, ':', varNull);
let varUnd;
console.log(typeof varUnd, ':', varUnd);
console.log('Exemplo 1:', null == undefined);
console.log('Exemplo 2:', null === undefined);
