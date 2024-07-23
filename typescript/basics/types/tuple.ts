//Tuple

let person:[string,string,number];

person = ['Alexandre','pão de queijo',18];
//person = [18,'Alexandre','pão de queijo']; -> erro, tipos fora de ordem

console.log(`${typeof(person)}: ${person}`);

//Acessando valor da tupla
console.log(person[2]);

//labeled tuple
let person1:[age:number, name:string, favoriteFood:string] = [18,'pão de queijo','Alexandre'];
console.log(person1);

//tupla com spread operator
let materials:[string, ...string[]];
materials = ['stone', 'rubber', 'wood', 'wool'];
console.log(materials);

//lista heterigênea de tupla
let materials1:[number, boolean, ...string[]] = [5,true, ...materials];
console.log(materials1);

//função com tupla
function listPeople(names:string[], ages:number[]){
    return [...names, ...ages];
}

let resultListPeople = listPeople(['Alexandre', 'Dalva', 'Carlinhos'], [18, 42, 72]);
console.log(resultListPeople);

//labeled tuples com spread operator numa função
type Name =
        |   [firstName: string, surname: string]
        |   [firstName: string, midName: string, surname: string[]]

function createPerson(...name:Name){
    return [...name];
}

console.log(createPerson('José', 'Orivaldo', ['da', 'silva']));

//destructure tuples
function destructTuple(stringNumberDest: [string, number]): void{
    const [stringDest, numberDest] = stringNumberDest;

    console.log(stringDest, numberDest);
}
destructTuple(['Alexandre', 18]);