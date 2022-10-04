

'use strict';

document.addEventListener('DOMContentLoaded', () =>{// страница может загружатся долшго, для этого скрипт записываем в комбек функцию
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // const genre = document.querySelector(".promo__genre");
    
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          ganre = poster.querySelector('.promo__genre'),
          moviesList = document.querySelector('.promo__interactive-list'),  
          addForm = document.querySelector('form.add'),// у нас форма для ввода фильма, поэтому к ней обрашаемся
          addInput = addForm.querySelector('.adding__input'),// куда вводить  название фильма, а тк он находится внутри form то через него заодим
          checkbox = addForm.querySelector('[type="checkbox"]'); //куда  галочку поставить, удобнло находитьчерез тип(это запомнить)
    
    addForm.addEventListener('submit', (event) => {//когда произойдет событие(event) -- 'submit'(отправка формы), тогда исполнится эта фнткция
        event.preventDefault(); //отменяем стандартнрое поведение браузера, страница не будет перезагружатся

        let newFilm = addInput.value;// value значение импута
        const favorite = checkbox.checked; //атрибут checked имеет булиновое значение truy(галочка есть) или false(пусто )

        if(newFilm){//ПУСТАЯ СТОРОКА это false, проэтому только если чтото записали выполнятся все последующие действия

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite){
                console.log('Любимый фильм');
            }

            movieDB.movies.push(newFilm);//добывили новый фильм в масив
            sortArr(movieDB.movies);// отсортировали
            createMovieList (movieDB.movies, moviesList );//пересоздали новый список на строницу
        }
       
        event.target.reset();//чистили форму обращаемся к самому событию накотором происходит событие
     });
    
    const deleteAdv = (arr) =>{
        arr.forEach(item => {
            item.remove();
         });
        };
        
    
        const makeChanges = ()=>{
           ganre.textContent = 'Драма';

            poster.style.backgroundImage = 'url("img/bg.jpg")'; 
        };
    

    const sortArr = (arr) =>{
        arr.sort();
    };
    
   
  
    function createMovieList (films, parent){
        parent.innerHTML = "";
        sortArr(films);//сортировка переменная это movieDB.movies заданная в вызове
        
        films.forEach((film, i) => {
            parent.innerHTML +=`
             <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
              </li>
              `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);//переменные заданы в вызове функции 
            } );
        });
    }
   
    deleteAdv(adv);
     makeChanges();
    
     createMovieList (movieDB.movies, moviesList );
   });