// Crear un programa que determine si un número introducido en un Prompt es par
// o no, la respuesta será mostrada en un Alert.

const num = parseInt(prompt("Ingresa un número:"));

if(num % 2 === 0) {
  alert(num + " es un número par.");
} else {
  alert(num + " no es un número par.");
}
