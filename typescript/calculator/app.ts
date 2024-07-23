

const result = document.getElementById('result');
let storedNumber:string = '0';

//clear everything
function clearAll(){
    if(result){
        result.innerHTML = '';
    }
}

//clear last digit
function clearOne() {
    if (result) {
        result.innerHTML = result.innerHTML.slice(0, -1);
    }
}

//insert number
function insert(num:string){
    if(result){
        result.innerHTML += num;
    }
}

//to store a number so you can put another
function storeNumber(num:string){
    storedNumber = num;
}

function calculate(ope:string){
    if(result){
        if(result.innerHTML.trim() == ''){
            result.innerHTML = storedNumber;
        }
    }
}

function divide(x:number, y:number): number{
    return x / y
}

function multiply(x:number, y:number): number{
    return x * y
}

function subtract(x:number, y:number): number{
    return x - y
}

function sum(x:number, y:number): number{
    return x - y
}