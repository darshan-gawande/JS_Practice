function *generatorFunction() {
    console.log("Hello");
    yield 1;
    
    console.log("step 1");
    yield 2;

    console.log("step 2");
    yield 3;

    console.log("End");
    yield 4;
};

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
