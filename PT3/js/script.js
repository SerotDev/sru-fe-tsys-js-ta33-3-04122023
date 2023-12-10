// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

//declaramos array con datos y mostramos contenido
let array = ["DOM", "BOM", "Funciones", "Arrays"];
console.log("Array original : ", array.join(", "));

//realizamos diferentes modificaciones en el array
array.splice(array.indexOf("DOM"), 1, "Objetos")
console.log("Elimina 'DOM' y añade 'Objetos' : ", array.join(", "));
array.splice(array.indexOf("Arrays"), 1, "ArraysDifíciles")
console.log("Elimina 'Arrays' y añade 'ArraysDifíciles' : ", array.join(", "));
console.log("Copia de los últimos dos elementos : ",  array.slice(-2).join(", "));
console.log("Índice de 'Funciones' : ", array.indexOf("Funciones"));
