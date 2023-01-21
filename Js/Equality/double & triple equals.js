const num = 11;
console.log(num == 11); // true, (==) it's called looseEquality, checks only values is it same or not. 
console.log(num == '11') // true.
console.log(num === '11') // false, (===) it's called strictEquality, checks values along data types.

// (==) only compares primitives. if the value is non primitive it's gonna turn into a primitive.