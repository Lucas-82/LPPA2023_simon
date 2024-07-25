var botones = document.querySelectorAll(".presionar.boton1, .presionar.boton2, .presionar.boton3, .presionar.boton4");
var startButton = document.getElementById("start");

var secuenciaJuego = [];
var secuenciaJugador = [];
var nivel = 0;
var puedeJugar = false;

function encenderBoton(boton) {
  boton.classList.add("active");
  setTimeout(function () {
    boton.classList.remove("active");
  }, 500);
}

function mostrarSecuencia() {
  puedeJugar = false;
  let i = 0;
  const intervalo = setInterval(function () {
    encenderBoton(secuenciaJuego[i]);
    i++;
    if (i >= secuenciaJuego.length) {
      clearInterval(intervalo);
      puedeJugar = true;
    }
  }, 1000);
}

function nuevoNivel() {
  nivel++;
  secuenciaJugador = [];
  var botonAleatorio = botones[Math.floor(Math.random() * botones.length)];
  secuenciaJuego.push(botonAleatorio);
  mostrarSecuencia();
}

function manejarClic(boton) {
  if (!puedeJugar) return;

  secuenciaJugador.push(boton);
  encenderBoton(boton);

  if (boton !== secuenciaJuego[secuenciaJugador.length - 1]) {
    alert("¡Perdiste! Presiona START para intentarlo de nuevo.");
    reiniciarJuego();
    return;
  }

  if (secuenciaJugador.length === secuenciaJuego.length) {
    setTimeout(nuevoNivel, 1000);
  }
}

function reiniciarJuego() {
  secuenciaJuego = [];
  secuenciaJugador = [];
  nivel = 0;
  puedeJugar = false;
}

startButton.addEventListener("click", function () {
  reiniciarJuego();
  nuevoNivel();
});

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    manejarClic(boton);
  });
});
