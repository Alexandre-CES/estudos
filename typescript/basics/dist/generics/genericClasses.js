"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
}
const boxString = new Box('Alexandre');
const boxNumber = new Box(2);
console.log(boxString.getItem());
console.log(boxNumber.getItem());
class Estudante {
    setValor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    retornarValor() {
        console.log(`Id: ${this.id} - Nome: ${this.nome}`);
    }
}
const estudante = new Estudante();
const estudante2 = new Estudante();
estudante.setValor(1, 'Alexandre');
estudante.retornarValor();
estudante2.setValor('2', 'Alexandre');
estudante2.retornarValor();
