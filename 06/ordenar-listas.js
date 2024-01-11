// Cómo ordenar listas
// *TENER EN CUENTA* Algo que no anoté antes, es que "((a, b) => {})" esto es un "CALLBACK"
// .sort() --> Modifica el array. Ordenar de mayor a menor, menor a mayor
const array = [2, 5, 6, 1, 88, 65, 34, 22]

console.log(array);
array.sort((a, b) => {
    if (a < b){
        return -1
    } else if (a > b){
        return +1
    } else { // a === b
        return 0
    }
})
console.log(array);

//Ordenar únicamente arrays numéricos
const arrayNumerico = [1, 4, 5, ,6 ,77, 8, 33, 21, 134];

arrayNumerico.sort((a,b) => a - b);
console.log(arrayNumerico);

//Interesante en arrays de objetos
const listaObjetos = [
    { nombre: "Juan", edad: 22},
    { nombre: "Camilo", edad: 17},
    { nombre: "Eustacio", edad: 103},
    { nombre: "Josefa", edad: 99},
    { nombre: "Jeremias", edad: 6}
]

//Forma 1
listaObjetos.sort((a,b) => {
    if (a.edad < b.edad) {
        return -1
    }else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
})

console.log(listaObjetos);

//Forma 2
listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos);

