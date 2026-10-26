const x = 1;

// a();
// b();
// console.log(x);

function a() {
    const x = 10;
    console.log(x);
};

function b(){
    const x = 100;
    console.log(x);
};

function abc() {
    console.log("This is my function");
    return 1;
}
// console.log(abc());    // it will return undefined if we are not returning anything 

// IIFE: Immediately Invoke Function Expressions: Its works with all the types functions

console.log(( () => {
    return 1;
})());


var ab = 10;
if(true) {
    let bc = 11;
    var ca = 12;
};

console.log(ca);

