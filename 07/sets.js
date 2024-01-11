// Sets o conjuntos. Solo permiten almacenar elementos únicos
const array = [1, 2, 3, 4, 5];

const miSet = new Set(array)
console.log(array);
console.log(miSet);

//.add()
miSet.add(9);
console.log(miSet);

//.delete()
miSet.delete(1);
console.log(miSet);

//.has()
console.log(miSet.has(40));

//size
console.log(miSet.size);

miSet.forEach(valor => {
        console.log(valor);
})

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);