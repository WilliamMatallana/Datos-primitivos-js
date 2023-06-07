/////////////////////
// Arrays - Arreglos
/////////////////////

// Permite tener información ordenada
// 0 .. n

let arreglo = new Array();
let arr = [];

let fruits = ["Papaya", "Piña", "Mango", "Fresa", "Mora", "Lulo"];

console.log(fruits[0]);
console.log(fruits[5]);
console.log(fruits[3]);

console.log(fruits);

fruits[0] = "coco"
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
console.log(fruits.length -1);

console.log(fruits[fruits.length - 1]);

console.log(fruits.at(-1));

// push, pop, shift, unshift

// push: inserta un elemento al final del arreglo
// pop: obtiene el elemento final del arreglo y lo elimina

fruits.push("Mangostino");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

// shift: extrae el primer elemento del arreglo
// unshift: Agrega un elemento al comienzo del arreglo

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("Guanábana");
console.log(fruits);


// Crear una función que agregue el nombre ingresado por parámetro al arreglo names
// Utilizar un prompt que use la función para agregar nombres
// Escribir el código para insertar la cantidad de nombres que indique el usuario
// Mostrar los nombres que hay en el arreglo

// let names = [];

// let cantidadNombres = prompt("ingrese cantidad de nombres a ingresar");

// let contador = 1

// while (contador <= cantidadNombres) {
    
//     function addName(nombre) { 
//         names.push(nombre) 
//     };

//     let nombre = prompt("Ingrese el nombre a agregar");
    
//     addName(nombre);
    
//     contador += 1;
    
// };

// for (let nombre of names) {
//     console.log(nombre);
// }




console.log(fruits.length);
// Truncando el arreglo
fruits.length = 2;
console.log(fruits.length);
console.log(fruits);