let ataqueJugador 
let ataqueEnemigo
const FUEGO = 'FUEGO';
const AGUA = 'AGUA';
const TIERRA = 'TIERRA';


//Funcion para seleccionar la mascota con el evento click
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    //seleccion de botones de ataque
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra') 
    botonTierra.addEventListener('click', ataqueTierra)
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
    let mascotaAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

//aleatorizacion de ataque enemigo
function ataqueFuego() {
    ataqueJugador = FUEGO
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = AGUA
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = TIERRA
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = FUEGO
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = AGUA
    } else {
        ataqueEnemigo = TIERRA
    }
    
    combate()
}

//funcion para general un resultado
function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == FUEGO && ataqueEnemigo == TIERRA) {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == AGUA && ataqueEnemigo == FUEGO) {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == TIERRA && ataqueEnemigo == AGUA) {
        crearMensaje("GANASTE")
    } else {
        crearMensaje ("PERDISTE")
    }
}

//funciones de mensaje
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado;

    sectionMensajes.appendChild(parrafo);
}

window.addEventListener('load', iniciarJuego);
