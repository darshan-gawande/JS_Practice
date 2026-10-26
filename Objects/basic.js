"use strict"

// Object literals
let f = "action";
const tasks = {
    action : "create",
    isDone : true,
    estHours: 20,
    getTask : () => {
        return true;
    }
};


// bracket notation 
let temp = "isDone";
// console.log(tasks[temp]);


const obj = {};
const parent = { foo: 'bar' };

// console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

// console.log(obj.foo);
// Expected output: "bar"

const array1 = ['a', 'b', 'c'];

const iterator = array1.entries();

// console.log(iterator.next().value);

const arr = [1,3,4,5];
arr.sort();

console.log(arr);

console.log("" == false);

const res = null ?? "default";
console.log(res);


