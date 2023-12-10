// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Array de planetas
const sistemaSolar = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Neptuno"
];

// Funcion para listar planetas
const listarPlanetas = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("Planeta " + (i+1) + " : " + array[i]);
    }
}

// Se listan planetas
listarPlanetas(sistemaSolar);