"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    localNascimento: 'São Paulo',
    residenciaAtual: { x: 10, y: 20 }
};
console.log(pessoa.localNascimento.toUpperCase());
const config = {
    host: 'localhost',
    port: 3306,
    tryReconnect: () => true,
};
function Connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
