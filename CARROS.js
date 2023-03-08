// funcao lista para organizar variaveis dos carros 
let xCarros = [600,600,600,600,600,600]; // esses valores sao os valores da posicao X de cada carro .
let yCarros = [40,100,150,210,260,320]; // esses valores sao os valores da posicao Y de cada carro.
let comprimentoCarros = 50; // esses valores sao os valores da altura de cada carro.
let alturaCarros = 40; // esses valores sao os valores do comprimento de cada carro.
let xvelocidadeCarros = [2.8,3,3.9,2.3,3.4,4.7]; // esses valores sao os valores da velocidade de cada carro . 
// levando em consideracao que cada elemento dentro do [], segue a sequencia de reproduzacao 0 , 1 , 2 ... - o zero sera o primeiro objeto a ser verificado e executado .


function mostracarros(){
  for(let i = 0; i < imagemCarros.length; i++){  image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarros,alturaCarros);        
 }
} // utilizamos o laco for ao inves de utilizar lista de um por um atrelamos uma variavel que ira armezenar todos os dados e rodar em laco de repeticao conforme a seguir : ao inves do numero de indice como exemplo [0 , 1 , 2], criamos variavel e trocamos os numeros indices pela variavel [CARRO],porem teremos que atribuir alguns valores nessa variavel para que ela possa puxar todos os dados - 
 // for(let variavel = 0; variavel < dados das outras variaveis.length ; variavel = variavel + 1)//{
// funcao}.



function movicarros(){
  for(let i = 0; i < imagemCarros.length ; i++ ){
    xCarros[i] -= xvelocidadeCarros[i];
  }
}
function retornoinicial(){
  for(let i = 0; i < imagemCarros.length; i++){
  if (passoutela(xCarros[i])){
    xCarros[i] = 525;
  }
  }
}
function passoutela(xCarros){
  return xCarros <-50;
}