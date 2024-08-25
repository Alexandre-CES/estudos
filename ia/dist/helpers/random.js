"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genList = exports.genNum = void 0;
function genNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.genNum = genNum;
function genList(min, max, size) {
    const randomNumbers = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
exports.genList = genList;
