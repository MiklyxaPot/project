const btn = document.querySelectorAll('button'),
      wrapper = document.querySelector('btn-block');


// console.log(btn[0].classList.length);

// console.log(btn[0].classList.item(1))
// console.log(btn[0].classList.add('red'));
// console.log(btn[0].classList.remove('blue'));
// console.log(btn[0].classList.toggle('blue'));

// if(btn[0].classList.contains('red')){
// console.log('red');
// }

btn[0].addEventListener('click', () => {
   if(!btn[1].classList.contains('red')){
      btn[1].classList.add('red');
   } else{
      btn[1].classList.remove('red');
   }
});

wrapper.addEventListener('click', (event) => {
   if(event.target && event.target.tagName == 'BUTTON'){
      console.log('Hello');
   }

} );
