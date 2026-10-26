function debounce(func, delay) {
    let timeoutId; // stores the time ID

    return function(...args) {
        clearTimeout(timeoutId);  // clear the existing timer

        // set the new timer
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// usage
function Search(query) {
    // console.log("Searching for:", query);
};

const debouncedSearch = debounce(Search, 500);

debouncedSearch("j");      // Timer starts (500ms)
debouncedSearch("ja");     // Previous timer cancelled, new timer starts
debouncedSearch("jav");    // Previous timer cancelled, new timer starts
debouncedSearch("java");   // Previous timer cancelled, new timer starts

let s = "leetcode";


for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
        console.log(i);
    }
    return -1;
    
}