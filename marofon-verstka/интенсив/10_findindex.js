const array = [1, 1, 2, 3, 5, 8, 13];


// function find(arr, callback){
//    for(let i = 0; i< arr.lenght; i++){
//       const doesExists = callback(arr[i])
//       if(doesExists){
//          return arr[i]
//       }
//    }
// }

const res = array.findIndex(item =>item === 8)

console.log(res);