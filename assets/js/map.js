/*
* El método map crea un nuevo arreglo con los resultados de la llamada de una función
*/

let numbers = [1, 5, 10, 15];
let doubles =  numbers.map(function(x) {
    return x * 2;
})

console.log(numbers);
console.log(doubles);

// crear una función que reciba una arreglo de números y devuelva un arreglo con las raíces cuadradas de los npumeros dentro del arreglo
let arreglo = [1, 4, 9, 16, 25];
function calcular_raices(numeros) {
    return numeros.map(numero => Math.sqrt(numero));
};
  
console.log(arreglo);
console.log(calcular_raices(arreglo));


//***************************
// Asignación destructurante
//*************************** 

let arr = ['Juan', 'Alvarado'];

/*
let nombre = arr[0];
let apelido = arr[1];
console.log(nombre + ' ' + apelido);
*/

let [nombre, apellido] = arr;
console.log(nombre);
console.log(apellido);

arr = ['Juan', 'Alvarado', 'Developer', 'Sena'];

let [name, , cargo] = arr;

console.log(cargo);

let [, , , empresa] = arr;

console.log(empresa);

let user = {};

[user.name, user.surname, user.job, user.enterprise] = arr;

console.log(user);