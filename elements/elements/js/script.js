'use strict';
// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[2]);

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeard = document.querySelector('.heart'),//тут я обрашаюськ к одному эдементу
      wrapper= document.querySelector('.wrapper');
      console.dir(box);

      // box.style.backgroundColor = 'blue';
      // box.style.width = '500px';
      box.style.height = '300px';
      btns[1].style.borderRadius = '100%';
      box.style.cssText = 'background-color: blue; width: 500px';
      
      // for(let i = 0; i < hearts.length; i++){
      //    hearts[i].style.backgroundColor = 'grey';
      // }

      hearts.forEach(item => {
         item.style.backgroundColor = 'grey';
      });
      const div = document.createElement('div');
      div.classList.add('black');
      // document.body.append(div);

      wrapper.append(div);
      // wrapper.append(div); тожено устаревщее

      // wrapper.prepend(div);

      // hearts[1].before(div);
      // wrapper.insertBefore(div, hearts[0]); тотожено устаревщее  

      // hearts[0].after(div);
      // hearts[0].remove(); удвлить этотэлкмент
      // wrapper.removeChild(hearts[0]);тожено устаревщее


      btns[2].replaceWith(hearts[2]);
      
      // div.innerHTML = '<h1>Hello</h1>';
      div.textContent = "ytllo";

      div.insertAdjacentHTML('beforebegin', '<h2>hello word</h2>');
