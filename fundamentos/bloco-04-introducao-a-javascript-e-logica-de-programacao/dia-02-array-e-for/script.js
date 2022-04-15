let numbers = [5, 9, 5, 19, 70, 8, 100, 2, 35, 27];

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

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}

    // console.log(maiorNumero);

let quantidadeImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        quantidadeImpar += 1;
    }
}

if (quantidadeImpar === 0) {
    // console.log('nenhum valor ímpar encontrado');
} else {
    // console.log('Qtd números ímpares: ' + quantidadeImpar);
}

let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

    // console.log(menorNumero);

let novoArray = [];

for (let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}

    // console.log(novoArray);

for (let index = 0; index < novoArray.length; index += 1) {
        // console.log(novoArray[index] / 2);
}
