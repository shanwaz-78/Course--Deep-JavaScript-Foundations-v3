// let's dig more deeply into (==) if the types are not equal.
console.log(null == undefined) // true, it's checking only values.

const num = 2;
if (2 == true) {
    console.log('2 is equal to true')
}else{
    console.log('2 is lower than true')
}

const workshop1 = {topic : null};
const workshop2 = {};

if (workshop1.topic === null || workshop1.topic === undefined) {
    console.log('its true');
}else{
    console.log('its false')
}

if (workshop2.topic === null || workshop2.topic === undefined) {
    console.log(true)
}
else {
    console.log(false)
}

// coercion comparison.
if (workshop1.topic == null && workshop2.topic == null) {
    console.log("yes");
}
else {
    console.log("NO");
}

// 1 and -1 is different values according to maths whereas 0 and -0 belongs to same value.