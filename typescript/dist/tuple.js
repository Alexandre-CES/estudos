"use strict";
let person;
person = ['Alexandre', 'pão de queijo', 18];
console.log(`${typeof (person)}: ${person}`);
console.log(person[2]);
let person1 = [18, 'pão de queijo', 'Alexandre'];
console.log(person1);
let materials;
materials = ['stone', 'rubber', 'wood', 'wool'];
console.log(materials);
let materials1 = [5, true, ...materials];
console.log(materials1);
function listPeople(names, ages) {
    return [...names, ...ages];
}
let resultListPeople = listPeople(['Alexandre', 'Dalva', 'Carlinhos'], [18, 42, 72]);
console.log(resultListPeople);
function createPerson(...name) {
    return [...name];
}
console.log(createPerson('José', 'Orivaldo', ['da', 'silva']));
function destructTuple(stringNumberDest) {
    const [stringDest, numberDest] = stringNumberDest;
    console.log(stringDest, numberDest);
}
destructTuple(['Alexandre', 18]);
