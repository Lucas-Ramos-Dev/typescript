"use strict";
//tipo de dado utilizado para representar valores de texto e caracteres em geral
let nome = 'Lucas';
//função que recebe um nome do tipo string como parâmetro e retorna este dado assinalado com retorno do tipo string.
function recebeRetornaNome(nameFull) {
    return `Olá ${nameFull}, bem vindo a sala!`;
}
console.log(recebeRetornaNome('Luva de Pedreiro'));
//single quotes / aspas simples
let name1 = 'Ana';
//double quotes / aspas duplas
let name2 = "Lucas";
//back ticks /  acento crase
let name3 = `José`;
let nameCompleto = 'Lucas Alves Ramos'; //tipo especificado explicitamente, tipo string;
let nameCompleto2 = 'Lucas Ramos'; //tipo inferido automaticamente com string;
let cor = 'azul';
console.log(cor);
