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