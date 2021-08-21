//Tipo de Dado 
//Booleanos

//Conversão Implícita 

const numero = 456;
const numeroString = '456a' //Atribuição de valor OBS. Não pode ter um caracter no meio do número
const num_1 = "2"
const num_2 = "3"

console.log(numero == numeroString) //Converteu o numero em uma string

console.log(numero === numeroString) //Comparando o Tipo da Variável

console.log(numero + numeroString) // Concatenação

//Conversão Explícita

console.log(numero + Number(numeroString))

console.log(String(numero) + numeroString)

console.log("O telefone é " + numero.toString()); //Converter em string

console.log(+ numeroString) //Converter em numero