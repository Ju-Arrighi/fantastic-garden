// Adicione a classe ativo a todos os itens do menu
const ativo = document.querySelector('.menu')
// ativo.classList.add('ativo')
let li = Array.from(ativo.getElementsByTagName('li'))
console.log(li)
li.forEach(element => {
  element.classList.add('ativo')
  console.log(element)
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (let index = 1; index < li.length; index++) {
  console.log(li[index].classList.toggle('ativo'));
  // console.log(element)
}

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img')
img.forEach(element => {
  console.log(element.hasAttribute('alt'))
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')
console.log(link)
link.setAttribute('href', 'https://www.linkedin.com/in/juliana-arrighi/');
