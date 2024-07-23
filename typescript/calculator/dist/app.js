"use strict";
const result = document.getElementById('result');
let storedNumber = '0';
//clear everything
function clearAll() {
    if (result) {
        result.innerHTML = '';
    }
}
//clear last digit
function clearOne() {
    if (result) {
        result.innerHTML = result.innerHTML.slice(0, -1);
    }
}
//insert number
function insert(num) {
    if (result) {
        result.innerHTML += num;
    }
}
//to store a number so you can put another
function storeNumber(num) {
    storedNumber = num;
}
function calculate(ope) {
    if (result) {
        if (result.innerHTML.trim() == '') {
            result.innerHTML = storedNumber;
        }
    }
}
function divide(x, y) {
    return x / y;
}
function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}
function sum(x, y) {
    return x - y;
}
