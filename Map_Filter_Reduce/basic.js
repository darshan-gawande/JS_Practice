let arr = [1,2,3,4,5,6];

// .map function 
let output = arr.map( (element) => {
    return element * 2;
});


// console.log(output);

// .filter function
let output1 = arr.filter((x) => {
    return x % 2 === 0;
});

console.log(output1);

// .reduce function
let output2 = arr.reduce((acc,curr) => {
    return acc + curr;
},0);

console.log(output2);