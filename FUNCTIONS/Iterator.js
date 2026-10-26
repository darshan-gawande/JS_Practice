const arr = [1,1,3];

// creating iterator of an array
const iterator = arr[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

