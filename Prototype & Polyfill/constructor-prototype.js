// function Car(name, model, speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = speed;
//     this.description = function() {
//         console.log(`The new car name is ${this.name} and model is ${this.model} and how about speed: ${this.speed}`)
//      };
// };

// const car1 = new Car("Honda","Ferrari");
// const car2 = new Car("Honda", "Mercedez", 'fast');

// console.log(car2.description === car1.description);


// ---------------- prototype vs __proto__ ------------------

// constructor function 
function Person(name) {
    this.name = name;
};

// shared properties and methods
Person.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

// Instance
const person = new Person("John");

console.log(person.__proto__ === Person.prototype);



