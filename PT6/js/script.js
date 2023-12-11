// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

const dividirParesImpares= (array) => {
  let pares = [];
  let impares = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? pares.push(array[i]) : impares.push(array[i]);
  }
  return { pares, impares };
}

const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { pares, impares } = dividirParesImpares(arrayNums);

console.log("Array de números pares:", pares.join(", "));
console.log("Array de números impares:", impares.join(", "));
console.log("Arrays de números pares e impares concatenados:", pares.concat(impares).join(", "));
