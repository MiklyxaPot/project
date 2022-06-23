// 'use strict';
// // // const answer = [];
// // // answer[0] = prompt('как ваше имя?', "");
// // // answer[1] = prompt('какая увас фамилия?', "");
// // // answer[2] = prompt('сколько вам лет?', "18");
// // // console.log(answer);

// // const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели??', '');
// // const personaMovieDB = {
// //    count: namberOfFilms,
// //    movies: {
      
// //    },
// //    actors: {},
// //    genres: [],
// //    privat: false
// // };

// // const a = prompt('один из последних просмотреных фильмов?', ''),
// //       b = prompt('На сколько вы оцените его?', ''),
// //       c =  prompt('один из последних просмотреных фильмов?', ''),
// //       d = prompt('На сколько вы оцените его?', '');

// // personaMovieDB.movies[a] = b;
// // personaMovieDB.movies[c] = d;

// // console.log(personaMovieDB);
// // console.log();


// // console.log(5 === 5 && 3> 1 || 5);

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
// // if (hamburger && cola || fries === 3 && nuggets ) {
// //    console.log('Done');
// // }
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!');
// // // }

// // // let result = '';
// // // const length = 7;
// // // for (let i = 1; i < length; i++){
// // //       for (let j = 1; j < i; j++){
// // //          result += '*';
// // //       }

// // //    result += '\n';
// // // }
// // // console.log(result);

// // // Место для первой задачи
// // // function firstTask() {
// // //    for(let i = 5; i <= 10; i++){
// // //       console.log(i); 
// // // //    }
   
// // // // }
// // // //  firstTask();

// // // function secondTask(){
// // //    for(let i = 20; i >= 10; i--){
// // //       if(i === 13) break;
// // //       console.log(i);
      
// // //    }
// // // }
// // // secondTask();

// // function thirdTask() {
// //    for( let i = 2; i <= 10; i++){
// //       if(i%2 ===0){
// //          console.log(i);
// //       }
// //    }
// // }
// // thirdTask();

// // let i = 2;
// // while(i <=16){
  
// //    if (i % 2 === 0){
// //       i++;
// //       continue;
// //    } else { console.log(i);}
// //    i++;
// // // }
// // function fivthTask(){
// //    const arrOFNumber = [];
// //    for (let i = 5; i <=10; i++){
// //       arrOFNumber[i - 5] = i;
      
// //    }console.log(arrOFNumber);
// //    return arrOFNumber;
// // }
// // fivthTask();

// // function firstTask() {
// //    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// //    const arr = [3, 5, 8, 16, 20, 23, 50];
// //    const result = [];
// //    for(let i = 0; i < arr.length; i++){
// //       result[i] = arr[i];
// //    }
// //    console.log(result);
   
   
   
// //    return result;
// // }
// // firstTask();

// // function secondTask(){
// //    const data = [5, 10, 'shoping', 20, 'HomeWork' ]
// //    for (let i = 0; i <= data.length; i++ ){
// //       if(typeof(data[i]) == 'number'){
// //          data[i] = data[i] * 2;
// //       } else if (typeof(data[i]) === 'string'){
// //       data[i] = `${data[i]} - done`;
// //       }
// //    }
// //    console.log(data);
// //    return data;
// // }
// // secondTask();
 

// const numberOfFilms = +prompt('сколько фильмов вы посмотрели', "");
// const personalMovieDB = {
//    count:  numberOfFilms,
//    movies: {},
// };

// for (let i = 0; i < 2; i++){
//       const  a = prompt('Один из последних просмотреных фильмов?', ''),
//              b = prompt('на сколько оцените его?', '');
//       if (a != null && b != null && a != '' && b != '' && a.length < 50){
//           personalMovieDB.movies[a] = b;
//           console.log('done');
//       }       else {
//          --i;
//          console.log('error');
//       }
         
// }


// if(personalMovieDB.count <10 ){
//    console.log('довольно мало фильмов');
// } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
//    console.log('вы часто смотрете кино');
// } else if (personalMovieDB.count >= 30){
//    console.log(' вы киноман');
// } else {
//    console.log('ощибка');
// }

// console.log(personalMovieDB);


function sayHello(name){
   return 'ПРИВЕТ', `${name}`;
}
sayHello('антон');

function sayHello(name) {
   return `Привет, ${name}!`;
}
console.log(sayHello('Alex'));


function returnNeighboringNumbers(num) {
   return [num - 1, num, num + 1];
   }
 console.log(returnNeighboringNumbers(5));
  



function getMathResult(num, tame) {
   if(typeof(tame) !== 'number' || tame <= 0 ){
      return num;
   }

 let str = '';

for (let i = 1; i <= tame ; i++ ){
   if( i === tame){
      str +=  `${num * i}`; 
   } else {
       str += `${num * i}---`;
   }
 
 }
  return str;
}


console.log(getMathResult(5,3));