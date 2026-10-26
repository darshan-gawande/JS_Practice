function sum(...totalSum) {
    let total = 0;

    for(let i of totalSum) {
        total += i;
    }
    return total
}

console.log(sum(1,2));

