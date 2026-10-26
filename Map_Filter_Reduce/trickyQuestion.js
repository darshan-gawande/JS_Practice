let details = [
    {FirstName : "Kunal", LastName: "Kanse", age: 24},
    {FirstName : "Siddhireddy", LastName: "Jagganathreddy", age: 23},
    {FirstName: "Chidananda", LastName: "D A" , age: 24},
    {FirstName: "Shakir", LastName: "Ahmad" , age: 25},
];

// Question 1: Print the the full name in the array

let details1 = details.map((x) => {
    return x.FirstName +" "+ x.LastName;
});

// console.log(details1);

// Question 2: count the number of the people having same age

let details2 = details.reduce((acc, curr) => {
    if(acc[curr.age]) {
        ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{});

// console.log(details2);

//  FUNCTIONAL CHAINING 

// write function whose age < 24 and return name using map,filter,reduce

// .filter method
let details3 = details.filter((x) => {
    if(x.age < 24) {
        console.log(x.FirstName);
    }
});

// .reduce methods
let detail = details.reduce((acc, curr) => {
    if(curr.age >= 24) {
        console.log(curr.FirstName);
        console.log(acc);
        //  why we are getting undefined value because we are not returning accumulator value 
    }
},[]);

console.log(detail);



