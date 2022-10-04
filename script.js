// // 'use strict';
// // // // const answer = [];
// // // // answer[0] = prompt('как ваше имя?', "");
// // // // answer[1] = prompt('какая увас фамилия?', "");
// // // // answer[2] = prompt('сколько вам лет?', "18");
// // // // console.log(answer);

// // // const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели??', '');
// // // const personaMovieDB = {
// // //    count: namberOfFilms,
// // //    movies: {
      
// // //    },
// // //    actors: {},
// // //    genres: [],
// // //    privat: false
// // // };

// // // const a = prompt('один из последних просмотреных фильмов?', ''),
// // //       b = prompt('На сколько вы оцените его?', ''),
// // //       c =  prompt('один из последних просмотреных фильмов?', ''),
// // //       d = prompt('На сколько вы оцените его?', '');

// // // personaMovieDB.movies[a] = b;
// // // personaMovieDB.movies[c] = d;

// // // console.log(personaMovieDB);
// // // console.log();


// // // console.log(5 === 5 && 3> 1 || 5);

// // // let hamburger;
// // // const fries = NaN;
// // // const cola = 0;
// // // const nuggets = 2;
// // // if (hamburger && cola || fries === 3 && nuggets ) {
// // //    console.log('Done');
// // // }
// // // let hamburger;
// // // const fries = NaN;
// // // const cola = 0;
// // // const nuggets = 2;
 
// // // if (hamburger && cola || fries === 3 && nuggets) {
// // //    console.log('Done!');
// // // // }

// // // // let result = '';
// // // // const length = 7;
// // // // for (let i = 1; i < length; i++){
// // // //       for (let j = 1; j < i; j++){
// // // //          result += '*';
// // // //       }

// // // //    result += '\n';
// // // // }
// // // // console.log(result);

// // // // Место для первой задачи
// // // // function firstTask() {
// // // //    for(let i = 5; i <= 10; i++){
// // // //       console.log(i); 
// // // // //    }
   
// // // // // }
// // // // //  firstTask();

// // // // function secondTask(){
// // // //    for(let i = 20; i >= 10; i--){
// // // //       if(i === 13) break;
// // // //       console.log(i);
      
// // // //    }
// // // // }
// // // // secondTask();

// // // function thirdTask() {
// // //    for( let i = 2; i <= 10; i++){
// // //       if(i%2 ===0){
// // //          console.log(i);
// // //       }
// // //    }
// // // }
// // // thirdTask();

// // // let i = 2;
// // // while(i <=16){
  
// // //    if (i % 2 === 0){
// // //       i++;
// // //       continue;
// // //    } else { console.log(i);}
// // //    i++;
// // // // }
// // // function fivthTask(){
// // //    const arrOFNumber = [];
// // //    for (let i = 5; i <=10; i++){
// // //       arrOFNumber[i - 5] = i;
      
// // //    }console.log(arrOFNumber);
// // //    return arrOFNumber;
// // // }
// // // fivthTask();

// // // function firstTask() {
// // //    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// // //    const arr = [3, 5, 8, 16, 20, 23, 50];
// // //    const result = [];
// // //    for(let i = 0; i < arr.length; i++){
// // //       result[i] = arr[i];
// // //    }
// // //    console.log(result);
   
   
   
// // //    return result;
// // // }
// // // firstTask();

// // // function secondTask(){
// // //    const data = [5, 10, 'shoping', 20, 'HomeWork' ]
// // //    for (let i = 0; i <= data.length; i++ ){
// // //       if(typeof(data[i]) == 'number'){
// // //          data[i] = data[i] * 2;
// // //       } else if (typeof(data[i]) === 'string'){
// // //       data[i] = `${data[i]} - done`;
// // //       }
// // //    }
// // //    console.log(data);
// // //    return data;
// // // }
// // // secondTask();
 



// // function sayHello(name){
// //    return 'ПРИВЕТ', `${name}`;
// // }
// // sayHello('антон');

// // function sayHello(name) {
// //    return `Привет, ${name}!`;
// // }
// // console.log(sayHello('Alex'));


// // function returnNeighboringNumbers(num) {
// //    return [num - 1, num, num + 1];
// //    }
// //  console.log(returnNeighboringNumbers(5));
  



// // function getMathResult(num, tame) {
// //    if(typeof(tame) !== 'number' || tame <= 0 ){
// //       return num;
// //    }

// //  let str = '';

// // for (let i = 1; i <= tame ; i++ ){
// //    if( i === tame){
// //       str +=  `${num * i}`; 
// //    } else {
// //        str += `${num * i}---`;
// //    }
 
// //  }
// //   return str;
// // }


// // console.log(getMathResult(5,3));


// // const ctr = 'Lorem ipsum dolor sit amet';
// // console.log(ctr.indexOf('ipsum'));
// // console.log(ctr.slice(6));

