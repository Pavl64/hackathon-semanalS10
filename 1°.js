// Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
// es divisible entre 2”.

function parImpar(num){
    if(num % 2 === 0) {
        return (num + " es divisible entre 2.");
      } else {
        return (num + " no es divisible entre 2.");
      }
    
}
console.log(parImpar(18))