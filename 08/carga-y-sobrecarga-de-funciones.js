// Carga y sobrecarga de funcioones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}
saludar()

/// 1. Cargar la función global ()
/// 2. añade saludar () por encima de global ()
/// 3. Ejecuta hola() y luego viene  saludar() y global()
/// 4. Cuando termina la función hola()  la elimina de la carga y se queda con saludar() y global()
/// 5. Vuelve al inicio. 
/// Todo esto ocurre para no sobrecargar la memoria (caché) si no se que se van tomando las funciones a medida que aparecen y de la misma manera cuando terminan de ejecutarse se eliminan
