//Iterar los valores de una lista 
//Forma antigua y poco eficiente
const array = ["hola", 1, 2, undefined, true, "adios"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 5, 5, 6, 22, 55]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

//Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 2
const variable = array.find(valor => {
    if (valor === 2){
        return true;
    }
})
console.log(variable);

const listaObjetos = [
    { nombre: "Juan", edad: 22},
    { nombre: "Camilo", edad: 17},
    { nombre: "Eustacio", edad: 103},
    { nombre: "Josefa", edad: 99},
    { nombre: "Jeremias", edad: 6}
]

//FORMA CON MUCHAS LINEAS DE TEXTO
// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Camilo"){
//         return true
//     }
// })

//FORMAS CON MENOS LINEAS DE TEXTO
// const objeto = listaObjetos.find(o => {
//     return o.nombre === "Camilo"
// })

//FORMAS CON AÚN MENOS LINEAS DE TEXTO (EFICIENTE)
const objeto = listaObjetos.find(o => o.nombre === "Camilo");
console.log(objeto.edad) 

const { edad } = listaObjetos.find(o => o.nombre === "Camilo");
console.log(edad)
