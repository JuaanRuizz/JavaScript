//Métodos de cadenas de texto (parte 3)
//https://regexr.com
let texto_largo = "Lo que no te mata te hace más fuerte, pero en el caso de Sung Jinwoo, lo que lo mató lo hizo más fuerte. Después de ser brutalmente asesinado por monstruos en una mazmorra de alto rango, Jinwoo regresó con el Sistema, un programa que solo él puede ver y que eleva su nivel en todos los sentidos. Ahora, está decidido a descubrir los secretos detrás de sus poderes y la mazmorra que los engendró."

console.log(texto_largo.match(/en/g))

// ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("mazmorra"))

// Saber si un texto empieza con una palabra 
console.log(texto_largo.startsWith("Lo que no te mata"))

//Saber si un texto termina con una palabra 
console.log(texto_largo.endsWith("engendró"))
