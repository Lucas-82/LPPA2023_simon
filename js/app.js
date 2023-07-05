var botones = document.querySelectorAll(
  ".presionar.boton1, .presionar.boton2, .presionar.boton3, .presionar.boton4"
);

function encenderBoton() {
  var botonAleatorio = botones[Math.floor(Math.random() * botones.length)];
  botonAleatorio.classList.add("active");

  setTimeout(function () {
    botonAleatorio.classList.remove("active");
  }, 500);
}
function iniciarSecuencia() {
  setInterval(encenderBoton, 2000);
}

encenderBoton();
iniciarSecuencia();
/*
function encenderBoton() {
  var botones = document.querySelectorAll(
    ".presionar.boton1, .presionar.boton2, .presionar.boton3, .presionar.boton4"
  );
  var botonAleatorio = botones[Math.floor(Math.random() * botones.length)];

  botonAleatorio.classList.add("active");

  setTimeout(function () {
    botonAleatorio.classList.remove("active");
  }, 500);
}

function iniciarSecuencia() {
  setInterval(encenderBoton, 2000);
}

// Llamada a la función encenderBotonAleatorio al cargar la página
encenderBoton();
iniciarSecuencia();
*/
