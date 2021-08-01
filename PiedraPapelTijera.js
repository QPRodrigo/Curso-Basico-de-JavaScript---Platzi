//Reto: De papel piedra o tijera


var jugador;
var computadora;

jugador = "tijera";
computadora = turnoComputora();

if (jugador == "tijera"){
    if(computadora == "tijera"){
        console.log("Empate ... Jugar de nuevo");        
    }
    else if(computadora == "papel"){
        console.log("Gano el jugador");
    }
    else{
        console.log("Gano la computadora");
    }
}

if (jugador == "piedra"){
    if(computadora == "piedra"){
        console.log("Empate ... Jugar de nuevo");        
    }
    else if(computadora == "tijera"){
        console.log("Gano el jugador");
    }
    else{
        console.log("Gano la computadora");
    }
}

if (jugador == "piedra"){
    if(computadora == "piedra"){
        console.log("Empate ... Jugar de nuevo");        
    }
    else if(computadora == "tijera"){
        console.log("Gano el jugador");
    }
    else{
        console.log("Gano la computadora");
    }
}

if(jugador =="papel"){
    if(computadora == "papel"){
        console.log("Empate ... Jugar de nuevo");        
    }
    else if(computadora == "tijera"){
        console.log("Gano el jugador");
    }
    else{
        console.log("Gano la computadora");
    }
}

function turnoComputora(){
    //¿Que resultado le toco a la computadora?
    var resultadoComputradora 
    resultadoComputradora = 1;
    return resultadoComputradora
};
