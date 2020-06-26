
class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade
    this.x = width 

  }

  move() {
    this.x = this.x - this.velocidade
    //console.log(this.x)
  }
  aparece(){
    this.x = width
  }

}
