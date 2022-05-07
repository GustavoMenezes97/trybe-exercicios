const factorialNumber = (number) => {
    let finalNumber = 1;
    
    for (let index = 2; index <= number; index += 1) {
        finalNumber *= index;
    }

    return finalNumber
}

// console.log(factorialNumber(4)); 


// const factorialNumber = (number) => number > 1 ? number * factorialNumber(number - 1) : 1;  // Buscar entender como funciona

// console.log(factorialNumber(4));

const longestWord = (string) => {
    const allWords = string.split(' ');
    let longestLength = 0;
    let longestWord = '';

    for (let index = 0; index < allWords.length; index += 1) {
        if (allWords[index].length > longestLength) {
            longestLength = allWords[index].length;
            longestWord = allWords[index];
        }
    }
    return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
