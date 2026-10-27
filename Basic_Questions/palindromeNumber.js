// approach 1: works for the both number as well as string

function palindrome1(n) {
    let newNum = n.toString().split("");
    let first_Ptr = 0;
    let snd_Ptr = newNum.length - 1;

    while(first_Ptr <= snd_Ptr) {
        if(newNum[first_Ptr] == newNum[snd_Ptr]) {
            first_Ptr++;
            snd_Ptr--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(palindrome1("RAR"));

// Approach 2: 

function checkPalindrome(str) {
    let str1 = str.toLowerCase().replace(/[^a-z0-9]/gi,"");
    let str2 = str1.split("").reverse().join("");
    return str1 === str2;
}

// console.log(checkPalindrome("A man#?, a plan, a canal, Panama"));
