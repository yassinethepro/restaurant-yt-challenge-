let btnMenu = document.getElementById('menu-btn');
let cuisine = document.querySelector('.cuisine');
let content = document.querySelector('.content');
let container = document.querySelector('.container');

btnMenu.addEventListener('click',()=>{
   cuisine.classList.toggle('hide-cuisine-section')
   
   content.style.display = 'none'
   container.style.backgroundColor = 'red'
})
