// переберает массив изменяет его и возврашает. метод перебора
const array = [1, 1, 2, 3, 5, 8, 13];

function map(arr, callbackFn){
   const result = []
   for( let i = 0; i< arr.length; i++){
      result.push(callbackFn(arr[i], i, arr))
   }
   return result
}
// console.log(map(array), 3);
