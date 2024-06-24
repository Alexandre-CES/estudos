"use strict";
const exibirTipo = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos! ambos devem ser numéricos ou string');
};
console.log(exibirTipo(1, 1));
console.log(exibirTipo('s', 's'));
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return `Carro: ${veiculo.nome} - ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) {
        return `Moto: ${veiculo.nome} - ${veiculo.ano}`;
    }
}
const carro = new Carro('Carro', 'Marca');
console.log(detalhesVeiculo(carro));
const moto = new Moto('Moto', 2020);
console.log(detalhesVeiculo(moto));
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = 'peixe';
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPassaro) {
        this.grupo = grupo;
        this.corPassaro = corPassaro;
    }
}
function nadar(grupo) {
    console.log(`${grupo} está nadando`);
}
function voar(grupo) {
    console.log(`${grupo} está voando`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPassaro' in animal) {
        voar(animal.grupo);
    }
}
const peixe = new Peixe('peixe', 'azul');
const passaro = new Passaro('passaro', 'branco');
mover(peixe);
mover(passaro);
let varStr = 'teste';
let varNum = 123;
let varBool = true;
console.log(typeof (varStr), typeof (varNum), typeof (varBool));
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
class Rodolfo {
    constructor(idade) {
        this.idade = idade;
    }
}
const responderInstancia = (sas) => {
    if (sas instanceof Pessoa) {
        return sas.nome;
    }
    else if (sas instanceof Rodolfo) {
        return sas.idade;
    }
};
const pessoa = new Pessoa('Robson');
const rodolfo = new Rodolfo(45);
console.log(responderInstancia(pessoa));
console.log(responderInstancia(rodolfo));
let objeto = {
    palavra: 'sas',
};
if ('palavra' in objeto) {
    console.log('tem');
}
module.exports = {};
