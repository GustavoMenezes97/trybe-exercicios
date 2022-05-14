const employeesInf = (fullName) => {
    const email = fullName.toLowerCase().replace(/ /g, '_');
    return {fullName, email: `${email}@trybe.com`};
}

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//   console.log(newEmployees(employeesInf));

const numberCheck = (myNumber, number) => myNumber === number;

const result = (myNumber, func) => {
    const number = Math.round(Math.random() * (5 - 1) + 1);

    return func(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
}

console.log(result(5, numberCheck));