//generic Classes
export{};

class Box<T>{
    private item: T;
    constructor(item: T){
        this.item = item;
    }
    getItem(): T{
        return this.item;
    }
    setItem(item: T){
        this.item = item;
    }
}

const boxString = new Box<string>('Alexandre');
const boxNumber = new Box<number>(2);

console.log(boxString.getItem());
console.log(boxNumber.getItem());

//exemplo 2
class Estudante<T,U>{
    private id:T;
    private nome:U;

    setValor(id: T, nome:U):void{
        this.id = id;
        this.nome = nome;
    }

    retornarValor():void{
        console.log(`Id: ${this.id} - Nome: ${this.nome}`);
    }
}

const estudante = new Estudante<number,string>();
const estudante2 = new Estudante<string,string>();

estudante.setValor(1,'Alexandre');
estudante.retornarValor();

estudante2.setValor('2','Alexandre');
estudante2.retornarValor();