// // const test = '0.4phghghgx';
// // console.log(parseInt(test));



// let a = Math.pow(2, 4);
// console.log(a);

// function calculateVolumeAndArea(length) {
// if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)){
//    return 'при вычесление вышла ошибка';
// }
//    let V = Math.pow(length, 3);
//    let S = 6 * (Math.pow(length, 2));
//    return`Обьем куба ${V}, площадь всей поверхности ${S}`;
  

// }
// console.log(calculateVolumeAndArea('5'));

// // местс 1 по 36
// // вкупе 4 места, если 0 , или  больще 36 "такого значения не существует"
// // есди не чсело или в -- то "проверте правильность написания"
// // как вычситать номер купе ?? в купе 4 место место делим на 4 и округляем в большую сторону

//    function getCoupeNumber(side) {
//       if(side == 0 || side>36){
//          return 'такого значения не существует';
//       }else if(typeof(side) !== 'number' || side < 0 ||  !Number.isInteger(side)){
//          return "проверте правильность написания";
//       }  let cupe = Math.ceil(side/4);
//          return cupe;
//    }
//    console.log(getCoupeNumber(6));

//    // сощдать функцию вводим  цулое число минуты выводим часы минуты . 150 минут = 2  часа 30 минут 
// // запись времени изменяестя 1 час 2 часа 0 часов
//    function getTimeFromMinutes(sek) {
//       let hours = Math.floor(sek/60);
//       let min = sek%60;

//       if(typeof(sek) !== 'number' || sek < 0 ||  !Number.isInteger(sek)){
//          return 'Ошибка, проверте данные';
//    } else if(hours < 1 || hours >4){
//       return `${hours} часов ${min} минут`;
//    } else if(hours > 1 || hours < 5){
//       return `${hours} часa ${min} минут`;
//    }
//     return `${hours} час ${min} минут`;
//    }
//    console.log(getTimeFromMinutes(250));

//    function findMaxNumber(a, b, c, d) {
//       if(typeof(a) !=='number' || typeof(b) !=='number' || typeof(c) !=='number' || typeof(d) !=='number'){
//          return 0 ;
//       } return Math.max(a, b, c, d);
//    }


//   console.log( findMaxNumber(3,5,6,'10',)); 

// //   функция которая принемает целое положительное число и возвращает в строку через пробел число по порядку фобоначи 0 1 1 2 3 5 8  и т.д. количестыо = аргументу

//   function fib(num) {
//    if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
//       return "";
//    }
//    let a = 0;
//    let b = 1;
//    for(let i = 1; i <= num; i++ ){
//     let  c = a + b;
//       a = b;
//       b = c;
//    }
//     return c;
    
// }

// console.log(fib(6));



// // Обьекты
// const option = {
//    name: 'test',
//    width: 1075,
//    heigth: 1034,
//    colors:{
//       border: 'black',
//       bg: 'Red',
//    }
// };
// // let counter = 0; определение количество свойст в обьекте через подсчет counter
// for(let key in option){//перебор всех свойств в обьекте
// //    // if(typeof(option[key]) === 'object'){//если тип обьект то выплняем for in i
// //    //    for(let i in option[key]){
// //    //       console.log(`свойство ${i} со значением ${option[key][i]}`);// обрашаемся к оьекту i d внутри key
// //    //       counter++;
// //    //    }
// //    //    } else{ 
// //    //        console.log(`свойство ${key} со значением ${option[key]}`);
// //    //        counter++;
// //    // }}
// // counter++;
// let a = Object.keys(option[key]).length;
// console.log(a);
// }
// // console.log(counter);


// const arr = [2, 3, 4, 6, 8];
// arr[5]= 6;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item, i, arr){//метод  для перебора в масиве, №1 это насвание того что вмасиве; №2 порядковы й номер; №3 название масива котрый перебераем
// console.log(`${i}: ${item} внутри масива ${arr}`);
// });

// // СПОТОБ копирования обьекта
// function copy(mainObj){
//    const copyObj ={};

//    let key;
//    for( key in mainObj){
//       copyObj[key] = mainObj[key];
//    }
//    return copyObj;
// }

// const number = {
//    a: 5,
//    d: 6,
//    c: {
//       g: 8,
//       o: 9,
//    }
// };

// const newObj = copy(number);
// newObj.a = 10;
// newObj.c.o = 'kjfkdfh';

// console.log(newObj);
// console.log(number);
// // второй способ клонировать обьект
// const add = {
//    a: 7,
//    b: 9,
//    c: {
//       g: 87,
//    }
// };


// const clone = Object.assign({}, add);

// clone.c.g = 'lkcjskjkds';

// console.log(clone);
// console.log(add);

// // копия мвсиивы

// const oldArr = ['a', 'd', 'b',];

// const newArr = oldArr.slice();

