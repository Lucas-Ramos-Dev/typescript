//tipo de dado utilizado para representar valores de texto e caracteres em geral

let nome: string = 'Lucas';

//função que recebe um nome do tipo string como parâmetro e retorna este dado assinalado com retorno do tipo string.
function recebeRetornaNome(nameFull: string): string {
    return `Olá ${nameFull}, bem vindo a sala!`;
}

console.log(recebeRetornaNome('Luva de Pedreiro'));

//single quotes / aspas simples
let name1: string = 'Ana';
//double quotes / aspas duplas
let name2: string = "Lucas";
//back ticks /  acento crase
let name3: string = `José`;

let nameCompleto: string = 'Lucas Alves Ramos'; //tipo especificado explicitamente, tipo string;
let nameCompleto2 = 'Lucas Ramos'; //tipo inferido automaticamente com string;

//Strings literais: O TypeScript permite criar tipos específicos de strings usando strings literais. Isso significa que você pode definir um conjunto específico de valores que uma string pode ter. Por exemplo:
type Cores = 'amarelo' | 'vermelho' | 'azul';
let cor: Cores = 'azul';
console.log(cor);




