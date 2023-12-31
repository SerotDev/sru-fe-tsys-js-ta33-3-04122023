// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Declaramos y desestructuramos array
const listaParticipantes = [ "Sergi", "David", "Toni", "Ainara", "Carla"];
const [ganador, segundo, ...restoCompetidores] = listaParticipantes;

// Mostramos datos
console.log("Ganador:", ganador);
console.log("Segundo:", segundo);
console.log("Resto de competidores:", restoCompetidores.join(", "));