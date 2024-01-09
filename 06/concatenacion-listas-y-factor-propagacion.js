// Cómo unir dos listas .concar(lista2)
const lista1 = ["HOLA", 4, true, null];
console.log(lista1);

const lista2 = ["Adios", 0, false, '4545'];
console.log(lista2);

//No muta los valores de la lista1 o lista2
console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

//Cómo unir dos listas con el factor de propagación
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);
