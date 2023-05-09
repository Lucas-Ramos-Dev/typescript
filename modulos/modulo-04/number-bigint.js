"use strict";
//tipo number - Conjunto de números (inteiros, flutuantes, positivos, negativos, infinito, NaN, etc)
let n1 = 8.7;
let n2 = 5;
let mediaFinal = (n1 + n2) / 2;
const check = () => {
    if (mediaFinal >= 7 && mediaFinal == 10) {
        console.log('Aprovado!');
    }
    else if (mediaFinal > 0 && mediaFinal <= 6.99) {
        console.log('Reprovado!');
    }
};
//função de verificação, função inútil
const verificaMedia = () => {
    if (mediaFinal <= 6.99) {
        return mediaFinal;
    }
    else {
        return mediaFinal;
    }
    ;
};
const mediaAceita = () => {
    if (verificaMedia() >= 5) {
        console.log(`Pode recuperar!`);
    }
    else if (verificaMedia() <= 4.99) {
        console.log(`Sem recuperação!`);
    }
    ;
};
check();
verificaMedia();
mediaAceita();
//tipo bigint - é usado para representar números grandes, ele é um tipo de dado que foi introduzido no ecmascript 2020(ES11)
let myBigInt = 2356897845122356n;
//tipo bigint disponível somente a partir do es2020 ou esnext
