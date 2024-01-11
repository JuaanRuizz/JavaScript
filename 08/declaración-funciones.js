// ¿Qué son las funciones? ¿Cómo se declaran? ¿Cómo se utilizan?
const non = "Juan";

saludar(non);

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

///

let nombre_2 = "Andrés";
console.log(nombre_2);

despedir(nombre_2);

function despedir(nombre) {
    nombre = "Sandra";
    console.log(`Adiós ${nombre}`);
}

console.log(nombre_2);

///

let persona = {nombre: "Juan", apellido:"Ruiz"}

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Hernández"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

///

function imprimeNumero(numero = 7){ //Parámetros opcionales con un valor por defecto
    console.log(numero);
}

imprimeNumero(9) // Si no se le coloca nada el número se inicializará en un 7

///

function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1 , 3, 9, 2, "hola");

/// 
function suma(...nums) {
    return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 24);

console.log(s);

///

function multiplicar(a = 0, b = 0) { // Todo lo que esté entre las llaves "{}" está dentro del ámbito de la función
    return a * b
}

console.log(multiplicar(4, 9));