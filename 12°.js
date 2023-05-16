// Escribe un programa que responda a un usuario que quiere comprar un helado en una 
// conocida marca de comida rápida, cuánto le costará en función del topping que elija.
// • El helado sin topping cuesta 50 MXN.
// • El topping de oreo cuesta 10 MXN.
// • El topping de KitKat cuesta 15 MXN.
// • El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
// “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

const basePrice = 50; // precio base del helado
const oreoPrice = 10; // precio del topping de oreo
const kitkatPrice = 15; // precio del topping de kitkat
const browniePrice = 20; // precio del topping de brownie

const topping = prompt("¿Qué topping desea agregar a su helado? (oreo, kitkat o brownie)");

if (topping === "oreo") {
  console.log(`El precio total de su helado con topping de oreo es de ${basePrice + oreoPrice} MXN.`);
} else if (topping === "kitkat") {
  console.log(`El precio total de su helado con topping de KitKat es de ${basePrice + kitkatPrice} MXN.`);
} else if (topping === "brownie") {
  console.log(`El precio total de su helado con topping de brownie es de ${basePrice + browniePrice} MXN.`);
} else {
  console.log("Lo sentimos, no tenemos este topping. El precio total de su helado sin topping es de 50 MXN.");
}
