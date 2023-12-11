// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

// Funcion para mostrar las recetas
const mostrarRecetas = (recetas) => {
  recetas.forEach((receta) => {
    const { nombre, tiempoPreparacion, ingredientes } = receta;
    console.log("-".repeat(30));
    console.log("Nombre de la receta:", nombre);
    console.log("Tiempo de preparación:", tiempoPreparacion);
    console.log("Ingredientes: " + ingredientes.join(", "));
  });
};

//declaramos array de recetas
const recetas = [
  {
    nombre: "Macarrones con tomate",
    tiempoPreparacion: "30 minutos",
    ingredientes: [
      "Macarrones",
      "Tomate frito",
      "Queso",
      "Chorizo",
      "Oregano",
      "Sal",
    ]
  },
  {
    nombre: "Espaquetis a la carbonara",
    tiempoPreparacion: "40 minutos",
    ingredientes: [
      "Espaguetis",
      "Bacon",
      "Mantequilla",
      "Huevo",
      "Leche",
      "Nata",
      "Queso",
      "Sal",
    ]
  },
];

// LLamada a la función de mostrar recetas
mostrarRecetas(recetas);
