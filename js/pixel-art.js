var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $paleta = $('#paleta');
var $grillaPx = $('#grilla-pixeles');
var $indicador = $("#indicador-de-color");
var $mensajeInd = $("#indicador-de-color-mensaje");
var $imagen = $(".imgs img");
// Escondo los elementos para mostrarlos más adelante de forma animada
$paleta.hide();
$('h1').hide();
// agrego el color negro por defecto
$indicador.css("background-color" , '#000');
// Genero la función que cambia el color del indicador y el texto de pincel se actualiza al código de color
function cambiarIndicador(e){
  $indicador.css("background-color" , e);
  $mensajeInd.text( "PINCEL " + $indicador.css("background-color"));
}

//  Se generan los colores por cada item en el arreglo nombreColores
$(nombreColores).each(function(){
  $elemento = $('<div>').addClass('color-paleta').css("background-color" , this);
  $paleta.append($elemento);
});

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  cambiarIndicador(colorActual);
});

// Se genera la grilla con los pixeles
function generarGrilla(){
  $elemento = $('<div>');
  $grillaPx.append($elemento);
}
for (let i=0;i<1749;i++){
 generarGrilla();
}
var $pixeles = $("#grilla-pixeles div");
// Al presionar click en la paleta, el indicador adiquirirá la propiedad bg-color del elemento que desencadenó el evento
$colorPaleta = $('.color-paleta');
$colorPaleta.click(function(e){cambiarIndicador($(e.target).css("background-color"));});

// Se crean las variables que almacenaran si el mouse está siendo presionado
var esPrecionado;
$grillaPx.mousedown(function(){ esPrecionado = true });
$grillaPx.mouseup(function(){ esPrecionado = false });

// Cuando el usuario oprima el click, se pintará el pixel seleccionado. Cuando el usuario mantenga presionado click, se 
//pintara el div correspondiente al apuntado. Al soltar el click se dejará de pintar.
$grillaPx.click(function(e){
  $(e.target).css("background-color",$indicador.css("background-color"));
})
$grillaPx.mousedown(function(){
  $grillaPx.mousemove(function(e){ if(esPrecionado == false){ return }
  $(e.target).css("background-color",$indicador.css("background-color")); })
});


// ejecuta la función borrar al oprimir el botón
$("#borrar").click(borrar);
// ejecuta la función guardar al oprimir el botón
$("#guardar").click(guardarPixelArt);
// ejecuta la función pintarFondo al oprimir el botón
$("#pintar").click(pintarFondo);

// se habilita la carga de superheroes
$imagen.click(function(e){
  switch ($(e.target).attr("id")) {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;      
  }
});

$(document).ready(function(){
  $paleta.show(1000);
  $('h1').show(1000);
});