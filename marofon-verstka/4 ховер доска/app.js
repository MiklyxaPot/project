const board = document.querySelector('#board');
const SQUARE_NUMBER = 600;
//количество квадратиков
const colors = ['red', 'blue', 'green', 'yellow', 'purple']
//массив с набором цветов, откуда  будут братся рамдомно с помощью функции 

// квадратики будут создаватся деномически с помощьюцыкла for

for(let i = 0; i < SQUARE_NUMBER; i++) {
const square = document.createElement('div');
// цикл for будет  пробегать по  переменой SQUARE_NUMBER И каждый раз создавать 'div'
square.classList.add('square');
//также добавлять класс  к квадратику 

// square.addEventListener('mouseover', () => 
// setColor(square));
//вешаем слушателя событий = mouseover это событие когда мышка проходит
// когда это событие происходит вызывается функция setColor
// square.addEventListener('mouseleave', () => 
// removeColor(square));
// когда мышкаубирается вызавается эта функция
// board.append(square);
//с  помощью ьетода append мы вставляем в board квадрат
// }

// function setColor(element) {
//    const color = getRandomColor();
//    //сначало получаем цвет с помощью функции
//    element.style.backgroundColor = color;
//    // передаем его сюда с помощьюпеременной colors 
//    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
//    // благодаря `${}` можно передавать деномические свойства 
// }

// function removeColor(element) {
//    element.style.backgroundColor = '#1d1d1d';
//    //просто меняется цвет на изначальный, как буддто исчезает.
//    element.style.boxShadow = `0 0 2px #000`;
//    //чтобы исчез эфект,изночально вернулось
// }

// ДРУГОЙ СПОСОБ
square.addEventListener('mouseover',
setColor);
// замыкание функции
square.addEventListener('mouseleave', 
removeColor);

board.append(square);
}

function setColor(event) {
      const element = event.target;
      const color = getRandomColor();
      //сначало получаем цвет с помощью функции
      element.style.backgroundColor = color;
      // передаем его сюда с помощьюпеременной colors 
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
      // благодаря `${}` можно передавать деномические свойства 
   }
   
   function removeColor(event) {
      const element = event.target;
      element.style.backgroundColor = '#1d1d1d';
      //просто меняется цвет на изначальный, как буддто исчезает.
      element.style.boxShadow = `0 0 2px #000`;
      //чтобы исчез эфект,изночально вернулось
   }


function getRandomColor() {
   // рамдомное число(оно  всегда меньше нуля) * на длину массива и округляем(в меньшую сторону) до целого числа, 
   return colors[Math.floor(Math.random() * colors.length)]
   //на выходе возвращаем массив colors с динамическим индексом который получили  
}