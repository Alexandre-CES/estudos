"use strict";
function throwNeverFunc(message) {
    throw new Error(message);
}
console.log(throwNeverFunc('Mensagem de erro'));
function returnError() {
    return throwNeverFunc('Mensagem de erro 2');
}
console.log(returnError());
const loopInfinito = () => {
    while (true) {
        console.log('');
    }
};
