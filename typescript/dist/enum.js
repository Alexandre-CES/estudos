"use strict";
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
var DiaSemana;
(function (DiaSemana) {
    DiaSemana["Segunda"] = "SEG";
    DiaSemana["Terca"] = "TER";
    DiaSemana["Quarta"] = "QUA";
    DiaSemana["Quinta"] = "QUI";
    DiaSemana["Sexta"] = "SEX";
    DiaSemana["Sabado"] = "SAB";
    DiaSemana["Domingo"] = "Dom";
})(DiaSemana || (DiaSemana = {}));
console.log(DiaSemana);
function comida(c) {
    return c;
}
console.log(comida(4));
console.log(comida(4));
