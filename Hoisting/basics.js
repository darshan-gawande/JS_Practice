// var a = 100;
function abc() {
    var x = 300;
    y = 200;
    let z = 2300;
    {
        let z = 100;
        console.log(z);  // 100
    }
    console.log(x);  // 300
      console.log(y);   // 200
      console.log(z);   // 2300
      console.log(a);  // 100
    }
    // abc();
    // console.log(y);  
    // console.log(x);  // x is not defined
    
    ab();
    // console.log(b);
    function ab() {
        let b = 3;
        console.log(b); 
    };
   
    