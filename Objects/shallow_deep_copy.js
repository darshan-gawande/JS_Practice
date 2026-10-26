//? shallow and deep copy 

//? shallow copy example
const Obj = {
    name: "Akshay Saini",
    age: 26,
    Address: {
        city: "Dehradun",
        state: "Uttarakhand",
        country: "India"
    }
};

const arr = [1,2,3,[4,5]];

const shallowArr = JSON.parse(JSON.stringify(arr));

shallowArr[3].push(7);

console.log(arr);
console.log(shallowArr);

// const copyObj = {...Obj};

const deepCopyObj = JSON.parse(JSON.stringify(Obj));

deepCopyObj.Address.city = "Essel World";

// console.log(Obj);
// console.log(deepCopyObj);
