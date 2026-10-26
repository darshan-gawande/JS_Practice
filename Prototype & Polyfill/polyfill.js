//? polyfill for forEach

const arr = [1,2,3,4,5];
// arr.forEach((el) => console.log(`using forEach method` + el));

// Array.prototype.myForEach = function() {
//     for(let i = 0; i < this.length; i++) {
//         console.log(`element: ${this[i]}, index: ${i}, array: ${this}`);
//     }
// };

// function cbf(el) {
//     console.log(el);
// }
// // arr.myForEach(cbf);

// ----------------------------X-------------------------------
//? polyfill for map 

// const res = arr.map((x) => x * 2);
// // console.log(res);

// Array.prototype.myMap = function(cbf) {
//     const res = [];
//     for (let index = 0; index < this.length; index++) {
//         res.push(cbf(this[index]));
//     }
//     return res;
// };

// const a = arr.myMap((x) => x * 10); 
// console.log(a)  // [2,4,6,8,10]

// ----------------------------X-------------------
// polyfill for filter
// const res = arr.filter((x) => x > 2);
// console.log(res);

// Array.prototype.myFilter = function(cbf) {
//     let res = [];
//     for (let index = 0; index < this.length; index++) {
//         if(cbf(this[index])) {
//             res.push(this[index]);
//         }
//     }
//     return res;
// }

// const res = arr.myFilter((x) => x > 0);
// console.log(res);

// ----------------------------X-------------------
// polyfill for reduce 
// const res = arr.reduce((acc, curr) => acc += curr);
// console.log(res);

// Array.prototype.myReduce = function(cbf, initialValue) {
//     let acc = initialValue;
//     for (let index = 0; index < this.length; index++) {
//          acc = acc ? cbf(acc, this[index]) : this[index];
//     }
//     return acc;
// }

// const res = arr.myReduce((acc, curr) => acc * curr);
// console.log(res);

// ----------------------------X-------------------
//? polyfill for call

const obj = {
    name: "Darshan"
};
function smile(age) { 
    return `Hey, my name is ${this.name} and age is ${age}`;
}

// console.log(smile.call(obj, 25));

// Function.prototype.myCall = function(obj1 = {}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error("not callable");
//      } 
//      obj1 = obj1 || globalThis;

//      let fnSymbol = Symbol();

//      obj1[fnSymbol] = this;

//      let res = obj1[fnSymbol](...args);

//      delete obj1[fnSymbol];

//      return res;
// };

// console.log(smile.myCall(obj, 25));


// Function.prototype.myApply = function(obj1 = {}, ...args) {
//         if(typeof this !== "function") {
//            throw new Error("not callable");
//         } 
//         if(!Array.isArray(...args)) {
//             throw new Error("TypeError: CreateListFromArrayLike called on non-object");
//         }
//         obj1 = obj1 || globalThis;

//         let fnSymbol = Symbol();

//         obj1[fnSymbol] = this;

//         let res = obj1[fnSymbol](...args);

//         delete obj1[fnSymbol];

//         return res;
//     };

//  console.log(smile.apply(obj, [5]));

//  console.log(smile.myApply(obj, [5]));


// ----------------------------X-------------------

//? polyfill for bind

// const bindFunction = smile.bind(obj, 4);
// console.log(bindFunction());

Function.prototype.myBind = function(context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError(this + " is not callable");
    }
    const fn = this;
    // Use apply to call the original function with the bound context and combined arguments
    return function (...newArgs) {
        return fn.apply(context, [...newArgs, ...args])
    }
}

const bindFunction = smile.myBind(obj, 4);
// console.log(bindFunction());

// In this example, smile.myBind(obj, 4) creates a new function bindFunction with this bound to the obj object and 4 pre-set as the first argument. When bindFunction('!') is called, it combines the pre-set argument and new argument and uses them to invoke the original smile function with `this` correctly set to person.


// convert array into an object
Array.prototype.convertIntoObject = function() {
    let newObj = {};
    this.forEach((element) => {
        newObj[element] = element;
    });
    return newObj;
};

// console.log(arr.convertIntoObject());

// creating own prototype

function MyPrototype(name) {
     this.name = name;
};

const myObject = new MyPrototype("Rahul");
// console.log(myObject);

// ----------------------------X-------------------
//? shallow copy polyfill

const Objt = {
    name: "Akshay Saini",
    age: 26,
    Address: {
        city: "Dehradun",
        state: "Uttarakhand",
        country: "India"
    }
};


// const ary = [1,2,3,[4,5]];
// const shallowAry = [...ary];

// shallowAry[3].pop();

// console.log(ary);
// console.log(shallowAry);


function shallowCopyObj(Obj) {
    if(typeof Obj !== 'object' || Obj == null) {
        throw new TypeError("Input should be either in Object or Array");
    }
    const copy = Array.isArray(Obj) ? [] : {};

    // only copy the top-level properties
    for(let key in Obj) {
        if(Obj.hasOwnProperty(key)){
        copy[key] = Obj[key];
        }
    }
    return copy;
};

// const copyShallow = shallowCopyObj(Objt);

// copyShallow.Address.city = "NYC";

// console.log(Objt);
// console.log(copyShallow);


// ----------------------------X-------------------
//? Deep copy polyfill

function DeepCopyObj(Obj) {
    if(typeof Obj !== 'object' || Obj == null) {
        return Obj;
    }
    const copy = Array.isArray(Obj) ? [] : {};

    // only copy the top-level properties
    for(let key in Obj) {
        if(Obj.hasOwnProperty(key)){
        copy[key] = DeepCopyObj(Obj[key]);  // recursive call 
        }
    }
    return copy;
};

const DeepCopy = DeepCopyObj(Objt);

DeepCopy.Address.city = "NYC";

// console.log(Objt);
// console.log(DeepCopy);


// ----------------------------X-------------------
 //? polyfill for Promise.all();

 const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1");
 });

 const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2");
 });

 const pro1 = Promise.all([promise1, promise2]);
 pro1.then(console.log);

Promise.myAll = function(PromiseArr) {
    let counter = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        PromiseArr.forEach((promise, index) => {
            promise
            .then((res) => {
                counter++;
                result[index] = res;
                if(counter === PromiseArr.length) {
                    resolve(result);
                }
            })
            .catch((err) => {
                reject(err);
            })
        })
    })
};

const pro = Promise.myAll([promise1, promise2]);
pro.then(console.log);




