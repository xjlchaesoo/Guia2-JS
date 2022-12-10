/**
 * Ejercicio 6:
Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es
un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD
FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de
usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche
seleccionado.
 */

function coches(tipodeCoche,valor) {
    let descuento
     
    if(tipodeCoche=="FORD FIESTA"){
        descuento =(valor*0.05)
        montoFinal = valor - descuento
        console.log("Tipo de Coche: " + tipodeCoche +
        "\n" + "Valor del coche: " + valor +  
        "\n" + "Descuento: " + descuento +
        "\n" + "Monto a pagar: " + montoFinal)
        
    }
    else if(tipodeCoche=="FORD FOCUS"){
        descuento = (valor*0.10)
        montoFinal = valor - descuento
        console.log("Tipo de Coche: " + tipodeCoche +
        "\n" + "valor del coche: $" + valor +  
        "\n" + "Descuento: " + descuento +
        "\n" + "Monto a pagar: " + montoFinal)
    }
    else if(tipodeCoche=="FORD ESCAPE"){
        descuento = (valor*0.20)
        montoFinal = valor - descuento
        console.log("Tipo de Coche: " + tipodeCoche +
        "\n" + "valor del coche: $" + valor +  
        "\n" + "Descuento: " + descuento +
        "\n" + "Monto a pagar: " + montoFinal)
    }
    else{
        console.log("No existe el tipo de vehiculo ingresado")
    }
    

}
coches("FORD ESCAPE",5677)