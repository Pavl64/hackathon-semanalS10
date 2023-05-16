// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número
// mayor. Considerar el caso en que 2 números sean iguales.

const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const num3 = parseFloat(prompt("Ingresa el tercer número:"));

if(num1 >= num2 && num1 >= num3) {
  console.log(num1 + " es el número mayor.");
} else if(num2 >= num1 && num2 >= num3) {
  console.log(num2 + " es el número mayor.");
} else if(num3 >= num1 && num3 >= num2) {
  console.log(num3 + " es el número mayor.");
} else if(num1 === num2 && num1 > num3) {
  console.log(num1 + " y " + num2 + " son los números mayores.");
} else if(num1 === num3 && num1 > num2) {
  console.log(num1 + " y " + num3 + " son los números mayores.");
} else if(num2 === num3 && num2 > num1) {
  console.log(num2 + " y " + num3 + " son los números mayores.");
} else {
  console.log("Los tres números son iguales.");
}
