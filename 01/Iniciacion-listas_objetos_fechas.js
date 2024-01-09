//Listas, array o arreglo --> Conjunto de variables puestas en orden, los elementos en las listas se numeran de 0 a n elementos. Siempre se empieza con el 0, el primer item no es el 1, es el 0. Las listas pueden tener listas dentro de ellas.
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3)
lista3[0] = "Soy el primer elemento, index 0";

console.log(lista);
console.log(lista2);
console.log(lista3);

//Objetos--> Los objetos en JS son representaciones en datos de objetos en la vida real.
const movil = {
    altura: 10,
    anchura: 5,
    marca: "VIVO",
    isWhite: false,
    contactos: ["Juan", "Maria", "Luis"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}
console.log(movil.tarjeta.marca)
movil.anyo = 2019;
movil.marca = "Apple"
console.log(movil.marca)

//Fechas
//Librerias de apoyo Moment.js

const ahora = new Date ();
console.log(ahora);

const fecha_milis = new Date (10);
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo);
