// Retorne no console todas as imagens do site
const imgConsole = document.querySelectorAll('img')
console.log(imgConsole)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgFirstLetter = document.querySelectorAll('img[src^="img/image"]')
console.log(imgFirstLetter)
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.garden-description h2')
console.log(firstH2)

// Selecione o último p do site
const lastP = document.querySelectorAll('p')
console.log(lastP.length)
console.log(lastP[28])
