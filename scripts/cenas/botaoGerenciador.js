class BotaoGerenciador {
  constructor(texto, x, y){
    this.texto = texto
    this.x =x
    this.y = y
    this.botao = createButton(this.texto)
   
    this.botao.addClass('botao-tela-inicial')

    console.log(y)
  }

  draw(){
    this.botao.position(this.x, this.y)
    this.botao.mousePressed(() =>  {
      cenaAtual = 'jogo'
      this.botao.remove()
    })
    this.botao.center('horizontal')
  }
}