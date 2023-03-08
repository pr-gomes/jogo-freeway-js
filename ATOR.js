// variaveis ATOR
let xAtor = 250;
let yAtor = 370;
let comprimentoAtor = 28;
let alturaAtor = 28;

// variaveis movimento do ATOR
let yVelocidadeAtor = 3;
let xVelocidadeAtor = 3;

// varivel de pontos de placar do ATOR
let meuspontos = 0;

// variavel colisao do ator usando codigo da biblioteca do GITHUB
let colisao = false;

// FUNCAO PARA MOSTRAR ATOR NO BACKGROUND USANDO FUNCAO IMAGE E IMPORTANDO O PNG USANDO NOMECLATURA DE RECT (RETANGULO) PARA POSICIONAR E MODIFICAR TAMANHO E LARGURA DA IMAGEM .
function mostrarATOR(){
  image(imagemAtor1, xAtor,yAtor,alturaAtor,comprimentoAtor);
}

// FUNCAO PARA CONTROLAR O MOVIMENTO DO PERSONAGEM ATOR USANDO AS FUNCAO IF E KEYISDOWN PARA INFORMAR QUAL TECLA ESTA SENDO APERTADA E PARA MOSTRAR ATRIBUIR UM VALOR DE MOVIMENTO À ESTA TECLA.
function controleATOR(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= yVelocidadeAtor
  }
  if (keyIsDown(DOWN_ARROW)){
    if(naopassartelaY()){
      yAtor += yVelocidadeAtor
  }
}
  if (keyIsDown(LEFT_ARROW)){
    if(naopassartelaX_LEFT()){
      xAtor -= xVelocidadeAtor
    } 
}
  if (keyIsDown(RIGHT_ARROW)){
    if(naopassartelaX_RIGHT()){
      xAtor += xVelocidadeAtor
    }
}
}

// FUNCAO DE VERIFICACAO DE COLISAO DO ATOR COM OS CARRINHOS USANDO A FUNCAO FOR ( LACO DE REPETICAO), VERIFICANDO O CONTATO DO PNG.ATOR COM PNG.CARROS . DENTRO DESTA FUNCAO USAMOS A FUNCAO DA BIBLIOTECA GITHUB COLLIDE.2D .
function verificaCOLISAO(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros,alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      yAtor = 370;
      SOMcolidiu.play();

        print(" VOCE BATEU , INFELIZMENTE PERDEU UM PONTO ,TENTE NOVAMENTE ! ")
    if (pontomaiorzero ()){
      meuspontos -= 1
      }
    }
  }
}

// FUNCAO PARA MOSTAR O PLACAR NO BACKGROUND USANDO AS FUNCOES TEXT , TEXTSIZE, FILL , FILL(COLOR) PARA MODIFICAR E EMBELEZAR O CONTADOR DE PONTOS. USANDO FILL ATRAVES DOS CODIGOS DE CORES RGB HTML DISPONIVEIS NO GOOGLE , TEXT USAMOS PARA IMPORTAR ALGUM TEXTO NA TELA , TEXTSIZE USAMOS PARA MODIFICAR O TAMANHO DO TEXT . 
function PLACAR(){
  fill(1,0,0)
  textSize(15);
  text("PONTOS = ", 15,25)
  
  rect(93,2,30,30)
  fill(255,0,0)
  textSize(25)
  text(meuspontos, 100,27)
}

// FUNCAO DE MARCADOR DE PONTOS , NELA USAMOS A CONDICAO DE VERIFICACAO QUE SE CASO O ATOR NO EIXO Y SEJA MENOR QUE O LIMITE DA TELA 10 ENTAO ELE IRA ATRIBUIR + 1 NA VARIAVEL DE MEUS PONTOS E NISSO SERA CONTABILIZADO TODA VEZ QUE ELE ENCOSTAR NO LIMITE 10 DA TELA DO PLANO Y.
function marcaPONTOS(){
  if(yAtor < 10){
    yAtor = 370;
    meuspontos += 1;
    print(" PARABENS, VOCE FEZ UM PONTO ");
    SOMpontos.play();
  }
}

// FUNCAO CRIADA PARA SER ATRIBUIDA NA FUNCAO DE COLISAO, POIS COMO GANHAMOS TAMBEM BOTAMOS UMA CONDICAO DE PERDA CASO O ATOR ENCOSTE NOS CARRINHOS E COM ESSA FUNCAO TODA VEZ QUE O ATOR ENCONSTAR NO CARRO, ELE PERDERA 1 PONTO "OBS": FUNCAO FOI CRIADA PARA LIMITAR O NUMERO DE PERDA DE PONTOS, SE ELE NAO TIVER NENHUM PONTO E CASO MESMO ASSIM COLIDA COM CARRO ELE NAO PERDERA NADA, CASO CONTRARIO SE ELE TIVER 1 PONTO ELE PERDERA 1 PONTO E FICARA COM ZERO.
function pontomaiorzero(){
  return meuspontos > 0 ;
}
// FUNCAO CRIADA PARA VERIFICAR CONTATO DO ATOR COM POSICAO DO EIXO Y NO SEU LIMITE PARA QUE ELE NAO ULTRAPASSE ESTE VALOR E SE MATENHA SEMPRE NA TELA, ESSA FUNCAO FOI ATRIBUIDA EM CONDICAO DE OUTRA FUNCAO 
function naopassartelaY(){
  return yAtor < 370;
}
// ESTAS DUAS FUNCAO TEM A MESMA FUNCAO QUE A FUNCAO DE NAOPASSARTELAY
function naopassartelaX_LEFT(){
  return xAtor > 0;
}
function naopassartelaX_RIGHT(){
  return xAtor < 470;

}



    
