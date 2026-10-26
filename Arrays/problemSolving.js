// second highest number from array

function secondHighest(arr) {

    // first approach
    function secondHighest1(arr) {
        const sortedArray = arr.sort();
        return sortedArray[sortedArray.length - 2];
    };


    // second approach
    let first = 0, second = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i];
        } else if(arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }
    return second;
}
// console.log(secondHighest([4,5,1,2,6]));


// frequency of each character
 function frequencyCharacter(str) {
    const frequency = {};

    for(let i = 0; i < str.length; i++) {
        if(frequency[str.toLowerCase().charAt(i)]) {
            frequency[str.charAt(i)]++;
        } else {
            frequency[str.toLowerCase().charAt(i)] = 1;
        }
    }
    return frequency;
 }

//  console.log(frequencyCharacter("Shusbham"));