"use strict";
 
// так как кнопки упраляютто в началенужнополучить их
const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      container = document.querySelector('.container');

const slideCount = mainSlide.querySelectorAll('div').length;
// в эту переменную записываем количество картинок(это массив и lenght определяет количество)
// slideCoun это массив 
 let activeSlideIndex = 0;
//  в эту переменную будет записыватся текушее положение слайда
 
sidebar.style.top = `-${(slideCount - 1) * 100}vh`;
// чтобы картинка совподала с градиентом нужно сдвинуть на количество картинок * на 100vh
// нужно определить количество картинок

upBtn.addEventListener('click', () => {
   changerSlide('up');
});
// когда произойдет событие вызовется функция
downBtn.addEventListener('click', () => {
   changerSlide('down');
});

document.addEventListener('keydown', event => {
   //keydown это событие нажатие на кнопку, слущаем это событие 
   if (event.key === 'ArrowUp'){
      // и если нажата вверх
      changerSlide('up');
   } else if(event.key === 'ArrowDown'){
      // если нажата вниз, все остальные игнорируются
      changerSlide('down');
   }
});

function changerSlide(derection){
   if(derection === 'up'){
      activeSlideIndex++;
      // если нажали up то в переменную запишится +1
      if(activeSlideIndex === slideCount){
         activeSlideIndex = 0;
         // проверка если в преременной будет столько же как и slideCount то обнулится
      }  
   } else if (derection === 'down'){
      activeSlideIndex--;
      // если нажата down то -1
      if(activeSlideIndex < 0){
         activeSlideIndex = slideCount - 1;
         // тоже проверка если < 0 т.е. -1 то присваиваем значение  
      }
   }
   const height = container.clientHeight;
   // определити высоту container с помощью свойства , и записали в переменную height
   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
   // добовляем анимацию спомощью transform. число полученое в activeSlideIndex(тукушее положение слайда) умнажаем на высоту контенера
   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
   // тожеделаем для sidebar, только убираем минус пере ${}
}