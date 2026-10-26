function calculateOccurance(str) {
    return str.split("").reduce((acc, curr) => {
        if(acc[curr]) {
            ++acc[curr];
        } else {
            acc[curr] = 1;
        }
        return acc;
    },{});
}

console.log(calculateOccurance("hello"));
