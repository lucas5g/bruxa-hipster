class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }

  setup() {
    pontuacao = new Pontuacao()
    cenario = new Cenario(imagemCenario, 4)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem,
      50, 30, 110, 135, 220, 270)

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
      width - 52, 30, 52, 52, 104, 104, 10, 100)

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
      width - 52, 200, 100, 75, 200, 150, 10, 100)

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
      width, 0, 200, 200, 400, 400, 10, 100)

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoGrande)

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      console.log(personagem.pula())
      somDoPulo.play()
    }
  }
  draw() {

    cenario.exibe()
    cenario.move()

    pontuacao.exibe()
    pontuacao.adicionarPontos()


    personagem.exibe()
    personagem.aplicaGravidade()
    /**/

    const inimigo = inimigos[this.inimigoAtual]
    const inimigoVisivel = inimigo.x <= -inimigo.largura


    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {

      this.inimigoAtual++
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0
      }
      //inimigo.velocidade = parseInt(random(20, 35))
      inimigo.velocidade = startSpeed++
      console.log(startSpeed)
    }
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 3)
      somDoJogo.stop()
      somMorri.play()
      noLoop()
      setTimeout(() => {
        window.location.reload()
      },3000 )
    }

  }
}