//break y continue
//labels

let unidades = 0 
let decenas = 0

bucleDecenas: while (true) {
    blucleUnidades:while(true){
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10){
            unidades = 0
            break blucleUnidades
        }
    }
    decenas++
    if (decenas === 2){
        console.log(`El número actual es: ${decenas}${unidades}`)
        break bucleDecenas
    }
    decenas++
}
console.log("Ya hemos terminado")