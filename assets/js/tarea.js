//---------------------------------\\

function capitalizeFirstLetter(frase) {
    return frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();
  }
  
  let ejemplo = prompt ("ingrese la frase");
  console.log(capitalizeFirstLetter(ejemplo));

//---------------------------------\\

function buscarSpam(frase) {
    let palabrasClave = ["viagra", "xxx"];
    let regex = new RegExp(palabrasClave.join("|"), "i");
    return regex.test(frase);
  }
  
  let ejemplo1 = prompt("Ingrese la frase");
  console.log(buscarSpam(ejemplo1));
  

//---------------------------------\\

function convertirADinero(dinero) {
    const numero = parseInt(dinero.replace(/[\\\\$,.]/g, ''));
    return `La cantidad de dinero ingresada es: ${dinero}. El número entero resultante es: ${numero}`;
  }
  
  let dinero = prompt ('Ingrese la cantidad de dinero');
  
  console.log(convertirADinero(dinero));

//---------------------------------\\