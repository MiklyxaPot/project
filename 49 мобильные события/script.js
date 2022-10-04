window.addEventListener('DOMContentLoaded', () =>{
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) =>{
      e.preventDefault();
      // методкоторый отменяет стандартное поведение браузераб которое может быть не такое какое мы ждем, всегада нужно вещать

   })
});