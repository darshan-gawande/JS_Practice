// Rest operator:

function Multiply(multiplier, ...args) {
    return args.map((element) => {
        return  multiplier * element;
    });
};

// console.log(Multiply(2,1,2,3));

// also used for destructing methods
let arr = [1,2,3,4,5];
let [first, ...arg] = arr;

console.log(first);
console.log(arg);


