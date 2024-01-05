// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8]

for (var i = 0; i < lista.length; i++) {
    
    if(lista[i] === 3) {
        continue;
    }
    var j = 50;
    console.log(lista[i]);

    if (lista[i] > 5) {
        break;
    }
}


//Cúal es el ámbito de un bucle --> Se refiere al alcance que tienen las variables declsaradase en el bucle
console.log(j)
console.log(i)
