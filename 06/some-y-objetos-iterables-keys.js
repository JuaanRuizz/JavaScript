//¿Cómo saber si algunos de los elementos de una lista cumplen una condición específica
// .some()
const array = [3, 4, 6, 75, 345, -2];

const res = array.some(valor => valor < -0);
console.log(res);

const existe = array.some(valor => valor === 75);
console.log(existe);

const listaObjetos = [
    { nombre: "Juan", edad: 22},
    { nombre: "Camilo", edad: 17},
    { nombre: "Eustacio", edad: 103},
    { nombre: "Josefa", edad: 99},
    { nombre: "Jeremias", edad: 6}
]

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan");
console.log(existeJuan);

//Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Juan"
console.log(str[5]);

const art_str = Array.from(str);
console.log(art_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

//Obtener un iterable de todos los indices de nuestro array / .keys()

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);

