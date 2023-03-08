// variaveis imagens e sons
let imagemAtor1;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

// variavel de SONS
let SOMcolidiu;
let SOMpontos;
let SOMtrilha;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor1 = loadImage("imagens/ator-1.png")
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3];
  
  SOMtrilha = loadSound("SONS/trilha.mp3");
  SOMcolidiu = loadSound("SONS/colidiu.mp3");
  SOMpontos = loadSound("SONS/pontos.wav");
}