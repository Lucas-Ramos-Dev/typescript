
//exemplo 1

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

//exemplo 2

let concluido: boolean = false;

if (concluido) {
    console.log(`Tarefa concluída!`)
} else {
    console.log(`Tarefa pendente!`)
} 

//exemplo 3

let nota1: number = 8;
let nota2: number = 9.5;
let nameFull: string = 'Lucas';

let media: number = (nota1 + nota2)/2;

if (media <= 6.99) {
    console.log(`${nameFull} Você está reprovado, média: ${media}`)
} else {
    console.log(`${nameFull} Você está aprovado, média: ${media}`)
};

const retornaMedia = () => {
    return media;
};

const exibeResult = () => {
    console.log(retornaMedia());
};
