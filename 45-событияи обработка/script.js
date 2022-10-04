const btns = document.querySelectorAll('button');


// btn.onclick = function(){
//    alert('Click');
// };

// btn.addEventListener('click', () => {
//    alert('Click');
// });

// let i = 0;
//  const deletElement = (e) => {
//    console.log(e.target);
//    i++; 
//    if(i == 1){
//       btns.removeEventListener('click', deletElement);
//    }};
 
// btns.addEventListener('click', deletElement);

const eventElement = (event) =>{
   console.log(event.target);
   console.log(event.type);
}
btns.forEach(btn =>{
   btn.addEventListener('click', eventElement );
});