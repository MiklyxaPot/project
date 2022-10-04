'use strict';

const slides = document.querySelectorAll('.slide') 

//получитьдоступ к элементу

//перебратькаждый еелемент и повесить на него слушатель 
//первый способ с помощью цыкла
for (const slide of slides){
//создаем переменную которая по очереди мудет каждым елементом из масива slides
slide.addEventListener('click', () => {
   //если на элементе происходит событие клик то на нем исполняется функфия
   clearActiveClasses();

    slide.classList.add('active');
   //эта функция добовляет к элементу класс
});
}

function clearActiveClasses(){
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });
}