// ==> VOID
console.log('Void: ')
function exVoidFunc(message: string): void{
    console.log(message)
};
exVoidFunc('texto');

//arrow function
const exVoidFunc1 = (message: string): void =>{
    console.log(message);
};
exVoidFunc('texto1');

//variaveis
let varExVoid: void;
//varExVoid = 1; erro
varExVoid = null; //Se "strictNullChecks": false no tsconfig
varExVoid = undefined;

console.log(varExVoid);

// ==> NULL & UNDEFINED
console.log('\nNull & Undefined: ');

//null
let varNull = null;
console.log(typeof varNull, ':', varNull);

//undefined
let varUnd;
console.log(typeof varUnd, ':', varUnd);

//diferença e semelhança
console.log('Exemplo 1:', null == undefined);
console.log('Exemplo 2:', null === undefined);
