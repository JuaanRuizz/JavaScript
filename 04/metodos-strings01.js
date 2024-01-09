// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

//Obtener partes de cadenas de caracteres
//slice ( substring) substr ()
let slice_str = str.slice(0, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10);
console.log(substring_str)


let substr_str = str.substr(5, 10)
console.log(substr_str)

//Reemplazar parte del contenido de un string
let cadena = "Hola me llamo Juan";
console.log(cadena)

//Al utilizar cadenas (strings) solo reemplaza la primera instancia
console.log (cadena.replace('Juan', 'Manuel'))

let texto_largo = "We've combined the power of the Following feed with the For you feed so there's one place to discover content on GitHub. There's improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. "

console.log(texto_largo.replace ('combined', 'mixed'))

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/you/g, 'tu'))

