// Object literals

const obj11 = {
    age:24,
}
const myObject = {
    city : "Madrid",
    greet: function() {
        return (`Ciao, ${this.city}`);
    },
    __proto__: obj11,
};

myObject.greet();


// What is the prototype for myObject?
const a = Object.getPrototypeOf(myObject); 
// console.log(a);

// Shadowing methods

let myObject2 = Object.create(myObject);

//  console.log(myObject2);

myObject2.name = "Milan";

// console.log(myObject2);

// console.log(myObject2.name);

delete myObject2.name;

// console.log(myObject.name);


const personPrototype = {
    greet: () => {
        console.log("Hello");
    }
};

const childPrototype = Object.create(personPrototype);

// // (childPrototype.greet());
// console.log(childPrototype.__proto__);


const obj =  {
    name: "Darshan",
    getName() {
        return (this.name);
    },
    getRoll() {
        return this.roll;
    }
};

const obj1 = {
    roll: 1,
    name: "Vivek",
    __proto__: obj
}
// console.log(obj1.getRoll());


const obj2 = {
    subject: "Computer",
    __proto__:obj1,
}
// console.log(obj2.getName());
// console.log(obj2.getRoll());


// This is all prototype inheritance

function MyPrototype(name,roll) {
     this.name = name;
     this.roll = roll;
};

MyPrototype.prototype = obj;

// console.log(MyPrototype.prototype);

const myObject1 = new MyPrototype("Darshan",1);

// console.log(myObject1.getRoll());



// ---------------Shadowing-------------------

const abc = {
    age: 23,
};

const ab = Object.create(abc);

delete ab.age;

console.log(ab.age);