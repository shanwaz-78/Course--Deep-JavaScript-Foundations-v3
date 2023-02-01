var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";
myTeacher(); // When we exicute a function it checks what's the var value at the moment and the value is suzy so he returned suzy.

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i is " + i);
  }, i * 1000);
}
