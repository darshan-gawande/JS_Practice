// function expression vs function statement 
m();
ab();

function ab() {
    console.log("Hello");
}

var m = function () {
    console.log("Gracious");
}

// First Order function 
var a = function () {
    return function () {
        return function () {
           return "Gracious";
        }
    }
}
console.log(a()()); //  higher order functions

