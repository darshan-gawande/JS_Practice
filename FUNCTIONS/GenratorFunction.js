function  *generatorFunction() {
    console.log("start");
    yield 1;
    console.log("step 1");
    yield 2;
    console.log("step 2");
    yield 3;
    console.log("end");
};

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
