// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

//declara persona con sus datos
const persona = {
  nombre: "Sergi",
  apellidos: "Rodriguez Utge",
  edad: 28,
  direccion: "Mi casa",
  ciudad: "Tarragona",
  pais: "España",
};

// Desestructurar el objeto para acceder a tres propiedades
const { nombre, edad, ciudad } = persona;

// Imprimir los resultados
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);
