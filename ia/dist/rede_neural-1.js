"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./helpers/random");
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
    for (let i = 0; i < 3; i++) {
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
    const N = ages.length;
    const sumX = ages.reduce((a, b) => a + b, 0);
    const sumY = label.reduce((a, b) => a + b, 0);
    const sumXY = ages.reduce((sum, age, i) => sum + age * label[i], 0);
    const sumX2 = ages.reduce((sum, age) => sum + age * age, 0);
    const m = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / N;
    console.log(`Slope (m): ${m}`);
    console.log(`Intercept (b): ${b}`);
    // Calculate threshold age
    const thresholdAge = (0.5 - b) / m;
    console.log(`Threshold Age: ${thresholdAge}`);
}
Main();
