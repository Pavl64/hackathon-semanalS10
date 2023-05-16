// Crea un programa que solicite al usuario números, si lo que este introduce es un
// número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe
// ingresar el número 0. Finalmente mostrar la lista de números capturados en
// pantalla o en la consola.

const numeros = [];

while (true) {
  const num = parseInt(prompt("Introduce un número (0 para terminar): "));
  
  if (num === 0) {
    break;
  }
  
  if (isNaN(num)) {
    console.log("Lo que ingresaste no es un número.");
  } else {
    numeros.push(num);
  }
}

console.log("Los números ingresados son: ");
console.log(numeros);
