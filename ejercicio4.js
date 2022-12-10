/**Calcular  el  aumento  de  trabajador  tomando  en  cuenta  la 
tabla de categorías de aumento. Para este ejercicio 
deberá de asignar las siguientes variables: Nombre, 
Salario, categoría y aumento. Deberá demostrar en 
consola los datos del empleado y el aumento salarial. 
 * 
 */

function aumento_salarial() {
    let nombre = "Carolina"
    let salario = 675
    let categoria = "A"
    let aumento = 0
    switch (categoria) {
        case "A":
            aumento = ((salario * 0.15) + salario)
            console.log("El aumento: " + aumento + "\n" +
                "Nombre del empleado: " + nombre + "\n" +
                "Categoria:" + categoria + "\n" +
                "Sueldo base: " + salario)
            break;
        case "B":
            aumento = ((salario * 0.30) + salario)
            console.log("El aumento: " + aumento + "\n" +
                "Nombre del empleado: " + nombre + "\n" +
                "Categoria:" + categoria + "\n" +
                "Sueldo base: " + salario)
            break;
        case "C":
            aumento = ((salario * 0.10) + salario)
            console.log("El aumento: " + aumento + "\n" +
                "Nombre del empleado: " + nombre + "\n" +
                "Categoria:" + categoria + "\n" +
                "Sueldo base: " + salario)
            break;
        case "D":
            aumento = ((salario * 0.20) + salario)
            console.log("El aumento: " + aumento + "\n" +
                "Nombre del empleado: " + nombre + "\n" +
                "Categoria:" + categoria + "\n" +
                "Sueldo base: " + salario)
            break;

        default:
            console.log("Digite una categoria correcta")
            break;
    }
    
}
aumento_salarial("B")