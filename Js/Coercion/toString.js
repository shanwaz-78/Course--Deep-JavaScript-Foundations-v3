var x = 10;
var b = x.toString();

console.log(typeof b)

const num = new Number(20)
console.log(num.toString());
console.log(typeof num)

const obj = {} // when we use toString on an object it will be return primitive value with string hint.
console.log(obj.toString());