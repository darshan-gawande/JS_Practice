// count specific character from the string
// "This is a baalu","S"=> 2

function countCharacter(str, char) {
    return str.toLowerCase().split(char).length - 1;
};

// console.log(countCharacter("This is bhaalu",
 "S"));


// sum of two binary number
function sumBinary(b1,b2) {
    let sum = parseInt(b1, 2) + parseInt(b2, 2);
    return (sum.toString(2));
};

// console.log(sumBinary("1010","1011"));  //10101

// palindrome or not
function palindromeOrNot(str) {
    return (str === str.split("").reverse().join(""));
}
// console.log(palindromeOrNot("Aishwarya"));

// remove whitespace between words
function removeWhitespaces(str) {
    return str.replace(/[A-Z]/gi,"");
}
// console.log(removeWhitespaces("This is a baalu"));

// make a string into Title Case
function titleCase(str) {
    return str.toLowerCase().split(" ").map((item) => {
        return (item.charAt(0).toUpperCase()) + item.slice(1);
    }).join(" ");
};

// console.log(titleCase("THis is A baaLu"));

// make a string toggle Case // tHIS iS bAALU
function toggleCase(str) {
    return str.toUpperCase().split(" ").map((item) => {
        return (item.charAt(0).toLowerCase() + item.slice(1));
    }).join(" ");
}

// console.log(toggleCase("hi THis Is aa BaaLu")); 

// find consonant and vowels in the string
function countVowelConsonants(str) {
    let vowel = str.match(/[aeiou]/gi);
    let vowelCount = vowel.length;

    let consonant = str.match(/[a-zA-Z]/gi);
    let countConsonant = consonant.length - vowelCount;

    return {vowelCount, countConsonant};
}

// console.log(countVowelConsonants("Aishwarya"));

// reverse every word in the string
function reverseWord(str) {
    return str.split(" ").map((element) => {
        return element.split("").reverse().join("");
    }).join(" ");
};

// console.log(reverseWord("Hello this is Baalu"));

function reverseString(str) {
    return str.split("").reverse().join("");
}

//  console.log(reverseString("Hello this is Baalu"));

function removeCharacter(str,char) {
    return str.split(char).join("");
};

// console.log(removeCharacter("lorum ipsum umbrella","u"));

function sortCharacter(str) {
    return str.split("").sort().join("");
};

console.log(sortCharacter("baalu"));



