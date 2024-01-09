//Cómo trabajar con listas (arrrays, arreglos, vectores...)
let var1 = 45;
let array = [1, "Hola", true, {id: 5}, null, undefined];

console.log(array);

//Acceder a los valores de un array a través de su posición
//array[indice] --> 0, 1, 2, 3, ...
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//Métodos para introducir nuevos valores en nuestros arrrays 
// . push() .unshift() --> Mutan el valor de nuestro array

//Valores al final --> push()
array.push("final");
console.log(array);

//Valores al inicio --> unshift()
array.unshift("Inicio", 88);
console.log(array);

// Métodos para eliminar valores de un array
//.pop() .shift() --> Mutan el valor del array

//Valores al final --> pop()
array.pop();
console.log(array)

//Valores al inicio --> shift()
array.shift();
console.log(array)

//Método para eliminar, modificar o añadir valores en nuestro array 
// .splice(x, y, z)
const array2 = [1, 2, 3, 4, 5, 6]

//Elminar valores .splice(indice, numValoresAEliminar)
array2.splice(2, 3);
console.log(array2);

//Añadir valores .splice(indice, 0, valoresa agregar)
array2.splice(2, 0, "hola", 3, 4);
console.log(array2);

//Modificar valores .splice(indice, 1, valores que van a entrar modificando)
array2.splice(2, 1, 3);
console.log(array2);

