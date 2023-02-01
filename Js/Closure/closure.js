function mulFn() {
    var mul = 9;
     function fn(val) {
      mul *= val;
    };
    return fn
  }

  var mul = mulFn();
  console.log(mul(13)); // function anonymous

  function mulFn() {
    var mul = 9;
     function fn(val) {
      mul *= val;
      return mul;
    };
    mul = 10; // Its worked bcz when we exicute the function then he will be check whats the value of var at that moment and at that moment the value is 10;
    return fn
  }
  
  var mul2 = mulFn();
  console.log(mul2(13)); // function anonymous