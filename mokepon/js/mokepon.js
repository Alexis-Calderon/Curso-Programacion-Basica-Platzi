let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarHtml() {
  let botonMascotaJugador = document.getElementById("boton_mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton_fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton_agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton_tierra");
  botonTierra.addEventListener("click", ataqueTierra);
};

function seleccionarMascotaJugador() {
  let radio1 = document.getElementById("Hipodoge");
  let radio2 = document.getElementById("Capipepo");
  let radio3 = document.getElementById("Ratigueya");
  let spanMascotaJugador = document.getElementById("mascota_jugador");

  if (radio1.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge'
  } else if (radio2.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo'
  } else if (radio3.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya'
  } else {
    alert('Selecciona una mascota');
  }

  seleccionarMascotaEnemigo();
};

function seleccionarMascotaEnemigo(){
  let mascotaAleatorio = aleatorio(1,3);
  let spanMascotaEnemigo = document.getElementById("mascota_enemigo");

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }

};

function aleatorio(min, max){
  return Math.floor(Math.random() * (max -min +1) + min);
};

function ataqueFuego(){
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemigo();
};

function ataqueAgua(){
  ataqueJugador = 'AGUA';
  ataqueAleatorioEnemigo();
};

function ataqueTierra(){
  ataqueJugador = 'TIERRA';
  ataqueAleatorioEnemigo();
};

function ataqueAleatorioEnemigo (){
  let ataqueAleatorio = aleatorio(1,3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate()
};

function combate(){
  let spanVidasJugador = document.getElementById("vidas_jugador");
  let spanVidasEnemigo = document.getElementById('vidas_enemigo');

  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje('EMPATE');
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("Ganaste");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("Ganaste");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("Ganaste");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("Perdiste");
    vidasJugador--;
    spanVidasJugador.innerHTML =  vidasJugador; 
  }
  revisarVidas();
};

function crearMensaje(resultado){
  let parrafo = document.createElement('p');
  parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado

  let seccionMensajes = document.getElementById('mensajes');
  seccionMensajes.appendChild(parrafo);
};

function crearMensajeFinal(resultadoFinal){
  let parrafo = document.createElement('p');
  parrafo.innerHTML = resultadoFinal

  let seccionMensajes = document.getElementById('mensajes');
  seccionMensajes.appendChild(parrafo);
};

function revisarVidas(){
  if (vidasEnemigo == 0) {
    crearMensajeFinal('FELICITACIONES! Ganaste :)');
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento, Perdiste :(');
  }
};

window.addEventListener("load", iniciarHtml);
