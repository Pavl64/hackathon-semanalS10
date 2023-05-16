// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
// No considerar el caso en que ambos números son iguales.


function menorQue(num1,num2){
    if(num1 < num2) {
        return (num1 + " es menor que " + num2 + ".");
      } else if(num2 < num1) {
        return(num2 + " es menor que " + num1 + ".");
      } else {
        return("Los dos números son iguales.");
      }
}
console.log(menorQue(12,9))
