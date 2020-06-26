


function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo()
  jogo.setup()

  telaInicial = new TelaInicial()
  cenas = {
    jogo,
    telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2)

  frameRate(40)
  somDoJogo.loop()

}
function mouseClicked(){
  jogo.mouseClicked()
}
function keyPressed() {
  jogo.keyPressed(key)

}

function draw() {
  cenas[cenaAtual].draw()
 
}

