/* Ejercicio 1:
Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de 
edad o no. Utilizar para la condición el operador ternario 
*/ 

function calcular_edad(edad){
    (edad>=18)?edad:18;
    console.log("Es mayor de edad")
}

calcular_edad(25)
