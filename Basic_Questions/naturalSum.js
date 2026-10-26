// n = 5;
// 1 + 2 + 3 + 4 + 5 = 15

function naturalSum(n) {
    let sum = 0;
        while (n != 0) {
             sum += n;
             n--;
    }
    // console.log(sum);
    return sum;

}

console.log(naturalSum(4)); 
