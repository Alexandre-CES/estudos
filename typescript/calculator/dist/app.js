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
    if (storedNumberBox) {
        storedNumberBox.innerHTML = '';
    }
    storedNumber = '';
    operator = '';
}
//clear last digit
function clearOne() {
    if (result) {
        result.innerHTML = result.innerHTML.slice(0, -1);
    }
}
//clear result box
function clear() {
    if (result) {
        result.innerHTML = '';
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
            storedNumberBox.innerHTML = storedNumber + ' ' + ope;
        }
        clear();
        operator = ope;
    }
}
function calculate() {
    if (result && storedNumber) {
        let x = Number(storedNumber);
        let y = Number(result.innerHTML);
        let res;
        switch (operator) {
            case '/':
                res = divide(x, y);
                break;
            case '*':
                res = multiply(x, y);
                break;
            case '-':
                res = subtract(x, y);
                break;
            case '+':
                res = sum(x, y);
                break;
            default:
                return 'error';
        }
        result.innerHTML = res;
        storedNumber = res;
        if (storedNumberBox) {
            storedNumberBox.innerHTML = '';
        }
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
