const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 Success"), 4000);
    setTimeout(() => reject("P1 failed"), 3000);

});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 2000);
    setTimeout(() => reject("P2 failed"), 1000);

});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 1000);
    // setTimeout(() => reject("P3 failed"), 4000);
});


(Promise.any([p1, p2, p3]))
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});




// Promise.allSettled([p1, p2, p3])   // return a Object 

//  Promise.race([p1, p2, p3])   // return first settled one i.e. fulfilled or rejected

//  Promise.any([p1, p2, p3]) 

// .then((res) => console.log(res))

// .catch((err) => {
//     console.error(err);
// });




