
/*
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avg = 0;
let top_value = 0;
let min_value = numbers[1];
let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log (numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log ("soma = " + sum);

avg = sum / numbers.length;
console.log ("media = " + avg);

if (avg > 20) {
    console.log ("valor maior que 20");
} else {
    console.log ("valor menor ou igual a 20");
}

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > top_value) {
        top_value = numbers[index];
    }
}
console.log(top_value);

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
        impares += 1;
    }
}
if (impares == 0) {
    console.log ("nenhum valor ímpar encontrado")
} else {
    console.log (impares);
}

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < min_value) {
        min_value = numbers[index];
    }
}
console.log(min_value);

