// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Array de letras
const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Funcion que muestra por pantalla la longitud del array
let longitudArray = (array) => {
    console.log("Longuitud del array " + array.length);
}
// Funcion que dado un rarray retorna un valor aleatorio
let letraRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// Muestra resultado resultado
longitudArray(array);
console.log("Letra aleatoria: " + letraRandom(array));