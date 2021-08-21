//var - Não é mais utilizada

var altura = 5;
var comprimento = 7;
area_1 = altura * comprimento;
console.log(area_1)
var area_1; 

//let
//let form = 'triângulo'
let form = 'retângulo'
let height = 8;
let length = 6;
let area_2;

if (form == 'retângulo') {
    area_2 = height * length;
} else {
    area_2 = (height * length)/2;
}
console.log(area_2)

//const
const formGeo = 'quadrado'
const h = '3'
const c = '9'
//const a; Nesse caso ela tem que ser LET porque ela vai mudar de valor ao longo do programa. Não seria uma boa pratica.
let area; //permite trocar o valor mas precisa ser declarada antes.

if(formGeo == 'quadrado'){
    a = h * c;
} else {
    a = (h * c) / 2;
}
console.log(a)

