const array = [1, 1, 2, 3, 5, 8, 13];

// ишет какойто эедемент по условию и возврашает его,если его нет то undefind

function find(arr, callback){
   for(let i = 0; i< arr.lenght; i++){
      const doesExists = callback(arr[i])
      if(doesExists){
         return arr[i]
      }
   }
}
// так она работает изнутри

// на практике используется впоиске обьектов 

const people = [
   {name: 'micha', age: 36},
   {name: 'Anna', age: 26}
]
const res = find(people, person => person.name === 'micha')
console.log(res);

const res2 = array.find(item =>item === 8)

console.log(res2);