var variable;
let variableLet_;


//para comentar alguna linea usar "cntrl + }"  y se comentará automaticamente
// const constante;


const constante = "Hola soy una constante";
console.log(constante) 
//constante = "Adiós" // nos da un error

var a = 1;
console.log(a); 1

a = 4;
console.log(a); 4

let b = 3;
console.log(b);

b = 5;
console.log(b);


//"var" afecta a todo el código

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable)

//"let" afecta solo a la linea de código donde está definido

let variableLet = "Hola soy una variable LET"

for (let i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET"
}

console.log(variable);
