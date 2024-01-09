//Strings -  cadenas de caracteres
let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';

console.log(str_dbl);
console.log(str_sng);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'

console.log(str_comillas)
console.log(str_comillas_simples)


//Comillas invertidas (backticks)  -->  Alt Gr + } (Dos veces)
let str_backticks = `Hola esto es un string con backticks`

console.log(str_backticks);

let nombre = "Juan"
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

//Plantillas HTML

let plantilla = `
<html>
    <h1> Página web de ${nombre} <h1>
    <p> Este es un párrafo </p>
</html>            
`;

console.log(plantilla);

// introducción de variables en html
let libros = ["Cien años de soledad", "Mil leguas de viaje submarino", "La vorágine", "Amazing Spiderman #1"]



