import {genNum, genList} from './helpers/random';
import { linearRegression } from './helpers/calc';

function Main(){

    //create database
    const ages = genList(15,70,40); //input

    let label:number[] = [];
    for(let i = 0; i < ages.length; i++){
        if(ages[i] < 30){
            label.push(0); //no
        }else{
            label.push(1); //yes
        }
    }

    for(let i = 0; i <= 3; i++){
        let r = genNum(0,label.length - 1);
        if (label[r] === 0) {
            label[r] = 1; //yes
        } else {
            label[r] = 0; //no
        }
    }

    console.log(ages)
    console.log(label)

    // linear regression
    const [m,b] = linearRegression(ages,label);

    console.log(`Slope (m): ${m}`);
    console.log(`Intercept (b): ${b}`);

    // Calculate threshold age
    const thresholdAge = (0.5 - b) / m;
    console.log(`Threshold Age: ${thresholdAge}`);
}

Main()