// Mostre no console cada parágrado do site
const paragraph = document.getElementsByTagName('p')
console.log(paragraph)
// Mostre o texto dos parágrafos no console
const arrayPa = Array.from(paragraph)
arrayPa.forEach((element) => {
  console.log(element.innerText)
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ( )=> {
  console.log(i++);
});

imgs.forEach(() => i++);
