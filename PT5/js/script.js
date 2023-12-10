// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => (document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

//Funcion para intercalar 2 arrays
const intercalarArrays = (array1, array2) => {
  let arrayIntercalado = [];
  if (array1.length >= array2.length) {
    for (let i = 0; i < array1.length; i++) {
      arrayIntercalado.push(array1[i]);
      if (array2.length - 1 >= i) {
        arrayIntercalado.push(array2[i]);
      }
    }
  } else if (array1.length < array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array1.length - 1 >= i) {
        arrayIntercalado.push(array1[i]);
      }
      arrayIntercalado.push(array2[i]);
    }
  }
  return arrayIntercalado;
};

// Declaracion de los dos arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Mostramos contenido de los dos arrays, inercalamos y mostramos resultado intercalado
console.log("Array 1:", array1.join(", "));
console.log("Array 2:", array2.join(", "));
console.log("Resultado intercalado:", intercalarArrays(array1, array2).join(", "));
