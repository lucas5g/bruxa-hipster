class TelaInicial{
  constructor(){

  }

  draw(){
    image(imagemTelaInicial, 0, 0, width, height)
    textFont(fonteTelaInicial)
    textSize(50)
    textAlign(CENTER)
    text('As aventuras da ', width / 2, height / 3)
    textSize(150)
    text('Hipsta', width /2, height / 5 * 3)
    botaoGerenciador.y = height / 7 * 5
    botaoGerenciador.draw()


  }
}