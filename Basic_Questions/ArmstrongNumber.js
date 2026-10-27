// 123 = 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36(not a armstrong number)

// Javascript

function findArmstrong(n) {
    let temp = n;
    let sum = 0;
    while( temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = parseInt(temp / 10);// parseInt converts the integer into absolute number
    }
    return sum === n;
}

console.log(findArmstrong(153));


// // Typescript

// function armstrongNum1(n: number): boolean {
//     let temp: number = n;
//     let sum: number = 0;

//     while (temp > 0) {
//         let digit: number = temp % 10;
//         sum = sum + digit ** 3;
//         temp = Math.floor(temp / 10);   
//     }
//     return (sum === n);
// };

// console.log(armstrongNum1(153));
