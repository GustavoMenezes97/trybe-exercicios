// Etapa 1

const a = 29;
const b = 23;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Etapa 2

const c = 12;
const d = 32;

if (c > d) {
    console.log(c);
} else {
    console.log(d);
}

// Etapa 3

const e = 67;
const f = 7;
const g = 99;

if (e > f && e > g) {
    console.log(e);
} else if (f > e && f > g) {
    console.log(f);
} else {
    console.log(g);
}

// Etapa 4

const h = 3;

if (h > 0) {
    console.log("positive");
} else {
    console.log("negative");
}

// Etapa 5

const lado1 = 60;
const lado2 = 60;
const lado3 = -61;

let somaDosLados = lado1 + lado2 + lado3;
let tudoPositivo = lado1 > 0 && lado2 > 0 && lado3 > 0;

if (tudoPositivo) {
if (somaDosLados === 180) {
    console.log("true");
} else {
    console.log("false");
}
} else {
    console.log("Erro: Valor negativo inserido");
}

// Etapa 6

let movPecas = "RaInHa"

switch (movPecas.toLowerCase()) {
    case "peão":
    console.log("O Peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;
    case "torre":
    console.log("A Torre move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;
    case "bispo":
    console.log("O Bispo move-se na diagonal, quantas casas quiser.");
    break;
    case "cavalo":
    console.log("O Cavalo move-se uma casa na horizontal e duas na vertical ou uma na vertial e duas na horizontal.");
    break;
    case "rainha":
    console.log("A Rainha move-se em qualquer direção, quantas casas quiser.");
    break;
    case "rei":
    console.log("O rei move-se em qualquer direção, apenas uma casa.")
    break;
    default:
    console.log("Erro: Peça inválida.");
}

// Etapa 7

const nota = 49;


if (nota >= 90 && nota <= 100) {
    console.log("Nota A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Nota B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Nota C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Nota D");
} else if (nota >= 50 && nota <= 59) {
    console.log("Nota E");
} else if (nota < 50 && nota >= 0) {
    console.log("Nota F");
} else {
    console.log("Erro: Nota inválida.");
}

// Etapa 8

const primeira = 33;
const segunda = 70;
const terceira = 97;

if (primeira % 2 === 0 || segunda % 2 === 0 || terceira % 2 === 0) {
    console.log("True");
} else {
    console.log("False")
}

// Etapa 9

const quarta = 22;
const quinta = 44;
const sexta = 3;

if (quarta % 2 !== 0 || quinta % 2 !== 0 || sexta % 2 !== 0) {
    console.log("True");
} else {
    console.log("False")
}

// Etapa 10

const custo = 20;
const valorVenda = 80;

if (custo >= 0 && valorVenda >= 0) {
    let valorCustoTotal = (custo * 0.2) + custo;
    let lucro = valorVenda - valorCustoTotal;
    console.log("O lucro foi de R$" + (lucro * 1000));
} else {
    console.log("Erro: Valor inserido incorretamente")
}

// Etapa 11

const salarioBruto = 22000;

let inssOito = 1556.94;
let inssNove = 2594.92;
let inssOnze = 5189.82;
let inssTeto = 570.88

if (salarioBruto <= inssOito) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto <= inssNove) {
    salarioBase = salarioBruto - (salarioBruto * 0.09); 
} else if (salarioBruto <= inssOnze) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioBase = salarioBruto - inssTeto;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.80);
} else if (salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.80);
} else if (salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
} else if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
}

console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));