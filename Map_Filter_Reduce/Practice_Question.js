// How would you use filter to remove all even numbers from an array of integers?

// approach: 1
let arr = [1,2,3,4,5,6];

let Removed_Array = arr.filter((x) => {
    if(x % 2 !== 0) {
        return x;
    }
});
//  console.log(Removed_Array);

// approch: 2
 arr.map((element, index) => {
    if(element % 2 === 0) {
      return arr.splice(index,1);
    }
});

// console.log(arr);

arr.forEach(element => {
    if(element % 2 === 0) {
        return arr.splice(0, element, 1);
    }
});

console.log(arr);


// What is the return value of forEach in JavaScript? Does it modify the original array?

const m = [10,20,30,40];

let a = m.forEach((element) => console.log(element * 2));
console.log(a);


