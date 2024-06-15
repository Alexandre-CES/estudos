"use strict";
//number
console.log('Numbers:');
let num1 = 220.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log(`Numbers:\n num:${num1}\n hex:${num2}\n oct:${num3}\n bin:${num4}\n`);
//bigint
let big1 = 11111111111111111n;
let big2 = 0x78fffffffffffffn;
let big3 = 35184372088831n;
let big4 = 402653187n;
console.log(`Bigints:\n num:${big1}\n hex:${big2}\n oct:${big3}\n bin:${big4}\n`);
//---------------------------------------
//strings
console.log('Strings:');
//single quotes == Recomendado
let personName = 'Alexandre';
//double quotes
let personPet = "Cat";
//Back ticks ``
let PersonData = `Name: ${personName} Pet:${personPet}`;
console.log(PersonData);
