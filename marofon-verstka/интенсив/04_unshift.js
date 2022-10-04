const array = [1, 1, 2, 3, 5, 8, 13];

fu

// const newLength = array.unshift(42)
const newLength = array.unshift(array, 42)
console.log(array);
console.log(newLength);