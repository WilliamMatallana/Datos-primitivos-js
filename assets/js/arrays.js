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
fruits.length = 4;
console.log(fruits.length);
console.log(fruits);

// delete fruits[1];
// console.log(fruits.length);
// console.log(fruits[1]);
// console.log(fruits);

// splice

fruits.splice(1, 1); // desde el indice 1, elimine 1 elemento
console.log(fruits.length);
console.log(fruits);



arr = ["Yo", "estudio", "JavaScript", "en", "el", "SENA"];
console.log(arr);
arr.splice(1, 2, "voy", "a", "bailar");
console.log(arr);
let datos = arr.splice(1, 3);
console.log(datos);
console.log(arr);
arr.splice(1, 0, "estudio", "JavaScript",);
console.log(arr);

// ¿Que hace la función slice? De un ejemplo donde use su nombre completo

// let miNombre = ["william", "Steve", "Matallana", "Triviño"];

// // Cree un arreglo con los apellidos, usando slice1

// let apellidos = miNombre.slice(-3, -2);

// console.log(apellidos);
// console.log(miNombre);

let nombre = ["Juam", "Mateo"];
let apellido = ["Morales", "Quintero"];

let nombreCompleto = nombre.concat(apellido, "No", "Existe", "en", "la", "vida", "real");
console.log(nombreCompleto);

// forEach

// ["Mateo", "Marcos", "Lucas", "Juan", "Maria", "Magdalena"].forEach((item, index, array) => {
//     console.info(` ${item} tiene el índice ${index} en ${array}`);
// });

// ["Mateo", "Marcos", "Lucas", "Juan", "Maria", "Magdalena"].forEach(alert);

/* 
indexOf | lastIndexOf | includes => ¿Para que sirven? De un ejemplo para cada uno con arreglos que involucren su nombre
*/

// let miNombre = ["william", "Steve", "Matallana", "Triviño"];

// // indexOf
// console.log(miNombre.indexOf("william"));

// // lastIndexOf
// console.log(miNombre.lastIndexOf("Matallana"));

// // includes
// console.log(miNombre.includes("Matallana"));
// console.log(miNombre.includes("Hernández"));

// find 

let users = [
    {id: 1, name: "Mateo"},
    {id: 2, name: "Marcos"},
    {id: 3, name: "Lucas"},
    {id: 4, name: "Juan"},
    {id: 5, name: "Mateo"},
    {id: 6, name: "Maria"},
];

// let result = arr.find(function(item, index, array) {/*cuerpo*/});

let user = users.find(item => item.id == 3);

console.log(user);
console.log(user.name);

// findIndex

console.log(users.findIndex(user => user.name == "Maria"));
console.log(users.findIndex(user => user.name == "Pedro"));
console.log(users.findIndex(user => user.name == "Mateo"));

// findLastIndex
console.log(users.findLastIndex(user => user.name == "Mateo"));

// filter
// let result = arr.find(function(item, index, array) {/*cuerpo*/});

let some_user = users.filter(item => item.name == "Mateo");
console.log(some_user.length);
console.log(some_user);

some_user.forEach(user => console.log(user.name));

some_user = users.filter(item => item.id < 3);
some_user.forEach(user => console.log(user.name));

//---------------------------
// Transformar un array
//---------------------------

// map
// let result = arr.map(function(item, index, array) {/*cuerpo*/});

let lengths = users.map(item => item.name.length);
console.log(lengths);

let numbers = [8, 4, 15, 1, 7, 0, 2];

let doubles = numbers.map(numbers => numbers *2);
console.log(numbers);
console.log(doubles);

// sort

numbers.sort();
console.log(numbers);

function comparar_numeros(a, b) {
    if( a > b) return 1;
    if( a == b) return 0;
    if( a < b) return -1;
};

numbers.sort(comparar_numeros);
console.log(numbers);

// reverse

numbers.reverse();
console.log(numbers);

// split

let nombres = `Mateo
Marcos
Lucas
Juan
`;

let nombresArr = nombres.split("\n");
console.log(nombresArr);

nombresArr = nombresArr.filter(item => item != "");
console.log(nombresArr);

// reduce / reduceRight

// let value = arr.reduce(function (acumulador, item, index, array) {

// }, inicio);

numbers = [23, 5, 17, 38, 24];

let suma = numbers.reduce((total, num) => total + num, 0);
console.log(suma);
suma = numbers.reduceRight((total, num) => total + num);
console.log(suma);

console.log("----------------------");

console.log(typeof{});
console.log(typeof[]);

console.log(Array.isArray({}));
console.log(Array.isArray([]));

// join

let nombresStr = nombresArr.join(";");
console.log(nombresStr);