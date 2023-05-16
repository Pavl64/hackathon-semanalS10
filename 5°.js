// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es
// lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o
// domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const dia = prompt("Ingrese un día de la semana");

if (dia === "lunes") {
  console.log("Que tenga buen inicio de semana :)");
} else if (dia === "viernes") {
  console.log("Ya casi acabamos la semana");
} else if (dia === "sábado" || dia === "domingo") {
  console.log("¡Es fin de semana!");
} else {
  console.log("trabajando...");
}
