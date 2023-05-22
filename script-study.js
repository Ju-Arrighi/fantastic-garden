// Element Selection
const gardenSection = document.getElementById('garden')
console.log(gardenSection)
const primeiraLi = document.querySelector('ul')
console.log(primeiraLi)
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl.outerHTML)
const fotosGarden = document.querySelectorAll('.garden-list img');
console.log(fotosGarden)

const htmlColection = document.getElementsByClassName('grid-section')
const nodeColection = document.querySelectorAll('.grid-section')
console.log(htmlColection)
console.log(nodeColection[0])


const gridSection = document.querySelectorAll('grid-section')
console.log(gridSection)

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

const arrayGrid = Array.from(htmlColection)
