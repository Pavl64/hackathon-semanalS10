// Crea un programa que solicite al usuario letras o palabras, si es así guardar el
// resultado. Para terminar de preguntar al usuario no debe escribir valor alguno. Al
// terminar de capturar, mostrar en pantalla la concatenación de todas las palabras
// capturadas.

const palabras = [];

while (true) {
  const input = prompt("Introduce una palabra o letra (presiona Enter para terminar): ");
  
  if (input === "") {
    break;
  }
  
  palabras.push(input);
}

const resultado = palabras.join("");
console.log("El resultado de la concatenación es: " + resultado);
