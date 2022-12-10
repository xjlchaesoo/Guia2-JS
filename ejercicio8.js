/*
Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el 
usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el 
descuento será del 15%.
*/

function descuento_viajes(ciudadOrigen) {
    switch (ciudadOrigen) {
        case "La costa del sol":
            costoViaje = 25;
            descuento = costoViaje * 0.05
            costoFinal = costoViaje - descuento
            console.log("Descuento del 5% es: $"+ descuento)
            console.log("El descuento es del 5%, total a pagar con descento: $" + costoFinal)
            break;
        case "Panchimalco":
            costoViaje = 25;
            descuento = costoViaje * 0.10
            costoFinal = costoViaje - descuento
            console.log("Descuento del 10% es: $"+ descuento)
            console.log("El descuento es del 5%, total a pagar con descento: $" + costoFinal)
            break;
        case "Puerto el triunfo":
            costoViaje = 25;
            descuento = costoViaje * 0.15
            costoFinal = costoViaje - descuento
            console.log("Descuento del 15% es: $"+ descuento)
            console.log("El descuento es del 5%, total a pagar con descento: $" + costoFinal)
            break;
        default:
            console.log("No ha ingresado algùn lugar valido")
            break;
    }
    
}
descuento_viajes("Puerto el triunfo")