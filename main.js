//EJERCICIO 1--------------------------------------------------------------------



/* Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un
descuento del 4% por salud y 7% por pensión. */

/* //DATOS DE ENTRADA
let salario = prompt("Digite el salario del empleado");

//CALCULO
let salud = salario * 0.04;
let pension = salario * 0.07;
let valorApagar = salario - (salud + pension);

//DATOS DE SALLIDA
document.write(
    "El salario del empleado es: " + salario + "<br>" +
    "Dto en salud es: " + salud + "<br>" +
    "Dto en pension es: " + pension + "<br>" + 
    "El sueldo a pagar es: " + valorApagar
);  */




//EJERCICIO 2 -------------------------------------------------------------------------------------------


/* Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo
donde sus dimensiones base y altura se deben pedir al usuario que las digite */
 
/* //datos de entrada
let base = Number( prompt("Ingrese el valor de la Base del triangulo"));
let altura = Number( prompt("Ingrese el valor de la Altura del triangulo"));
 
//Calculo
let area = (base*altura)/2;
 
//datos de salida
document.write(
 '<h1> El area del triangulo es: <h1/> '+ area
); */






//EJERCICIO 3-------------------------------------------------------------------------------


/* Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
2 números al usuario.*/

/* //DATOS DE ENTRADA
let n1 = Number( prompt("Digite numero 1"));
let n2 = Number ( prompt("Digite numero 2"));

 //CALCULOS
 let suma = n1 + n2;
 let resta = n1 - n2;
 let multi = n1 * n2;
 let divi = n1 / n2;
 let mod = n1 % n2;
 let poten = n1 ** n2;

 //DATOS DE SAILDA
 document.write(
    n1 + " + " +n2+ " = "+ suma + "<br>" + 
    n1 + " - " +n2+ " = "+ resta + "<br>" + 
    n1 + " * " +n2+ " = "+ multi + "<br>" + 
    n1 + " / " +n2+ " = "+ divi + "<br>" + 
    n1 + " % " +n2+ " = "+ mod + "<br>" + 
    n1 + " ** " +n2+ " = "+ poten 
 );
 */


 //EJERCICIO 4 ------------------------------------------------------------------------------


 /* Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
el mes y el valor tanto como de las horas normales de trabajo y las horas extras. */
 
/* //Datos de entrada
let nombre = prompt("Ingrese el nombre");
let horas = Number( prompt("Ingrese las horas trabajadas"));
let horasExtras = Number( prompt("Ingrese las horas Extras trabajadas"));
 
//Calculo
let valorHora = 5500;
let valorHoraExtra = 7000;
let salario = (valorHora * horas) + (horasExtras * valorHoraExtra);
 
//Datos de salida
alert("El salario mensual de " + nombre + " es de " + salario +
    " Con un total de " + horas + " horas laboradas mas " + horasExtras + " horas extras "
 );
 */



 //EJERCICIO 5 ---------------------------------------------------------------------------------------


 /* Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar
cuanto es el IVA que se agrega, mostrar el precio del producto sin IVA 
y el total a pagar. */

/* //Datos de Entrada
let precio = Number (prompt("Ingrese el precio"));

//Calculo
let iva = precio * 0.19;

//Datos de salida
console.log(
    "Valor del IVA " +  iva + " " +
    "Valor del producto "  + precio + " " +
    "Total a pagar " + (precio + iva) 
);*/



 //EJERCICIO 6 ---------------------------------------------------------------------------------------


  /*Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
 alumnos hombres y mujeres.*/
 
 /* //DATOS DE ENTRADA
 let numHombres = Number( prompt("Ingrese el total de alumnos hombres"));
 let numMujeres = Number( prompt("Ingrese el total de alumnas mujeres") );
 
 //CALCULO
 let totalalumnos = numHombres + numMujeres;
 let porcentajeHombres = numHombres * 100 / totalalumnos;
 let porcentajeMujeres = numMujeres * 100 / totalalumnos;
 
 //DATOS DE SALIDA
 document.write(
     "El porcentaje de Hombres es del: " + porcentajeHombres + "<br>" +
     "El porcentaje de Mujeres es del: " + porcentajeMujeres
 ); */
 
 
 
 
 //EJERCICIO 7 ----------------------------------------------------------------------------------------
 
 
 //Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.
 
 //Datos de Entrada
 let nota1 = Number (prompt("Ingrese la nota 1"));
 let nota2 = Number (prompt("Ingrese la nota 2"));
 let nota3 = Number (prompt("Ingrese la nota 3"));
 
 //Calculo
 let promNotas = (nota1 + nota2 + nota3) / 3;
 
 //Datos de Salida
 alert("El promedio total de sus notas es de: " + promNotas);