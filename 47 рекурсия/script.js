// "use strict";

// function pow(x, n){
//    if(n === 1){
//       return x;
//    } else {
//       return x *= pow(x, n - 1);
//    }
// }

// pow(2, 1);
// pow(2, 2);

// // function pow(x, n){
// //    let result = 1;
// //    for (let i = 0; i < n; i++){
// //       result *= x;
// //    }
// //    console.log(result);
// // }

// // pow(2, 1);
// // pow(2, 2);

// let students = {
//    js: [{
//       name: 'Jone',
//       progress: 100
//    }, {
//       name: 'Ivan',
//       progress: 60
//    }],

// html:{
//    basis: [{
//    name: 'Peter',
//    progress: 20
// }, {
//    name: 'Ann',
//    progress: 50

// }],
// pro: [{
//    name: 'Sam',
//    progress: 40
// }],
// some:{
//    students:[{
//    name: 'test',
//    progress: 100
// }]   
// }
// }};

// // function getTotalProgressByIteration(data){
// //    let total = 0;
// //    let students = 0;
// //    for (let course of Object.values(data)){
// //       if(Array.isArray(course)){//если это массив то делаем эти операции
// //          students += course.length;// .length определяет какой длины массив , а у нас там только два элемента зачит студентс запиштся 2 
         
// //          for(let i = 0; i < course.length; i++){//  так как у нас массив с обьектами  можеим перебрать каждый и course[i].progress (это число) плюсуем  вместея 
// //             total += course[i].progress;
// //          }  
// //       }else {
// //          for (let subCourse of Object.values(course)){// в прошлом цыклк for.. мы задали переменную course напроленую значениями data. сейчас мы задаем пременную которая напрлнена значениями обьнектов внути let course
// //             students += subCourse.length; 
// //             for(let i = 0; i < subCourse.length; i++){//
// //                total += subCourse[i].progress;
// //          }
// //       }
// //    }}
// // return total/students;

// // }
// // console.log (getTotalProgressByIteration(students)); //сюда выводится результат return total/student

//  function getTotalProgressByRecursion (data){
//       if(Array.isArray(data)){//для начало провряум что data является масивом 
//          let total = 0;
         
//          for(let i = 0; i < data.length; i++){
//             total += data[i].progress;   
//          }
//          return [total, data.length];// нужно  обязательно вернуть знвчения, вэтом случае: у нас два значения вычситаное total, и полученое количество студентов как просто длина масива data.length. возврашаем масив
//       }else {
//          let total = [0, 0];
//          for(let subData of Object.values(data)){//так как массив мы уже проверили оператор else сработает если натыкаемся на  обьект и запускаем функцию на тегже данных
//             const subDateArr = getTotalProgressByRecursion(subData);
//             total[0] += subDateArr[0];
//             total[1] += subDateArr[1];

//          }
//          return total;
//       } 
//    }

//    const result = getTotalProgressByRecursion(students);
//    console.log(result[0]/result[1]);


function factorial(n) {
   if (typeof(n) !== 'number' || !Number.isInteger(n)) {
       return "Ошибка, проверьте данные";
   }

   if (n >= 1) { 
       return n * factorial(n - 1); 
      
   } else {
       return 1;
   }
}

console.log(factorial(7));