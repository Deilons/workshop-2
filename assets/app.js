//reto 1, Viaje de Julian

const destinoJulian = prompt("cual es tu destino")

let diasViaje = Number(prompt("cuantos dias quieres viajar"))

let presupuesto =Number(prompt("ingrese su presupuesto"))

const gastoDiario = 60;

let gastoTotal = gastoDiario * diasViaje;

if (gastoTotal>presupuesto){
    let diasViaje = Number(prompt("su tiempo de estadia supera su presupesto, porfavor recorte sus dias"))

}
let seguir = confirm("quieres seguir?")
while (seguir){
if (gastoTotal<presupuesto){
    let restoPresupuesto = presupuesto - gastoTotal;
    let confirmacion = confirm("tienes " + restoPresupuesto + " ¿quieres aumentar tu tiempo de estadia?")
        if (confirmacion){
            let diasExtra = Number(prompt("ingrese la nueva cantidad de dias que se quiere hospedar"))
            let gastoExtra = diasExtra * gastoDiario;
            if(gastoExtra > restoPresupuesto){
                let diasExtra = Number(prompt("la nueva cantidad de dias supera al presupuesto, porfavor elije menos dias"))
                alert("nueva cantidad de dias actializado, disfrute sus vacaciones")
            }
            if(gastoExtra < restoPresupuesto){
                alert("la nueva cantidad de dias esta dentro del presupuesto, disfrute sus vacaciones")
            }
        }
}
let seguir = confirm("quieres seguir?")


break;
}