"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./helpers/random");
const calc_1 = require("./helpers/calc");
function Main() {
    //create database
    const ages = (0, random_1.genList)(15, 70, 40); //input
    let label = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 30) {
            label.push(0); //no
        }
        else {
            label.push(1); //yes
        }
    }
    for (let i = 0; i <= 3; i++) {
        let r = (0, random_1.genNum)(0, label.length - 1);
        if (label[r] === 0) {
            label[r] = 1; //yes
        }
        else {
            label[r] = 0; //no
        }
    }
    console.log(ages);
    console.log(label);
    // linear regression
    const [m, b] = (0, calc_1.linearRegression)(ages, label);
    console.log(`Slope (m): ${m}`);
    console.log(`Intercept (b): ${b}`);
    // Calculate threshold age
    const thresholdAge = Math.abs(-b / m);
    console.log(`Threshold Age: ${thresholdAge}`);
}
Main();
