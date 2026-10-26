var foo;
foo = "fool";

function scope() {
    var bug = "Bug";
    foo = "Bloody fool";

    function yay() {  
        bug = "bugged";
        foo = "bloody bloody fool";
        console.log(bug);  // bugged
        console.log(foo);
    }
    yay();
    console.log(bug); // Bug
    console.log(foo);  // bloody ...
};
scope();

// console.log(bug);  // not defined
foo = "foo";
// console.log(foo);  // foo


var isMan = true;

function manKind() {
    var isMan = false;
    console.log(isMan);  // false
    womanKind(isMan);
};

function womanKind(isMan) {
    isMan = true;
    bam = "yay";
    console.log(isMan);  // true;
};

// manKind();
// console.log(isMan);  // true


// var van = "hello";

function van() {
    console.log("hello");
};

console.log(typeof van);
