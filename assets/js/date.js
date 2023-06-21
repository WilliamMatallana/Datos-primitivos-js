/*
* Fechas parte 2
*/

// let today = new Date();
// console.log(today);

// today.setHours(0, 0,0);
// console.log(today);

// let aDay = new Date(2013, 1, 31);
// console.log(aDay);

// aDay.setDate(aDay.getDate() +2);
// console.log(aDay);

// aDay.setSeconds(aDay.getSeconds() + 70);
// console.log(aDay);

// aDay.setDate(1);
// console.log(aDay);

// aDay.setDate(0);
// console.log(aDay);

// TODO: crear una función FLECHA que calcule la cantidad de dias que faltan para que se termine el mes dado como parámetro una fecha.

let diasDelMes = function(fecha) {
    let ultimoDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
    let diasFaltantes = ultimoDiaDelMes - fecha.getDate() - 1;
    return `Faltan ${diasFaltantes} días para que termine el mes.`;
}

let fechaDeEjemplo = new Date('2023-04-18');
console.log(diasDelMes(fechaDeEjemplo));


