// everyone say everything in javascript is an object.
// but false is not an object ? is's a value of not object

// this is primitive types
// undefined 
// String
// Number
// Boolean ----- Boolean values are not an object
// Object
// null 
// BigInt
// symbol

// this is non primitive types
// object
// Array
// function

    // for example

let a;
console.log(typeof a) // undefined

let b = 20;
console.log(typeof b); // Number

let c = '20';
console.log(typeof c); // string

let d = true;
console.log(typeof d); // boolean

let e = {};
console.log(typeof e); // object

let f = Symbol();
console.log(typeof f) // symbol