//number
console.log('Numbers:')

let num1: number = 220.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(`Numbers:\n num:${num1}\n hex:${num2}\n oct:${num3}\n bin:${num4}\n`);

//bigint
let big1: bigint = 11111111111111111n;
let big2: bigint = 0x78FFFFFFFFFFFFFn;
let big3: bigint = 0o777777777777777n;
let big4: bigint = 0b11000000000000000000000000011n;

console.log(`Bigints:\n num:${big1}\n hex:${big2}\n oct:${big3}\n bin:${big4}\n`);

//---------------------------------------

//strings
console.log('Strings:');

//single quotes == Recomendado
let personName:string = 'Alexandre';

//double quotes
let personPet:string  = "Cat";

//Back ticks ``
let PersonData:string = `Name: ${personName} Pet:${personPet}`;
console.log(PersonData);