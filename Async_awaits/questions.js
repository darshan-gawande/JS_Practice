const p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Successfully resolved 1..!");
    },5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Successfully resolved 2..!")
    },1000);
});

async function handlePromises() {
    console.log("Darshan");

    const a1 = await p1;
    console.log(a1);

    const a2 = await p2;
    console.log(a2);
};

 // handlePromises();

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchValue() {
    try {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    jsonValue.map((item) => {
        console.log(item.id);
    });

} catch(err) {
    console.error(err);
}
};

 // fetchValue();



