/*
* El método map crea un nuevo arreglo con los resultados de la llamada de una función


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


let [nombre, apellido] = arr;
console.log(nombre);
console.log(apellido);

arr = ['Juan', 'Alvarado', 'Developer', 'Sena'];

let [name, , cargo] = arr;

console.log(cargo);

let [, , , empresa] = arr;

console.log(empresa);

// let user = {};
// [user.name, user.surname, user.job, user.enterprise] = arr;

console.log(user);

let [name1, name2, ...rest] = ['Mateo', 'Marcos', 'Lucas', 'juan'];
console.log(name1);
console.log(name2);

// ¿Y el resto?
console.log(rest.length);

let [name3 = 'Gest', lastname = 'Anonymous'] = ['María'];
console.log(name3);
console.log(lastname);

// Desectructuración de objetos

let options = {
    title: 'Menu',
    width: 300,
    height: 500,
};

// let {height: h, width: w, title} = options;
// console.log(title);
// console.log(w);
// console.log(h);
// console.log(options);

// let opt = {
//     title: 'Menu',
// };
// let {height = 100, width = 200, title2} = opt;
// console.log(width);
// console.log(height);
// console.log(title2);

// let {title} = options;
// console.log(title);
*/

let options = {
    title: 'Menu',
    width: 300,
    height: 500,
};

let {title, ...rest} = options;
console.log(rest);

// TODO: cree un objeto llamado user con las propiedades name, years y van a obtener los valores en variables separadas incluyendo la variable isAdmin, que si no se encuentra en el objeto el valor por defecto es false.

let user = {
    name: 'Juan',
    years: '25'
};
  
let { name, years, isAdmin = false } = user;
  
console.log(name);
console.log(years); 
console.log(isAdmin);
  