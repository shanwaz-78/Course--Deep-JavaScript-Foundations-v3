// NaN => Everyone say that NaN means (not a number) but it's totally wrong. NaN indicates an invalid number.
    // For Example.

let myAge = Number("0o46"); // 38
const myNextAge = Number("39"); // 39
let myCatsAge = Number("n/a"); // NaN
myAge - 'My Son Age'; // NaN
// NaN's are not equal to each other

myCatsAge === myCatsAge; // false (===) It tells you that two things are not equal.

console.log(isNaN(myAge)) // false
console.log(isNaN(myCatsAge)) // true
console.log(isNaN(myAge)) // false