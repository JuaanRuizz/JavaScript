//Métodos de cadena de texto (parte 2)
let input = "Septiembre"
let db = "septiembre"

console.log(input === db) 

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toLowerCase())
console.log(input.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena"
let str_2 = "y yo soy la segunda cadena"

//Este método es mejor para las strings
console.log(str_1.concat(" ", str_2))

//Este método es mejor para los número, preferible no usar con strings
console.log(str_1 + " " + str_2)

//Con las comillas invertidas se logra concatenar strings tambien
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3= "    Hola soy un string con espacios al final.    "
console.log(str_3.length)

//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" //Los strings tambien se pueden manejar como listas ["H", "o", "l", "a"," " ...]

console.log(str_4.charAt(14))
console.log(str_4[14])

//Obtener la posición de una palabra dentro de un string
let str_5 = "Hola soy Juan y me gustan los perros. Mi nombre completo es Juan Manuel Ruiz"
console.log(str_5.indexOf("Juan"))
console.log(str_5.charAt(9))
//El .indexOF solo trae la posición  de la primera vez en el string que aparece la palabra busacada

//.lastindexOF para traer la última instancia
console.log(str_5.lastIndexOf("Juan"))

