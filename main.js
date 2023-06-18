function finalizar(){
    alert("Saliendo del sistema, Gracias " + nombre)
}

function bienvenido(){
    alert("Bienvenido al portal de turnos");
}

    bienvenido()

    
    let nombre = prompt("Ingrese nombre");

    if(nombre){
        let dni = prompt (nombre + "Ingrese su dni");
        if (dni==="12345"){
            console.log("------------------------")
            console.log("1.Reserva de turno");
            console.log("2.Turnos reservados");
            console.log("3.Cancelar turnos");
            console.log("4.Salir");
            console.log("------------------------")
    
            let op = prompt("Ingrese la opcion");
    
            switch(op){
                case "1":
                    for(let i=1; i<= 28; i++){
                        if(i % 1 === 0){
                            console.log("Estos dias hay turnos disponibles en este mes: Dia "  + i)
                        } 
                    }  
                    let dia = prompt("Elejir un dia disponible")
                        if(dia<=28){
                           let reserva = alert("Turno reservado para el dia " +dia)
                        }else{
                            alert("No hay turno disponible ese dia")
                        }
                    
                    break;
                case "2":
                    if (typeof reserva === 'undefined') {
                        alert("No tienes turnos reservados");
                    }else{
                        alert("Turno reservado para el dia " +dia)
                    }
                    break;
                case "3":
                    alert("No tienes turnos para cancelar");
                    break;
                case "4":
                    finalizar();
                    break;
                default:
                    console.log("Operacion invalida")
            }
            
    
    
    
    
    
        }else{
            alert("Numero de dni no valido");
        }
    }




