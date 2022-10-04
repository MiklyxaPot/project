const startBtn = document.querySelector('#start'),
      screens = document.querySelectorAll('.screen'),
      timeList = document.querySelector('#time-list'),
      timeEl = document.querySelector('#time'),   
      board = document.querySelector('#board');

let time = 0;
let score = 0;
//пременная где будет хранится значение времени
startBtn.addEventListener('click', (event) =>{
   event.preventDefault();
   //в первую очередьотменчем действие браузера по умолчанию
   screens[0].classList.add('up');
   //кпервому экрану добавили класс,он сработает когда произойдет событие 
});

timeList.addEventListener('click', (event) => {
   if(event.target.classList.contains('time-btn')){
      // изза метода contains() происходит сравнение является ли time-btn детем  timeList, если true 
      time = parseInt(event.target.getAttribute('data-time'));
      // дата атребтюты мы вписали в HTML метод getAttribute() выводит их в строке, parseInt() делает изних число
      screens[1].classList.add('up');
      startGame();
   }
});

board.addEventListener('click', event => {
   if(event.target.classList.contains('circle')) {
      score ++;
      event.target.remove();
      createRandomCircle();
   }
})

function startGame(){
   setInterval(decreaseTime, 1000);
   createRandomCircle();
  setTime(time); 
}


function decreaseTime() {
   if(time === 0){
      finishGame();
   }else {
      let current = --time;
      if(current < 10) {
         current = `0${current}`;
      }
      setTime(current);
   } 
}

function setTime(value) {
   setInterval(decreaseTime, 10000)
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
   timeEl.parentNode.classList.add('hide');
   // скрываем родителя надпись осталось
   board.innerHTML = `<h1>Счет: <span class = "primary">${score}</span> </h1>`;
}

function createRandomCircle() {
   const circle = document.createElement('div');
   const size = getRandomNumber(10, 60);

   const {width, height} = board.getBoundingClientRect();
   const x = getRandomNumber(0, width - size);
   const y = getRandomNumber(0, height - size);

   circle.classList.add('circle');
   circle.style.width = `${size}px`;
   circle.style.height = `${size}px`;
   circle.style.top = `${y}px`;
   circle.style.left = `${x}px`;

   board.append(circle); 
}

function getRandomNumber(min, max){
   return Math.round(Math.random() * (max - min) + min);
}
