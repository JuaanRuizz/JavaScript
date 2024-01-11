//Cómo podemos comparar listas
//.every()
const array = [1, 5, -4, 12, 555 ,-14, 87];

//Forma 1
const resultado = array.every(valor => {
    if (valor > 0) {
        return true
    } else {
        return false
    }
})
console.log(resultado)

//Forma 2 (simplificado)
const resultado2 = array.every(valor => valor > 0)
console.log(resultado2);

//comparación de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2)

//Forma 1 
const compararArrays = (array_1, array_2) => {
    if (array_1.length === array_2.length) return false
    const res = array_1.every((valor, i) => {
        if (valor === array_2[i]) return true
        return false
    })
}
console.log(compararArrays(ar1, ar2))

//Forma 2
const compararArrays2 = (array_1, array_2) => {
    if (array_1.length === array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays2(ar1, ar2))
