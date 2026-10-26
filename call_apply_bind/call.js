// call method
// function greet() {
//     console.log(`This ${this.name} usually sleeps between ${this.duration}`);
// };

// const Obj = {
//     name: "Tiger",
//     duration: "7 - 8"
// };

// greet.call(obj);

// bind method

const obj = {
    x : 10,
    getFunction: function () {
        return this.x;
    }
};

const xx = obj.getFunction;
console.log(xx());

const x_xx = xx.bind(obj);
console.log(x_xx);     

z = 10;

const object = {
    z : 100,
   
};
let getMethod = function () {
    return this.z;
}

const a = getMethod();
 console.log(a);



