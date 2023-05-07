"use strict";
// typescript é altamente tipado, ele permite que voçê defina tipos para as variáveis, parâmetros de função e valores de retorno.
//TYPE ANOTATION do TypeScript - são usadas para especificar esplicitamente o tipo de uma vaiável, parâmetro de função ou valor de retorno.
//type anotation de variáveis - 
let age = 26;
let age_2;
age_2 = 27;
//type anotation de parâmetro de função - 
const nameFullSet = (nameFull) => {
    return `Nome: ${nameFull}`;
};
console.log(nameFullSet('Lucas Ramos'));
//type anotationpara retorno de uma função
function somaNumeros(n1, n2) {
    return n1 + n2;
}
;
console.log(somaNumeros(2, 7));
//criação de uma lista com type anotation esplícito
const listNames = ['Lucas', 'Leonardo', 'Leandro'];
console.log(listNames[2]);
//criação de um objeto com type anotation
let carro;
carro = { nome: 'New Fiesta', anoFabricacao: 2019, preco: 56.000 };
console.log(carro);
