/*

Crear el método convertirEnCamel, el cual reciba como parámetro un String con palabras separadas con guión y devuelva palabras con mayúscula.
convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta

*/

let ejemplo = prompt("Ingrese las palabras separadas por guion");

function convertirEnCamel(palabrasConGuion) {
  let palabras = palabrasConGuion.split("-");
  let resultado = "";
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (i !== 0) {
        palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
    resultado += palabra;
  }
  return resultado;
}
  
console.log(convertirEnCamel(ejemplo));
  