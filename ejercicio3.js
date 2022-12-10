/*Ejercicio 3: 
Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%, 
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet 
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los 
valores.
*/

function notaFinal(nombre, carnet,ntExamen,ntTarea,ntAsis,ntInvest) {

    ntExamen = ntExamen * 0.2
    ntTarea = ntTarea * 0.4
    ntAsis = ntAsis * 0.1
    ntInvest = ntInvest * 0.3
    ntFinal = (ntExamen + ntTarea + ntAsis + ntInvest);
    console.log("Nombre del estudiante: "+ nombre +"\n" + "Carnet: "+ carnet)
    console.log("La nota final del estudiante es: "+ ntFinal.toFixed(2))
}
notaFinal("Bryan Martinez", "25-3064-2015",7,6,10,8)