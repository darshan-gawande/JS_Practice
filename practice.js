// const arr = 
// {
//     "1": [1,3,4]
// };

// const CopyArray = (arr);
// CopyArray["1"].push(2);

// // console.log(CopyArray);
// // console.log(arr);

// function Introduction(greeting, punctuations) {
//      console.log(`${greeting},My name is ${this.name}${punctuations}`);
// };

// const person = {
//     name: "darshan"
// };

// const p1 = {
//     name: 'darsh'
// }

// const newIntro = Introduction.bind(p1, ["Hii", "!"]);

// newIntro();

// map polyfill

Array.prototype.myMap = function(callback) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result; 
};
const arr = [10,20,30];

const output = arr.myMap((ele) => ele * 2);


console.log(arr, output );



