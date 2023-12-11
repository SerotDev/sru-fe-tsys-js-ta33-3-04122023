// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

// Declaramos la clase Receta
class Receta {
  constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
  }
}

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

//instanciamos recetas
const receta1 = new Receta(
  "Macarrones con tomate",
  "30 minutos",
  ["Macarrones","Tomate frito","Queso","Chorizo","Oregano","Sal"]
);
const receta2 = new Receta(
  "Espaquetis a la carbonara",
  "40 minutos",
  ["Espaguetis","Bacon","Mantequilla","Huevo","Leche","Nata","Queso","Sal",]
);

// Las añadimos a un array de recetas
const recetas = [receta1, receta2];

// LLamada a la función de mostrar recetas
mostrarRecetas(recetas);
