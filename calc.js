const prompt = require('prompt-sync')();

let x = prompt("Somar, subtrair, multiplicar, dividir ou elevar? (1/2/3/4/5): ");
let a = parseFloat(prompt("Qual o primeiro número da operação? "));
let b = parseFloat(prompt("Qual o segundo número da operação? "));

function sum() {
    console.log(a + b);
}

function subtract() {
    console.log(a - b);
}

function multiply() {
    console.log(a * b);
}

function divide() {
    console.log(a / b);
}

function exponential() {
    console.log(a ** b);
}

if (x == 1) {
    sum();
} else if (x == 2) {
    subtract();
} else if (x == 3) {
    multiply();
} else if (x == 4) {
    divide();
} else if (x == 5) {
    exponential();
}
 else if (x !== 1 || x !== 2 || x !== 3 || x !== 4 || x !== 5) {
    console.log("por favor, escolha uma das operações disponíveis");
}