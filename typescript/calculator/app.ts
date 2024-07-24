

const result = document.getElementById('result');
const storedNumberBox = document.getElementById('storedNumber');
let storedNumber:string = '0';
let operator:string = '';

//clear everything
function clearAll(){
    if(result){
        result.innerHTML = '';
    }
    if(storedNumberBox){
        storedNumberBox.innerHTML = '';
    }
    storedNumber = '';
    operator = '';
}

//clear last digit
function clearOne() {
    if (result) {
        result.innerHTML = result.innerHTML.slice(0, -1);
    }
}

//clear result box
function clear(){
    if(result){
        result.innerHTML = '';
    }
}

//insert number
function insert(num:string){
    if(result){
        result.innerHTML += num;
    }
}

//to store a number so you can put another
function storeNumber(ope:string){
    if (result){
        storedNumber = result.innerHTML.trim();
        if(storedNumberBox){
            storedNumberBox.innerHTML = storedNumber + ' ' + ope;
        }
        clear();
        operator = ope;
    }
}

function calculate(){
    if(result && storedNumber){
        let x:number = Number(storedNumber);
        let y:number = Number(result.innerHTML);
        let res:string;

        switch (operator){
            case '/':
                res = divide(x, y);
                break;
            case '*':
                res = multiply(x,y);
                break;
            case '-':
                res = subtract(x,y);
                break;
            case '+':
                res = sum(x,y);
                break;
            default:
                return 'error';
        }

        result.innerHTML = res;
        storedNumber = res;
        if (storedNumberBox){
            storedNumberBox.innerHTML = '';
        }
        operator = '';
    }
}

function divide(x:number, y:number): string{
    let res = x / y;

    return res.toString();
}

function multiply(x:number, y:number): string{
    let res = x * y;
    return res.toString();
}

function subtract(x:number, y:number): string{
    let res =  x - y;
    return res.toString();
}

function sum(x:number, y:number): string{
    let res =  x + y;
    return res.toString();
}