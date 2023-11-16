let ataqueJugador 
let ataqueEnemigo
const FUEGO = 'FUEGO';
const AGUA = 'AGUA';
const TIERRA = 'TIERRA';
let vidasJugador = 3
let vidasEnemigo = 3

//Funcion para seleccionar la mascota con el evento click
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    //seleccion de botones de ataque
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra') 
    botonTierra.addEventListener('click', ataqueTierra)

    // Agregar un listener para el botón de reinicio
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
//Funcion para seleccionar la mascota
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none'


    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex'

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
        reiniciarJuego();
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
    console.log("Ataque de fuego seleccionado");
    ataqueJugador = FUEGO
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    console.log("Ataque de agua seleccionado");
    ataqueJugador = AGUA
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    console.log("Ataque de tierra seleccionado");
    ataqueJugador = TIERRA
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    console.log("Ataque enemigo aleatorio: " + ataqueAleatorio);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = FUEGO
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = AGUA
    } else {
        ataqueEnemigo = TIERRA
    }
    
    console.log("Ataque enemigo final: " + ataqueEnemigo);
    combate()
}

//funcion para general un resultado
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');
    
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == FUEGO && ataqueEnemigo == TIERRA) {
        crearMensaje("GANASTE");
        vidasEnemigo--; // Restar una vida al enemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == AGUA && ataqueEnemigo == FUEGO) {
        crearMensaje("GANASTE");
        vidasEnemigo--; // Restar una vida al enemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == TIERRA && ataqueEnemigo == AGUA) {
        crearMensaje("GANASTE");
        vidasEnemigo--; // Restar una vida al enemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    console.log("Ataque del jugador: " + ataqueJugador);
    console.log("Ataque del enemigo: " + ataqueEnemigo);

    //Revisar vidas
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! GANASTE :)")
    } else if (vidasJugador == 0 ) {
        crearMensajeFinal("LO SIENTO, PERDISTE :(")
    }
}


//funciones de mensaje
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado');
    let ataqueDelJugador = document.getElementById('ataque-del-jugador');
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo');
    
    if (!sectionMensajes) {
        console.error("No se encontró el elemento 'resultado'");
        return;
    }

    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');    

    sectionMensajes.innerHTML = resultado;
    nuevoataqueDelJugador.innerHTML = ataqueJugador;
    nuevoataqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado');

    sectionMensajes.innerHTML = resultadoFinal;

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra') 
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}



    window.addEventListener('load', iniciarJuego);
