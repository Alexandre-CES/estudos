"use strict";
const result = document.getElementById('result');
const storedNumberBox = document.getElementById('storedNumber');
let storedNumber = '0';
let operator = '';
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
function storeNumber(ope) {
    if (result) {
        storedNumber = result.innerHTML.trim();
        if (storedNumberBox) {
            storedNumberBox.innerHTML = storedNumber + ope;
        }
        clearAll();
        operator = ope;
    }
}
function calculate() {
    if (result && storedNumber) {
        let x = Number(storedNumber);
        let y = Number(result.innerHTML);
        let res;
        if (operator == '/') {
            res = divide(x, y);
        }
        else if (operator == '*') {
            res = multiply(x, y);
        }
        else if (operator == '-') {
            res = subtract(x, y);
        }
        else if (operator == '+') {
            res = sum(x, y);
        }
        else {
            return 'error';
        }
        result.innerHTML = res;
        storedNumber = '';
        operator = '';
    }
}
function divide(x, y) {
    let res = x / y;
    return res.toString();
}
function multiply(x, y) {
    let res = x * y;
    return res.toString();
}
function subtract(x, y) {
    let res = x - y;
    return res.toString();
}
function sum(x, y) {
    let res = x + y;
    return res.toString();
}
