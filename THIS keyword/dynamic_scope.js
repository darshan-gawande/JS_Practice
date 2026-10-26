
// console.log(window.x === x);
// console.log(x === this.x);
// console.log(window.x === this.x);

function foo() {
    console.log(this.a);
};

var x = {a : 1};
var y = {a : 2};

x.foo = foo;
y.foo = foo;

// x.foo();
// y.foo();

const a = {
    "text": "project",
    "foo": ()=> {
        console.log("fool");
    }
};

a["foo"]();


