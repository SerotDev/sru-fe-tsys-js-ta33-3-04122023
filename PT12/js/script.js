// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

// Funcion para mostrar la propiedad de una persona
const mostrarPropiedades = (personas, propiedad) => {
  personas.forEach((persona) => {
    console.log(persona.nombre + "[" + propiedad + "]: " + persona[propiedad]);
  });
};

// Declaramos un array de objetos personas 
const personas = [
  { nombre: "Sergi Rodriguez Utge", edad: 28, ciudad: "Tarragona" },
  { nombre: "Nerea Prados Mata", edad: 21, ciudad: "Reus" },
  { nombre: "Cristo Pliakas Benitez", edad: 31, ciudad: "Cambrils" },
];

// Llamadas a la función para mostrar las propiedades de "edad" y "ciudad" de cada persona
mostrarPropiedades(personas, "edad");
mostrarPropiedades(personas, "ciudad");
