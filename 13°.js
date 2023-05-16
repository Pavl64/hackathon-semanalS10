// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// • Course: $4999 MXN
// • Carrera $3999 MXN
// • Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// • Beca Facebook: 20% de descuento.
// • Beca Google: 15% de descuento.
// • Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// • Course: 2 meses
// • Carrera 6 meses
// • Master: 12 meses

// Solicitamos el nivel de curso deseado al usuario y guardamos el costo mensual correspondiente
let nivel = prompt("¿Qué nivel de curso deseas? (Course, Carrera, Master): ");
let costo_mensual;
let duracion;
if (nivel == "Course") {
  costo_mensual = 4999;
  duracion = 2;
} else if (nivel == "Carrera") {
  costo_mensual = 3999;
  duracion = 6;
} else if (nivel == "Master") {
  costo_mensual = 2999;
  duracion = 12;
} else {
  alert("El nivel de curso ingresado no es válido.");
  throw new Error("Nivel de curso inválido");
}

// Solicitamos si el usuario cuenta con alguna beca y calculamos el descuento correspondiente
let beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua, ninguna): ");
let descuento = 0;
if (beca == "Facebook") {
  descuento = 0.2;
} else if (beca == "Google") {
  descuento = 0.15;
} else if (beca == "Jesua") {
  descuento = 0.5;
} else if (beca != "ninguna") {
  alert("La beca ingresada no es válida.");
  throw new Error("Beca inválida");
}

// Calculamos el costo mensual con descuento y el costo total del curso
let costo_mensual_descuento = costo_mensual * (1 - descuento);
let costo_total = costo_mensual_descuento * duracion;

// Mostramos los resultados al usuario
alert("El costo mensual de tu curso con descuento es de $" + costo_mensual_descuento.toFixed(2) + " MXN.");
alert("El costo total de tu curso es de $" + costo_total.toFixed(2) + " MXN.");
