function outer() {
    let myOuter = 100;
    function inner() {
        console.log(myOuter);
    }
    myOuter = 200;
    return inner;
}
let myInner = outer();
myInner();
