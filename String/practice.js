// remove duplicate element from the array of the string

const arr = ["ghyan","ram","shyam","vamp","ram","ghyan"];

let deleteDuplicate = arr.reduce((acc, curr) => {
    if(!acc.includes(curr)) {
        acc.push(curr); 
    }
    return acc;
},[]);

// console.log(deleteDuplicate);
// console.log(arr);

let ab = [1,2,3];
 ab = ab.concat([1,2]);
console.log(ab.sort());