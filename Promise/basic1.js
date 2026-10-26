function myPromise()  {
    return new Promise((resolve, reject) => {   
        //executor function (inside the promise)
        console.log("promise 1");
        setTimeout(() => {
            reject("promise resolve unsuccessfully!!!");
            resolve("promise resolve successfully!!!");

        }, 5000);
        console.log("promise 2");
    });
};

myPromise()

.catch((err)=> {
    console.log(err);
})
.then(() => {
    console.log("promise successfully");
})



