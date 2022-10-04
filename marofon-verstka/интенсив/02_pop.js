const array = [1, 1, 2, 3, 5, 8, 13];

// const res = array.pop();

//как работает метод pop 

function pop (arr){
   const lastItem = arr[arr.length - 1];
   //получаем последний элемент и удаляем 
   arr.length -= 1;
   return lastItem;
}

const res = pop(array);

console.log(array);
console.log(res);