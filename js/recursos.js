// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}
// Carga la funcion borrar
  function borrar(){
     $pixeles.animate({backgroundColor : "#fff"},2500);
  };
// carga la función pintarFondo
function pintarFondo(){
  $($pixeles).animate({"background-color" : $indicador.css("background-color")},1500);
}