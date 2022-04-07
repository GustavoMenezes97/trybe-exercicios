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
const lado3 = 60;

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

