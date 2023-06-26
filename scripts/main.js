//Змінює текс заголовку
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Arthas!';

const image = document.querySelector('img');

//При написканы на зображення змынюэ його
image.addEventListener('click', () => {
  
  image.src = 'images/photo2.png';
});