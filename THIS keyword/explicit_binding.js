// function introduce(greeting, punctuations) {
//     console.log(`${greeting}, My name is ${this.name}${punctuations}`);
// };

// const person1 = {
//     name: "Rahul"
// };

// const person2 = {
//     name: "Dravid"
// };

// introduce.call(p1, "hey","!");

// introduce.apply(p2, ["Hii", "?"]);

// const newFunction = introduce.bind(p1, "Hello","$");

// newFunction();

const numb = [1,2,3,4,4];
const maxNum = Math.max.apply(null, numb);
console.log(maxNum);
