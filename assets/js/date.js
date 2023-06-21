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

let dias_restantes = (fecha) => {
    let ultimoDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
    let diasFaltantes = ultimoDiaDelMes - fecha.getDate() - 1;
    return `Faltan ${diasFaltantes} días para que termine el mes.`;
}

let fechaDeEjemplo = new Date('2023-04-18');
console.log(dias_restantes(fechaDeEjemplo));


let getDaysToEndMonth = (date) => {
    let end = new Date(date);
    end.setMonth(end.getMonth() + 1);
    end.setDate(0);
    return end.getDate() - date.getDate();
};

console.log('Faltan ' + getDaysToEndMonth(new Date()) + ' dias para que se termine el mes');

// convertir fechas en numeros

let date = Date.now();

for (let i = 0; i < 100000000; i++) {
    let algo = i * i * i;
}

let end = new Date();

console.log(`El tiempo transcurrido es de ${end - date} ms`);// milisegundos

/*
    crear una función flecha llamada getDateAgo que reciba una fecha y una cantidad de días y devuelva el dia del mes que corresponde, contando la cantidad de días y devuelva el dia del mes que corresponde, contando la cantidad de días respecto de la fecha pasada

    * Ejemplo: hoy es 21, si ingresamos la fecha actual junto con el 1, el resultado debe ser 20
    * Ejemplo: hoy es 21, si ingresamos la fecha actual junto con el 5, el resultado debe ser 16
*/

let getDateAgo = (fecha, dias) => {
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() - dias);
    return nuevaFecha.getDate();
  }
  
  let fecha2 = new Date();
  console.log(getDateAgo(fecha2, 1));
  console.log(getDateAgo(fecha2, 5));
  
/* 
    crear una función que indique la cantidad de segundos transcurridos en el dia de hoy
*/

function segundosDelDia() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let segundosTotales = hora * 3600 + minutos * 60 + segundos;
    return `Han transcurrido ${segundosTotales} segundos en el día de hoy.`;
  }
  
  console.log(segundosDelDia());  

/*
    crear una función que indique la cantidad de segundos que faltan para mañana 
*/

function segundosHastaManana() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let segundosTotales = hora * 3600 + minutos * 60 + segundos;
    let segundosHastaMedianoche = 24 * 3600 - segundosTotales;
    return `Faltan ${segundosHastaMedianoche} segundos para que sea mañana.`;
  }
  
  console.log(segundosHastaManana());
  