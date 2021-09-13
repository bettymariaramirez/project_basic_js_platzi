var vp = document.getElementById("Villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargarOK: false,
  cargado: false
}

var vaca = {
  url: "vaca.png",
  cargarOK: false,
  cargado: false
}

var pollo = {
  url: "pollo.png",
  cargarOK: false,
  cargado: false
}

var cerdo = {
  url: "cerdo.png",
  cargarOK: false,
  cargado: false
}

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image()
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);



function cargarFondo() {
  fondo.cargarOK = true;
  dibujar();
}

 function cargarVaca() {
   vaca.cargarOK = true;
   dibujar();
}

function cargarPollo() {
  pollo.cargarOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargarOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargarOK & !fondo.cargado) {
    papel.drawImage(fondo.imagen, 0, 0);
    fondo.cargado = true;
  }

  if (vaca.cargarOK & !vaca.cargado) {
    console.log("Vaca:");
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
    vaca.cargado = true;
  }
  if (pollo.cargarOK & !pollo.cargado) {
    console.log("pollo:");
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
    pollo.cargado = true;
  }
    if (cerdo.cargarOK & !cerdo.cargado) {
      console.log("cerdo:");
      console.log(cantidad);
      for (var v = 0; v < cantidad; v++) {
        var x = aleatorio(0, 3);
        var y = aleatorio(0, 3);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(cerdo.imagen, x, y);
      }
      pollo.cargado = true;
    }
  }


function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}