// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

// Funcion para mostrar la receta
const mostrarReceta = (receta) => {
  const { nombre, tiempoPreparacion, ingredientes } = receta;
  console.log("Nombre de la receta:", nombre);
  console.log("Tiempo de preparación:", tiempoPreparacion);
  console.log("Ingredientes: " + ingredientes.join(", "));
}

//declaramos objeto receta
const receta = {
  nombre: "Macarrones con tomate",
  tiempoPreparacion: "30 minutos",
  ingredientes: [
    "Macarrones",
    "Tomate frito",
    "Queso",
    "Chorizo",
    "Oregano",
    "Sal"
  ]
};

// LLamada a la funcion de mostrar receta
mostrarReceta(receta);
