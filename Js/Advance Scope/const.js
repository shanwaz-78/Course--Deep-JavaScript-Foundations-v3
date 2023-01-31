// When we think of const and we think of the word constant that the means a thing that does not change.
// but thats not mean by programmer about const is a variable that cannot be reassigned.

    // For EXample.
var str = 'Inital str';
str = 'overwrite str'; // Ok
console.log(str)

const str2 = str;
str2 = 'Overwrite with const';
console.log(str2) // TypeError.

const arr = ['Kyle','Suzy'];
arr[1] = 'Simon';
console.log(arr)  // Allowed

// Kyle Simpson says:- That you should use var default and use of let whenever possible and use const with strings,number,booleans.