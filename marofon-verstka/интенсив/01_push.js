const array = [1, 1, 2, 3, 5, 8, 13];

// array.push(21);
function push (arr, num){
   arr[arr.length] = num;
   return arr.length ;
}
// эта функция показывает как работает метод push, 
const res = push(array, 21);

console.log(array);

// какработет push 