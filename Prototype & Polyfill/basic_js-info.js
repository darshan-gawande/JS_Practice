function Animal(name) {
    this.name = name;
};

Animal.prototype.speak = function() {
    return (`${this.name} is saying something!!!`);
};

const dog = new Animal("Booboo");

// console.log(dog.speak());

console.log(dog.__proto__);
console.log(Animal.prototype);

// prototypal chaining

const parrotChild = {
    canDance: true,
    canSings: false,
    canReproduce: () => {
        return true;
    },
    // __proto__ : parrot
};

// console.log(parrot_child.canReproduce());

let user = {
    firstname: "John",
    surname: "Smith",

    get fullName() {
        return `${this.firstname} ${this.surname}`;
    },

    set fullName(value) {
         return ([this.firstname, this.surname] = value.split(" "));
    }
};

let admin = {
    __proto__ : user,
    isBoss : false
};

// console.log(user.fullName); // John Smith

// // setter triggers 
// user.fullName = "Bradley Cooper";

// console.log(admin.fullName);      // Bradley Cooper

// console.log(user.fullName);        // John Smith



// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   Object.keys only returns own keys

//  console.log(Object.keys(rabbit)); // jumps
  
  // for..in loops over both own and inherited keys
//   for(let prop in rabbit) 
//     alert(prop); // jumps, eats

//   let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

// let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

// console.log(Object.getOwnPropertyDescriptors(clone));