// newArr[1] = 'kjh';
// console.log(newArr);
// console.log(oldArr);

// // развертывание
// const video = ['youtube', 'video', 'kinopoisk'],
//       blog = ['vk', 'insta', 'fB',],
//       internet = [...video, ...blog, 'jj', ];

// console.log(internet);      

// function log(a, b, c){
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const num = [5, 7, 2];
// log(...num);// эти три ... они развертывают ланные из масива


// // функция принемает на себяобьект со всеми данными и возвращает нужный 
// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//        languages: ['ru', 'eng'],
//        programmingLangs: {
//            js: '20%',
//            php: '10%',
//            ruby: '30%'
//        },
//        exp: '1 month'
//    },
//    showAgeAndLeng: function(plan){
//       const {age} = plan;
//       const {languages} = plan.skills;
//       let str = `Мне ${age} лет, яговорю на язках:`;
//       languages.forEach(function(lang){
//          str +=`${lang.toUpperCase()}`;
//       });
//       return str;
//    }
// };
// personalPlanPeter.showAgeAndLeng(personalPlanPeter);

// function showExperience(plan) {
//   const {exp} = plan.skills;
//    return `Мой опыт в програмирование ${exp}`;
// }
// showExperience( personalPlanPeter);

// function showProgrammingLangs(plan) {
//    let str = '';
// const {programmingLangs} = plan.skills;
// for(let key in  programmingLangs){
//    str += `язык ${key} изучен на ${ programmingLangs[key]} \n`;
// } 
// return str;
// }
// showProgrammingLangs(personalPlanPeter);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//  const {famaly} = arr;
//  arr.length ===0?
//    console.log(`семья пустая`):
//  console.log(`семья состоит из: ${arr.join(' ')}`);
// }

// showFamily(family);

// const favoriteCities = ['liSBon', '', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    let str= '';
//     const {favoriteCities} = arr;
//     str = `${arr.join('\n').toLowerCase(arr)}`;
//     console.log(str);
// }
// standardizeStrings(favoriteCities);

// const family1 = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    arr.forEach(sity => {
//       console.log(sity.toLowerCase());
//    });
// }

// showFamily(family1);

// const someString = 'kjdfkjdfkjsk dsflkjdskfj ksjfdksjf';

// function reverse(str) {
//    let str2 = '';
// typeof(str) !=='string' ? str2 = 'Ошибка' : str2 = str.split('').reverse().join('');
// console.log(str2);
// }
// reverse(someString);

// // функциябудет принематьданные из обоих масивов . в первом аргументе все доступные валюты. во втором ту валюту котороя закончилась. если массив в первом аргументе пустой то соопщение "нет доступных валют"
// // const baseCurrencies = ['USD', 'EUR'];
// // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// //  const allCurrencies = baseCurrencies.concat(additionalCurrencies);
// // function availableCurr(arr, missingCurr) {
  
// // let str = '';
   
// //      arr.length === 0 ? str = 'нет доступных валют': str += 'доступные валюты:\n';// эти мы выводим строку 
   
// //      arr.forEach(function (curr, i){//этой функцией мы перебираем масиф и результат выводим 
// //       if(curr !== missingCurr){
// //          str += `${curr}\n`;
// //       }
// //      }
// //      );
// //    console.log(str);

// // }
// // availableCurr(allCurrencies, 'CNY');// ... соединяют два массива

// // нужен метоткотрый соединяет масивы


// const shoppingMallData = {
// shops: [
//    {
//        width: 10,
//        length: 5
//    },
//    {
//        width: 15,
//        length: 7
//    },
//    {
//        width: 20,
//        length: 5
//    },
//    {
//        width: 8,
//        length: 10
//    }
// ],
// height: 5,
// moneyPer1m3: 20,
// budget: 50000
// };

// function isBudgetEnough(data) {
//    let s = 0;
//    let V = 0;
//  data.shops.forEach(shops =>
// s += shops.width * shops.length);

// V += s * data.height;

// if( V * data.moneyPer1m3 <= data.budget){
//   console.log ('бюджета достаточно'); // тут true но все равно выводится else 
// } else {  console.log( 'надо еще денег');
// }
// console.log(data.moneyPer1m3 <= data.budget); // true 
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];


// function sortStudentsByGroups(arr) {
//    arr.sort();
//    const a = [], b = [], c = [], rest = [];
// for(let i = arr.length; i <= 3; i++){
//    if(i<3){
//       a.push(arr[i]);
//    } else if (i < 6){
//       b.push(arr[i]);
//    }else if(i < 9){
//       c.push(arr[i]);
//    } else {
//       rest.push(arr[i]);
//    }console.log([...a, ...b, ...c, ...`оставшиеся студенты ${rest.length ===0 ? ' ' : rest.join(' ,')}`]).join();
// }}
// sortStudentsByGroups(students);


// console.log("Ёжик" < "яблоко");