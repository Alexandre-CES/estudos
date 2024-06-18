//never 

//throw exeption
function throwNeverFunc(message:string): never{
    throw new Error(message);
}
console.log(throwNeverFunc('Mensagem de erro'));

//inferido automaticamente
function returnError(){
    return throwNeverFunc('Mensagem de erro 2');
}
console.log(returnError());

//loop infinito
const loopInfinito = ()=>{
    while(true){
        console.log('');
    }
}