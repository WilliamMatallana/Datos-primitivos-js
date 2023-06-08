/*

Crear el método convertirEnCamel, el cual reciba como parámetro un String con palabras separadas con guión y devuelva palabras con mayúscula.
convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta

*/
/*
let ejemplo = prompt("Ingrese las palabras separadas por guion");

let minus = ejemplo.toLowerCase();

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
  
console.log(convertirEnCamel(minus));
*/

/*escribir la función filtrarRango(arreglo, a, b) que obtenga un arreglo, busque los elemntos con valor mayor o igual a 'a' y menor o igual a 'b' y devuelva un arreglo con los resultados*/

let numbers = [1, 2, 7, 4, 3, 6, 10, 8, 9, 5];

function filtrarRango(arreglo, a, b) {
  return arreglo.filter(elemento => elemento >= a && elemento <= b);
}

console.log(filtrarRango(numbers, 5, 8));
console.log(numbers);