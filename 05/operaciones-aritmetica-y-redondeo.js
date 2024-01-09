//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b);
//resta
console.log(a - b);
//multipllicación 
console.log(a * b);
//división 
console.log (a / b);

//Representación de los númros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de números décimales 
let c = 3.3;
let d = c*3;

console.log(d);

//.toFixed(x) --> Limitar el número de décimales al valor x
console.log(d.toFixed(3));
console.log(typeof d.toFixed.apply(4));

let e = 33.3333;
let f = 21422148;
console.log(e.toFixed(2));
console.log(f.toFixed(2))

//.toPrecision(x) --> Limita el número de cifras significativas 
console.log(e.toPrecision(4));
console.log(f.toPrecision(5));

// Tanto el .toFixed(x) como el .toPrecision(x) nos devuelven strings
console.log(typeof d.toFixed.apply(4));
console.log(typeof f.toPrecision(5))

