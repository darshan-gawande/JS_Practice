// prime number = 2,3,5,7,11 ...

function checkPrimeNumber(n) {
    for(let i = 2; i <= n/2; i++) {
        if(n % i === 0) {
           return `Not prime number!`;
        }
    }
    return `Prime Number`;
}

checkPrimeNumber(50);

// Approach: 2(Filter() method)



function findPrimeNumber(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// console.log(findPrimeNumber(6));