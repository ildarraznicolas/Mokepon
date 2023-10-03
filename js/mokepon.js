//Funcion para seleccionar la mascota con el evento click
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}
//Funcion para seleccionar la mascota
function seleccionarMascotaJugador() {

    //Declaramos las variables de la funcion
    let jugar = 1;
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    //Comprobacion de la eleccion y cambio de DOM
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge' ;
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo' ;
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya' ;
    } else {
        alert('Tienes que seleccionar una Mascota');
        jugar = 0;
    }

    //Conficion para que la pc sellecione su mascota
    if (jugar == 1){
        seleccionarMascotaEnemigo();
    }
}

//Funcion de numero aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funcion de selecion de mascota enemigo
function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

window.addEventListener('load', iniciarJuego);
