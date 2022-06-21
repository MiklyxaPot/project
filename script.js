// const answer = [];
// answer[0] = prompt('как ваше имя?', "");
// answer[1] = prompt('какая увас фамилия?', "");
// answer[2] = prompt('сколько вам лет?', "18");
// console.log(answer);

const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели??', '');
const personaMovieDB = {
   count: namberOfFilms,
   movies: {
      
   },
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c =  prompt('один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько вы оцените его?', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);
console.log();



