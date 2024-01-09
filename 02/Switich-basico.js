//Sentencias Switch 
//Siempre declarar un caso "default"

let nota = 5;

switch (nota) {
    case 5:
        console.log("Buen trabajo, ¡Sobresaliente!")
        break;
    case 4:
        console.log("Buen trabajo, pero podraia haberlo hecho mucho mejor")
        break;
    case 3:
        console.log("Has obetnido un suficiente")
        break;
    case 2:
        console.log("No has aprobado por poco")
        break;
    case 1:
        console.log("Mejora")
        break;
    default:
        console.log("error")
        break;
}