// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

//Funcion para encontrar elementos repetidos
const encontrarElementosRepetidos = (array1, array2) => {
    // Verifica si hay elementos repetidos
    const elementosRepetidos = array1.filter(elemento => array2.includes(elemento));
    // Imprime los elementos repetidos por consola
    if (elementosRepetidos.length > 0) {
        console.log('Elementos repetidos: ', elementosRepetidos.join(","));
    } else {
        console.log('No hay elementos repetidos.');
    }
}

//declaramos arrays con datos y mostramos contenido
let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
console.log("Array javascript1: ", javascript1.join(","));
console.log("Array javascript2: ", javascript2.join(","));

// Llamamos a la funcion para encontrar elementos repetidos entre los arrays
encontrarElementosRepetidos(javascript1, javascript2);