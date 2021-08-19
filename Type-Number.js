// Tipo Number

const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica)


// Ponto Flutuante 

const numeroPontoFlutuante = 3.3;
const numeroFlutuanteSemZero = .5;

const operacaoMatematica_2 = numeroPontoFlutuante - numeroFlutuanteSemZero

console.log(operacaoMatematica_2)

// NaN -> Not A Number (Não é um número) - Javascript tentou fazer uma operação matemática com um elemento que não é um número

// Se dividir por zero o resultado é INFINITY 
var a = 10;
var b = 0; 
var c = a / b
console.log(c)