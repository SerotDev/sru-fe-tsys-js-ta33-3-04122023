// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Elementos mayores a 5 del array de números: " + arrayNums.filter(element => element > 5).join(", "));