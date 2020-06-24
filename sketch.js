let imagemCenario
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let imagemGameOver
let pontuacao
let cenario

let somDoJogo
let somDoPulo

let personagem

const inimigos = []

const matrizInimigo = matriz({ linhas: 7, colunas: 4, largura: 104, altura: 104 })

const matrizPersonagem = matriz({ linhas: 4, colunas: 4, largura: 220, altura: 270 })

const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]


function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')

  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pontuacao = new Pontuacao()
  cenario = new Cenario(imagemCenario, 3)

  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
    0, 30, 110, 135, 220, 270)

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
    width - 52, 30, 52, 52, 104, 104, 10, 100)

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
    width - 52, 200, 100, 75, 200, 150, 10, 1500)

  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
    width, 0, 200, 200, 400, 400, 10, 2500)

  inimigos.push(inimigo)
  inimigos.push(inimigoVoador)
  inimigos.push(inimigoGrande)


  frameRate(40)
  //somDoJogo.loop()

}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }

}

function draw() {

  cenario.exibe()
  cenario.move()
  
  pontuacao.exibe()
  pontuacao.adicionarPontos()
  

  personagem.exibe()
  personagem.aplicaGravidade()
  /**/

  inimigos.map(inimigo => {
    inimigo.exibe()
    inimigo.move()
    
    if (personagem.estaColidindo(inimigo)) {
      console.log('colidiu')
      image(imagemGameOver, width / 2 - 200 , height / 3)
      noLoop()
    }
    /** */
  })


  /**/

}

