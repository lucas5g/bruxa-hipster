const matriz = ({linhas, colunas, altura, largura }) =>{
 
  const makeMatriz = []
  let x = 0
  let y = 0
  for(let cont = 0; cont <  colunas * linhas; cont++){
    
    makeMatriz[cont] = [x,y]    

    if(x === colunas *  largura - largura){
       y+= altura
       x = 0
    }else{
      x += largura
    }      
      
      
  }
  return makeMatriz
 
}