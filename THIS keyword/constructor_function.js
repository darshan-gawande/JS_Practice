let abc = function(name, age) {
    this.name = name;
    this.age = age;
    return [10];

    // this.greet = function() {
    //     console.log(`Hello my name is ${this.name} and age is ${this.age}`);
    // }
};

// const alice = new person("Alice", 22);
// const mackster = new person("Mac Allister", 23);

let Task = function(action) {
	this.action = action;
};
let task1 = new Task("create");
let task2 = new Task("delete");
console.log(task1 === task2);  // false
