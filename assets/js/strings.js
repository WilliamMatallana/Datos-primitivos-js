let doble = "sgsfgsfgsdfg"
let simples = 'DASASFVAV'
let backlist = `mjnhbgdf`

let lista_invitados = `Invitados:
*Maria
*Juan
*Pedro
*Miguel
*Diana
`;

// alert(lista_invitados);

// caracteres especiales \

/*
\n -> Nueva línea, salto de linea
\t -> Tabulación
\\ -> Backsalash
\', \", \` -> cada una de las comillas
*/

console.log("Hola\nMundo");
lista_invitados = "Invitados:\n*Maria\t*Juan\t*Pedro\t*Miguel\t*Diana";
console.log(lista_invitados);

// longitud de cadenas

console.log("123".length)
console.log("Mi\n".length)

let str = 'Hola';

console.log(str[0]);
console.log(str.charAt(0));
console.log(str[-2]);
console.log(str.at(-2));

// for .. of

// for(let char of "Hola") {
//     alert(char)
// }

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "hola mundo";
console.log(str.charAt(0).toUpperCase() + str[1] + str[2] + str[3]);
console.log(str.charAt(0).toUpperCase() + str.slice(1));
indexof