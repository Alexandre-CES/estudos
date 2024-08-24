"use strict";
function Main() {
    //create database
    const ages = genRandomNumList(15, 70, 40); //input
    if (Array.isArray(ages)) {
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
            let r = genRandomNumList(0, label.length - 1);
            if (typeof r === 'number') {
                if (label[r] === 0) {
                    label[r] = 1; //yes
                }
                else {
                    label[r] = 0; //no
                }
            }
            else {
                console.log('r weren`t detected as number');
            }
        }
        console.log(ages);
        console.log(label);
        for (let i = 0; i < ages.length; i++) {
            console.log(`Age: ${ages[i]}, Label: ${label[i]}`);
        }
    }
    else {
        console.log('ages weren`t detected as an array');
    }
}
function genRandomNumList(min, max, size) {
    if (size) {
        const randomNumbers = [];
        for (let i = 0; i < size; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.push(randomNumber);
        }
        return randomNumbers;
    }
    else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
Main();
