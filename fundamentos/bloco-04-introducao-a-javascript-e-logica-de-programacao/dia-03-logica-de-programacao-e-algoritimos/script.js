let fatorialDeDez = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorialDeDez *= index;
}

// console.log(fatorialDeDez);

let word = 'tryber';
let inverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    inverseWord += word[word.length - 1 - index];
}

// console.log(inverseWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
    }
}

// console.log(maiorPalavra);

let menorPalavra = array[0];

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
    }
}

// console.log(menorPalavra);

let maiorNumeroPrimo = 0;

for (let numeros = 0; numeros <= 50; numeros += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numeros; divisor += 1) {
        if (numeros % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorNumeroPrimo = numeros;
    }
}

console.log(maiorNumeroPrimo);