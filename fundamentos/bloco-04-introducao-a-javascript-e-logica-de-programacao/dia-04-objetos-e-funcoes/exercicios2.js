function palindromo(word) {       
    if (word === word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

// console.log(palindromo('desenvolvimento'));

function maiorValor(arrayMaior) {
    let maiorLength = 0;
    for (let index in arrayMaior) {
        if (arrayMaior[index] > arrayMaior[maiorLength]) {
            maiorLength = index;
        }
    }
    return maiorLength;
}

// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

function menorValor(arrayMenor) {
    let menorLength = 0;
    for (index in arrayMenor) {
        if (arrayMenor[index] < arrayMenor[menorLength]) {
            menorLength = index;
        }
    }
    return menorLength;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));