// 0,1,1,2,3,5,8,13,21,...

function findFibonnacciSeries(n) {
  let prev = 0, curr = 1;

  for(let i = 0; i <= n; i++) {
    console.log(prev);  // 0, 1, 1, 2, 3, 5
    let next = prev + curr;
    prev = curr;  
    curr = next; 
  }
}
console.log(findFibonnacciSeries(5));

