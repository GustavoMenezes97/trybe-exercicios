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

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

function biggestName(arrayNames) {
    let biggestName = arrayNames[0];
    for (let index in arrayNames) {
        if (arrayNames[index].length > biggestName.length) {
            biggestName = arrayNames[index];
        }
    }
    return biggestName;
}

// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function numberRepeat(arrayNumbers) {
    let repeatedCounter = 0;
    let numberCounter = 0;
    let indexRepeatedNumber = 0;
    for (let index in arrayNumbers) {
        let verifyNumber = arrayNumbers[index];
        for (let index2 in arrayNumbers) {
            if (verifyNumber === arrayNumbers[index2]) {
                numberCounter += 1;
            }
        }
        if (numberCounter > repeatedCounter) {
            repeatedCounter = numberCounter;
            indexRepeatedNumber = index;
        }
        numberCounter = 0;
    }
    return arrayNumbers[indexRepeatedNumber];
}

// console.log(numberRepeat([2, 3, 2, 5, 8, 2, 3]));

function naturalNumber(N) {
    let total = 0;
    for (let index = 1; index <= N; index += 1) {
        total += index;
    }
    return total;
}

// console.log(naturalNumber(5)); 

function trueEnding(word, ending) {
    let completeWord = word;
    let endOfWord = ending;
    let trueOrFalse = true;
    for (let index = 0; index < endOfWord.length; index += 1) {
        if (completeWord[completeWord.length - endOfWord.length + index] !== endOfWord[index]) {
            trueOrFalse = false;
        }
    }
    return trueOrFalse;
}

console.log(trueEnding('trybe', 'be'));
