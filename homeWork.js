

const personalMovieDB = {
   count:  0,
   movies: {},
   actor: {},
   genres:  [],
   privat: false,
   start: function(){
      personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', "");  
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
      personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', "");
   }},

   remembeMyFilms: function(){
      for (let i = 0; i < 2; i++){
         const  a = prompt('Один из последних просмотреных фильмов?', '').trim,
                b = prompt('на сколько оцените его?', '').trim;
         if (a != null && b != null && a != '' && b != '' && a.length < 50){
             personalMovieDB.movies[a] = b;
             console.log('done');
         }       else {
            --i;
            console.log('error');
         }
      }},
    detectPersonalLevel: function(){

         if(personalMovieDB.count <10 ){
            console.log('довольно мало фильмов');
         } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log('вы часто смотрете кино');
         } else if (personalMovieDB.count >= 30){
            console.log(' вы киноман');
         } else {
            console.log('ощибка');
         }},

      writeYourGenres: function(){
         // for(let i = 1; i<=3; i++){
      //       const ganre = prompt(`Ваш любимый жанр под номером ${i}`);
      //       if(ganre != null && ganre != ''){
      //    personalMovieDB.genres[i - 1] = ganre;
      //    } else {
      //       console.log('не коректные данные');
      //       --i;
      //    }} 

      //   personalMovieDB.genres.forEach((item, i) =>{
      //       console.log(`Любимый жанр ${i + 1} это - ${item}`);
      //    });
      // другой способ
      for(let i = 1; i<2; i++){//один раз будет спрашивать 
      const genres = prompt(`Ввидите Ваши любимый жанры через зыпятую`).toLocaleLowerCase();// метот чтобы привести к неижнему регистру
            if(genres === null || genres === ''){
               console.log('не коректные данные');
               i--;
            } else {
               personalMovieDB.genres = genres.split(', ');
               personalMovieDB.genres.sort();
            }

      }},  

      showMyDB: function (hidden){
         if(!hidden){
            console.log(personalMovieDB);
         }
      },

      toggleVisibleMyDB: function(){
         if(personalMovieDB.privat ){
            personalMovieDB.privat = false;
         }else {
            personalMovieDB.privat = true;
         
      }}
   
};

