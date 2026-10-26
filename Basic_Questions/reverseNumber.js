// n = 123 => 321

// naive approach
function reverseNumber(n) {
    let newNumber = 0;
    while( n != 0) {
        newNumber = newNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return newNumber;
}
// console.log(reverseNumber(123));

// approach 2

function reverseNumber2(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}


// console.log(reverseNumber2(123423));

// approach 3:
function reverseNumber3(n) {
        let numStr = n.toString().split("");
        let str = " ";

        for(let i = numStr.length - 1; i >= 0; i--) {
            str += numStr[i];
        }
        console.log(parseInt(str));
    }

reverseNumber3(123);

