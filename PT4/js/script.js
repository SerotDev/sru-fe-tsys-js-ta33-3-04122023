// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Invierte posiciones array texto
let texto = ["H","o","l","a"];
console.log("Texto original: " + texto.join(""));
console.log("Texto invertido: " + texto.reverse().join(""));