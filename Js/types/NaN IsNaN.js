// NaN => Everyone say that NaN means (not a number) but it's totally wrong. NaN indicates an invalid number.
    // For Example.

let myAge = Number("0o46"); // 38
const myNextAge = Number("39"); // 39
let myCatsAge = Number("n/a"); // NaN

myCatsAge === myCatsAge; // false (===) It tells you that two things are not equal.

console.log(myAge);
console.log(myNextAge);
console.log(myCatsAge);