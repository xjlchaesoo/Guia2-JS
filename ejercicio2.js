/*Ejercicio 2: 
Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los 
números.
*/

function funcion1(num1, num2) {
    resultadoSuma = num1+num2
    resultadoResta = num1-num2
    resultadoMultiplicacion = num1*num2
    resultadoDivision = num1/num2
    console.log("El resultado de la suma es:" + resultadoSuma)
    console.log("El resultado de la resta es:" + resultadoResta)
    console.log("El resultado de la multiplicacion es:" + resultadoMultiplicacion)
    console.log("El resultado de la division es:" + resultadoDivision+"\n")
}
funcion1(10,5)

let num1 = 24
let num2 = 12
function funcion2(num1, num2) {
    resultadoSuma = num1+num2
    resultadoResta = num1-num2
    resultadoMultiplicacion = num1*num2
    resultadoDivision = num1/num2
    console.log("El resultado de la suma es:" + resultadoSuma)
    console.log("El resultado de la resta es:" + resultadoResta)
    console.log("El resultado de la multiplicacion es:" + resultadoMultiplicacion)
    console.log("El resultado de la division es:" + resultadoDivision +"\n")
}
funcion2(num1,num2)

var min = 10;
var max = 100;

num1 = Math.random()*(max - min)
num2 = Math.random()*(max - min)
console.log("Numeros aleatorios generados num1 =" , num1 , "num2 =",num2)
function funcion3(num1, num2) {
    resultadoSuma = num1+num2
    resultadoResta = num1-num2
    resultadoMultiplicacion = num1*num2
    resultadoDivision = num1/num2
    console.log("El resultado de la suma es:" + resultadoSuma.toFixed(2))
    console.log("El resultado de la resta es:" + resultadoResta.toFixed(2))
    console.log("El resultado de la multiplicacion es:" + resultadoMultiplicacion.toFixed(2))
    console.log("El resultado de la division es:" + resultadoDivision.toFixed(2))
}
funcion3(num1,num2)


