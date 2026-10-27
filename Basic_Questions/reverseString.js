let str = "Furious";

// approach 1: split(), reduce
let str1 = str.split("").reduce((acc, curr) => {
    let re = curr + acc;
    return re;
 },"");

  console.log(str1);

//  approach 2: 
function reverse(st) {
     console.log((st.split("").reverse().join("")));
}

// reverse(str);

// approach 3: using spread operator
function usingSpreadOpe(str) {
    let a = [...str].reverse().join("");
    console.log(a);
}
// usingSpreadOpe("abc");

// using Array.form() method: it convert it into character array
function usingArrayFormMethod(str) {
    return Array.from(str).reverse().join("");
}
console.log(usingArrayFormMethod('abcd')); 

function usingSpreadReduce(str) {
    return [...str].reduce((acc, curr) => {
        return curr + acc;
    }, "");
};

let a = usingSpreadReduce("mnop");
// console.log(a);

// using For Loop
function usingForLoop(str) {
    let n = "";
for (let i = str.length - 1; i >= 0; i--) {
    n += str[i];
}
return n;
}

//  console.log(usingForLoop("abc")); 

// using substring method
function usingSubstringMethod(str) {
    let temp = "";
    let i = str.length - 1;

    while (i >= 0) {
        temp = str.substring(i);
        i--;
    }
    return temp;
}

console.log(usingArrayFormMethod("abcde"));
