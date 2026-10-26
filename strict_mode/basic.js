// strict mode in function
function strictModeFunction() {
    "strict mode";
    function tested() {
        return "here I am";
    }
    return `I am strict mode function ${tested()}`;
}
console.log(strictModeFunction()); 


  