// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por 
// un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros 
// consumidos se ha de añadir 10 al total.
// Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

// Solicitamos la distancia recorrida al usuario y guardamos el valor
let distancia = parseFloat(prompt("¿Cuántos kilómetros recorriste?"));

// Solicitamos el tipo de vehículo al usuario y guardamos el precio por kilómetro correspondiente
let tipo_vehiculo = prompt("¿Qué tipo de vehículo usaste? (coche, moto, autobús)");
let precio_kilometro;
if (tipo_vehiculo == "coche") {
  precio_kilometro = 0.20;
} else if (tipo_vehiculo == "moto") {
  precio_kilometro = 0.10;
} else if (tipo_vehiculo == "autobús") {
  precio_kilometro = 0.50;
} else {
  alert("El tipo de vehículo ingresado no es válido.");
  throw new Error("Tipo de vehículo inválido");
}

// Calculamos el extra por litros consumidos y el total a pagar
let litros_consumidos = parseFloat(prompt("¿Cuántos litros de gasolina consumiste?"));
let extra;
if (litros_consumidos <= 100) {
  extra = 5;
} else {
  extra = 10;
}
let total_a_pagar = (precio_kilometro * distancia) + extra;

// Mostramos el total a pagar al usuario
alert("El total a pagar es de $" + total_a_pagar.toFixed(2) + ".");
