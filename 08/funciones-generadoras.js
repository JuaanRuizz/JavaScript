//función generadora

function* generaId() {   //Como es una función generadora se le coloca un * despues de function
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id //Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

//De esta manera se llama a esta función
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)