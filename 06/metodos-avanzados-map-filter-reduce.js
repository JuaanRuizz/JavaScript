//Trabajar con métodos más avanzados 
//.map() => Trasnformar elementos de una lista .filter() => Filtrar .reduce() => Obtener un objeto o un "algo" a traves de una lista

const array = ["Bogotá", "Cali", "Medellín", "Barranquilla", "Pasto", "Tunja"];
const val = array.forEach(v => {
    console.log(v);
    return 4
})
console.log(val)

// .map() sin optimizar
    // const newArray = array.map((valor, indice) => {
    //     return `${indice + 1} - ${valor}`
    // })
    // console.log(newArray);

// .map() optimizado
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray);

// .filter()
const listaObjetos = [
    { nombre: "Juan", edad: 22},
    { nombre: "Camilo", edad: 17},
    { nombre: "Eustacio", edad: 103},
    { nombre: "Josefa", edad: 99},
    { nombre: "Jeremias", edad: 6}
]
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos.filter (obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter (obj => obj.nombre !== "Jeremias");
console.log(nuevaLista);

//.reduce()  /cur = Cada uno de los objetos de la lista de objetos (valor actual) /acumulado = Valor que se va acumulando a medida que se ejecuta el código /i = índice /arrayOriginal = Lista sin modificar 
const valores = [3, 43, 32, 2, 89, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);