// '' Empty stirng become 0 first;
// === Operator and toString tell lies to us in NaN and in -0
// The data type of Null is object.

const num = 1;
const strNum = String(num); // '1'
const boolenNum = Boolean(num) // true, it gives us the boolen value according to the 1 or 0; if num is 0 it will returns, false;
const numberNum = Number(strNum) // 1
const boolenNum2 = Number(boolenNum) // 1
const toNull = Number(null); // 0, because they become empty string first & the value of empty string is 0;
const toUndefined = Number(undefined); //0
const nestedArr = Number([[[[]]]]); // 0, it become empty string first;
const nullToBoolean = Boolean(null) // false, we saw it before the value of null is 0 and the boolean considered 0 in false;
const undefinedToBoolean = Boolean(undefined) //false, same thing which has we saw over null;