// left shift 

function leftShift(arr, n) {
    if(n < 0) {
        n = arr.length - n;
    };
    while(n > 0) {
        let element = arr.shift();
        arr.push(element);
        n--;
    }
    return arr;
};

// console.log(leftShift([1,2,3,4,5], -4));

// Right Shift
function rightShift(arr, n) {
    while(n > 0) {
        // let element = arr.splice(arr.length - 1,1);
        let element = arr.pop();
        arr.unshift(element);
        n--;
    };
    return arr;
};

// console.log(rightShift([1,2,3,4,5],3)); // [3,4,5,1,2]

// move zero to the right side of the array
function moveZero(arr) {
    // let array = arr.filter((element) => element !== 0).concat(arr.filter(element => element === 0));
    let arr1 = arr.filter(element => element === 0).concat(arr.filter(element => element !== 0));
    return arr1;
    
};

// console.log(moveZero([1,0,2,0,3,0]));

// remove duplicate element
function uniqueElement(arr) {
   const arr1 =  arr.reduce((acc, curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc.sort(); 
    },[]);
    return arr1;
};

// console.log(uniqueElement([1,0,1,2,0,2,3,3,0])); // [0,1,2,3]


// most repeated element in the array
function mostRepeatedArray(arr)  {
    let freq = {};

    for(let num of arr) {
        if(freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    let maxRepeatNum = null;
    let maxCount = 0;

    for(let num in freq) {
        if(freq[num] > maxCount) {
            maxCount = freq[num];
            maxRepeatNum = num;
        } 
    }
    return maxRepeatNum;
}
 
// console.log(mostRepeatedArray([1,0,1,2,3]));  

function insertElement(arr,position, element) {
    if(position > arr.length) {
        return Error("Invalid Length");
    }

    let arr1 = [...arr];
    arr1.splice(position - 1, 0, element);
    return arr1;
};

// console.log(insertElement([10,20,40,50],3,30));

function removeElement(arr, position) {
    if(position > arr.length) {
        return Error("Invalid Length!!!");
    };

    let arr1 = [...arr];
    arr1.splice(position, 1);
    return arr1;
}

 // console.log(removeElement([10,20,30,40,50],10,30)); 

function removeElementWithoutIndex(arr, element) {
    let arr1 = arr.filter((item) => {
       return item !== element;
    });
    return arr1;
};


 // console.log(removeElementWithoutIndex([10, 20, 30, 20,20,30,40,50], 20));


function findPrimeEvenOdd(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countPrime = 0;

    function isPrime(item) {
            if(item < 2) return false;
            for(let i = 2; i <= Math.round(item / 2); i++) {
                if(item % i === 0) return false;
            }
            return true;
        };

    for (const x of arr) {
        if(isPrime(x)) {
            countPrime++;
        }
        if(x % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
    return {countEven, countOdd, countPrime};
}

// console.log(findPrimeEvenOdd([10, 7, 34, 49, 52]));

// convert Array into Object

function convertArrayIntoObject(arr) {
    let arr1 = arr.reduce((acc, curr) => {
        if(!(acc[curr])) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    },{});
    return arr1;
};

// console.log(convertArrayIntoObject([10, 20, 10, 30, 20, 10, 30]));

// generate random number
function generateRandomNumber() {
    let arr = [];

    while(arr.length < 5) {
        let random_Number = Math.floor(Math.random() * 100);
        if(arr.indexOf(random_Number) === -1) {
            arr.push(random_Number);
        }
    }
    return arr;
};

// console.log(generateRandomNumber());

//  add index
function addIndexArray(arr) {
    let arr1 = arr.map((element, index) => {
        return element + index;
    });
    return arr1;
};

// console.log(addIndexArray([10, 20, 30, 40, 50]));


