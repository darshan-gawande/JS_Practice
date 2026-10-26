// Uses:
//  to add element into existing array
let arr = [1,2,3,4,5];
let arr1 = [...arr,[1,2],3,4,5];
// console.log(arr1);

//  pass the element of an array as an argument to a function
function abc(a,b,c) {
    return a + b + c;
};
// arr[1,2,3];

// console.log(abc(...arr));

// to copy array
let a = [...arr];
// a = arr.slice(0,4);   // slice method

// console.log(a);

// to concatenate the array
let a1 = [1,2,3];
let a2 = {4: "1"};
// console.log(...a1, ...a2);
console.log(Array.isArray(a2));










