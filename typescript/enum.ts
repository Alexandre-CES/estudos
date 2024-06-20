//Enums

//Enums numérico
enum Idioma{
    Portugues,
    Espanhol,
    Ingles,
    Frances
}
console.log(Idioma);

//Enums de string
enum DiaSemana{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'Dom'
}
console.log(DiaSemana);

//acessar valor de um enum com uma chave usando const
const enum Comida{
    Hamburger,
    Massa,
    Pizza,
    Torta,
    Carne
}
function comida(c: Comida): Comida{
    return c;
}

console.log(comida(Comida.Carne));
console.log(comida(4));