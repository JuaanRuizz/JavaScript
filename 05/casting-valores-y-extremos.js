//Operador .valueOf() --> Obtener valores numéricos a partir de literales  
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf())

console.log(b.valueOf())

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NaN(Not added Number) - Infinity
let n = Number('adiós');
console.log(n); //Error (algo no cuadra) NaN 
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

//Cómo convertir los stringsa valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2

console.log(typeof numero);
console.log(numero + num2); //El "+" esta concatenando las cadenas de texto ya que "numero" es un string.

console.log(Number(numero) + num2) //El operador "Number" cambia el type de un string a un number.

console.log(parseInt(numero)) //Entero

console.log(parseFloat(num2)) //Decimal

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3))

//Números hexadecimales --> En base 16. Bite es un conjunto de 8 números (1 y 0). No existen los decimales dentro de los hexadecimales
let numHex = '0x3a5b7'; //Todos los números hexadecimales empiezan por '0x'
console.log(parseInt(numHex, 16));

//Obtener los valores máximos y mínimos en Javascrip
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 1023) //Elevar se hace con "**". El mayor elevado que puede manejar JS es 1023 para un número de 1 cifra entera. 
