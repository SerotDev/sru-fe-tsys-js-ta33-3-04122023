// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

//funcion para obtener el nombre completo
const fullName = (persona) => {
  const { nombre, apellidos } = persona;
  return nombre + " " + apellidos;
};

//declara persona con sus datos
const persona = {
  nombre: "Sergi",
  apellidos: "Rodriguez Utge",
  edad: 28,
  direccion: "Mi casa",
  ciudad: "Tarragona",
  pais: "España",
};

//mostramos nombre completo de la persona
console.log("Nombre completo: ", fullName(persona));
