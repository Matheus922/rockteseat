function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const imag = document.querySelector("#profile img")
  
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
  imag.setAttribute("src", "./assets/avatar-light.png")
  } else {
   imag.setAttribute("src", "./assets/avatar.png")
    //se tiver sem o light mode, manter a imagem normal
  }

  

}
