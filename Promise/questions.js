// const promise = new Promise((res) => {
//  return res(2);
// })
// .then((v) => {
//     console.log(v);
//     return v * 2;
// })
// .then((v) => {
//     console.log(v);
//     return v * 2;
// })
// .finally ((v) => {
//     console.log(v);
//     return v * 2;
// })
// .then((v) => {
//     console.log(v);
// });

// Question1: to get the JSON data from the url;

function getData() {
    const data = fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(data);
    data
    .then((response) => {
        if(!(response.ok)) {
            throw new Error("Invalid url!!!");
        }
        return response.json();
    })
    .then((json) => console.log(json))

    .catch((err) =>  console.error(err));
};

// getData();

// Question2: Write a function that returns a Promise that either resolves with "Success!" after 2 seconds or rejects with "Error!" after 5 seconds.

function testPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => reject("Failed"), 5000);

        setTimeout(() => resolve("Success!!!"), 5000);
    });
};

testPromise()
.then((successMessage) => console.log(successMessage))

.catch((errorMessage) => console.log(errorMessage));


testPromise();

// Question3: Write a function that accepts an array of URLs and returns a Promise that resolves to an array containing the data from all the URLs.

function fetchAll(urls) {
    return Promise.all(urls.map((url) => 
        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw new Error("HTTPS error" + res.status);
            } 
            return res.json();
        })
    ));
};

// const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments'];

// fetchAll(urls)
// .then((dataArr) => dataArr.forEach(data => console.log(data)))

// .catch((err) => console.error(err));




