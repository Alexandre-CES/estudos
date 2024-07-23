

const result = document.getElementById('result');
const storedNumberBox = document.getElementById('storedNumber');
let storedNumber:string = '0';
let operator:string = '';

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
function storeNumber(ope:string){
    if (result){
        storedNumber = result.innerHTML.trim();
        if(storedNumberBox){
            storedNumberBox.innerHTML = storedNumber + ope;
        }
        clearAll();
        operator = ope;
    }
}

function calculate(){
    if(result && storedNumber){
        let x:number = Number(storedNumber);
        let y:number = Number(result.innerHTML);
        let res:string;

        if(operator == '/'){
            res = divide(x, y);
        }else if(operator == '*'){
            res = multiply(x,y);
        }else if(operator == '-'){
            res = subtract(x,y);
        }else if(operator == '+'){
            res = sum(x,y);
        }else{
            return 'error'
        }

        result.innerHTML = res;
        storedNumber = '';
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