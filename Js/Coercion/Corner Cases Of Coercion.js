Number("");  // 0
Number('\t\n'); // 0
Number(null);  // 0
Number(undefined); // NaN
Number([])  // 0
Number([1,2,3])  // NaN
Number([null]) // 0
Number([undefined])  // 0
Number({})  // NaN

// String Corner Coses
String(-0)  // '0'
String(null) // 'null'
String(undefined)  // 'undefined'
String([null]) // ''
String([undefined]) // ''

// On an Object
Boolean(new Boolean(false)) // true, we can dont give primitive value on a boolean object we just ask is it on falsy list or not;