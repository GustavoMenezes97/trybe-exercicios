let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
}

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
    // console.log(soma);

let novaSoma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    novaSoma += numbers[index];
}

let mediaAritmetica = novaSoma / numbers.length;

    // console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
    // console.log('Valor maior que 20');
} else {
    // console.log('Valor menor ou igual a 20');
}