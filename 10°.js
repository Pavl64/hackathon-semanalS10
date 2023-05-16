// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves,
// domingo, etc). El programa mostrará un mensaje personalizado para cada día de
// la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día.

while (true) {
    const dia = prompt("Introduce un día de la semana: ");
  
    switch (dia) {
      case "lunes":
        alert("¡Buen comienzo de semana!");
        break;
      case "martes":
        alert("¡Ánimo, ya es martes!");
        break;
      case "miércoles":
        alert("¡Mitad de semana, vamos!");
        break;
      case "jueves":
        alert("¡Ya casi es fin de semana!");
        break;
      case "viernes":
        alert("¡Por fin es viernes!");
        break;
      case "sábado":
        alert("¡Disfruta el fin de semana!");
        break;
      case "domingo":
        alert("Ve a descansar");
        return;
      default:
        alert("No reconozco ese día, por favor intentalo de nuevo.");
    }
  }
  