function setup() {
  createCanvas(500, 400);
  SOMtrilha.loop();
}
function draw() {
  background(imagemEstrada);
  mostrarATOR();
  mostracarros();
  movicarros();
  controleATOR();
  retornoinicial();
  passoutela(xCarros);
  verificaCOLISAO();
  PLACAR();
  marcaPONTOS();
}