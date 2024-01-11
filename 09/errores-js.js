const miFuncion = val => {
    if (typeof val === "number"){
    return 2 * val
    }
    // return false
    throw new Error("El valor debe ser de tipo número");
}

// const elDoble = miFunción("ala")
const numero = 8;

try {
    //Código que puedo fallar
    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR")
    console.error(`El valor de e es: ${e}`)
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error como si no")
}
//Siempre es bueno envolver el código con TRY & CATCH 

// InternalError: Se lanza cuando hay problemas internos como ejercicios de recursividad que pasan el overflow. SyntaxError: Errores en la escritura. TypeError: Errores en el tipo RangeError: No esta en el rango ej, un array con 10 elementos y queremos llegar al elemento 12, se ejecuta éste error.  ReferenceError: Tratar de acceder a una referencia que no existe.

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
