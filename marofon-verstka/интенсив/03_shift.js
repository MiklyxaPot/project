const array = [1, 1, 2, 3, 5, 8, 13];

// const res = array.shift();
// как работает shift

function shift(arr){
   const firstItem = arr[0];
   //получаем первый индекс вмасиве
   // далее удалить превый индекс
   // на следующкм этапе нужно переписать все индексы массива
   for (let i = 0; i < arr.length; i++){
      arr[i] = arr[i + 1]
   //   перемешает индекс на один вперед удаляя превый
   }
    arr.length -= 1
   //  удаляем последний ,он индефайден
 return firstItem
}

const res = shift(array)

const res2 = shift(array)


console.log(res);
console.log(array);