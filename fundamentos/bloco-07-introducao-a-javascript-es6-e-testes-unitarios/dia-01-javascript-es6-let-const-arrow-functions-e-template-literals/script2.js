const factorialNumber = (number) => {
    let finalNumber = 1;
    
    for (let index = 2; index <= number; index += 1) {
        finalNumber *= index;
    }

    return finalNumber
}

console.log(factorialNumber(4));



// const factorialNumber = (number) => number > 1 ? number * factorialNumber(number - 1) : 1;  // Buscar entender como funciona

// console.log(factorialNumber(4));