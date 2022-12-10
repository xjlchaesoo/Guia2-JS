/*Ejercicio 7:
Crear una fuction que calcule la edad de una persona en base a su año de nacimiento y fecha actual 
podrá hacer uso de métodos JavaScript (DATE,getDate,getFullYear)para realizar el cálculo
*/

/*Validación Fecha de Nacimiento Mayoria de edad del usuario*/
function edad(fechaUsuario){
    //El siguiente fragmento de codigo lo uso para igualar la fecha de nacimiento con la fecha de hoy del usuario
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    d=[year, month, day].join('-')
    /*------------*/
    var hoy = new Date(d);//fecha del sistema con el mismo formato que "fechaUsuario"
    var cumpleanos = new Date(fechaUsuario);
    //alert(cumpleanos+" "+hoy);
    //Calculamos años
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    // calculamos los meses
    var meses=0;
    if(hoy.getMonth()>cumpleanos.getMonth()){
        meses=hoy.getMonth()-cumpleanos.getMonth();
    }else if(hoy.getMonth()<cumpleanos.getMonth()){
        meses=12-(cumpleanos.getMonth()-hoy.getMonth());
    }else if(hoy.getMonth()==cumpleanos.getMonth() && hoy.getDate()>cumpleanos.getDate() ){
        if(hoy.getMonth()-cumpleanos.getMonth()==0){
            meses=0;
        }else{
            meses=11;
        }
        
    }
    // Obtener días: día actual - día de cumpleaños
    let dias  = hoy.getDate() - cumpleanos.getDate();
    if(dias < 0) {
        // Si días es negativo, día actual es mayor al de cumpleaños,
        // hay que restar 1 mes, si resulta menor que cero, poner en 11
        meses = (meses - 1 < 0) ? 11 : meses - 1;
        // Y obtener días faltantes
        dias = 30 + dias;
    }
    console.log(`Tu edad es de ${edad} años, ${meses} meses, ${dias} días`);

    if(edad>=18){
        console.log("Eres un adulto");
    }else{
        // Calcular faltante con base en edad actual
        // 18 menos años actuales
        let edadF = 18 - edad;
        // El mes solo puede ser 0 a 11, se debe restar (mes actual + 1)
        let mesesF = 12 - (meses + 1);
        // Si el mes es mayor que cero, se debe restar 1 año
        if(mesesF > 0) {
            edadF --;
        }
        let diasF = 30 - dias;
        console.log(`Te faltan ${edadF} años, ${mesesF} meses, ${diasF} días para ser adulto`);
    }
}
edad('1997-01-15');

