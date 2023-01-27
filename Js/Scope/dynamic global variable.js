 // It's worst method.

 // Dynamic Scope doesn't exist practically but theorically it exists.

 // I made this instance just for understanding.
 var example = 'Suzy'
 function fn() {
    example = 'Yong'; 
    Age = 21;  // There is no variable of Age name but Global is made this variable for us.
    console.log(Age)
    console.log(example)
 }
 fn()