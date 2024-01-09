// Numbers 
//Declaración de variables numéricas (enteros y con decimales)
let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

//Presición
let c = 0.2;
console.log(b + c); //Esta cantidad de 0´s se da por cómo JS guarda las variables.

//Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100);
