// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
// mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
// solo al mostrar los números indicados por el usuario.

const num1 = parseInt(prompt("Introduce un número entre 1 y 50: "));
const num2 = parseInt(prompt("Introduce otro número entre 1 y 50: "));

console.log("Los números del 1 al 50 son: ");
for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
}
