// Crea un programa que pregunte al usuario un número. Mostrar los números que
// son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const num = parseInt(prompt("Introduce un número: "));
console.log("Los múltiplos de 5 desde 1 hasta " + num + " son: ");
for (let i = 1; i <= num; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
