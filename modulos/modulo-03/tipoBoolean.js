"use strict";
//exemplo 1
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
//exemplo 2
let concluido = false;
if (concluido) {
    console.log(`Tarefa concluída!`);
}
else {
    console.log(`Tarefa pendente!`);
}
//exemplo 3
let nota1 = 8;
let nota2 = 9.5;
let nameFull = 'Lucas';
let media = (nota1 + nota2) / 2;
if (media <= 6.99) {
    console.log(`${nameFull} Você está reprovado, média: ${media}`);
}
else {
    console.log(`${nameFull} Você está aprovado, média: ${media}`);
}
;
const retornaMedia = () => {
    return media;
};
const exibeResult = () => {
    console.log(retornaMedia());
};
