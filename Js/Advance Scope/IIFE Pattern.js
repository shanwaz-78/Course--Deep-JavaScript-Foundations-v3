// IIFE is an expression. (IMMEDIATE INVOKED FUNCTION EXPRESSIION), When we need Immediately a scope or function expression we can be used IIFE.

(function () { // It's an function expression bcz he starting with the parenthesis not with function keyword.
    console.log('This is initial str');
})

    ()

    // Another instance.

 var teacher = 'Kyle';
 (function anotherTeacher() {
    var teacher = 'suzy';
    console.log(teacher)
 })()

    // with unary operator.

const IIFEfunc = -function (a,b) {
    return a;
}(5);
console.log(IIFEfunc)

const IIFEfunc2 = !function (a,b) {
    return a;
}(5);
console.log(IIFEfunc)

console.log(+true)
console.log(+false)
console.log(-null)
console.log(-[undefined])

    // Also we can use try and catch for error handeling. 

var teacher;
try{
    teacher = fetchTeacher(1)
}
catch(arr){
    teacher = 'jemes'
}
console.log(teacher)

    // IIFE with try and catch

var teacher= (function getTeacher(a){ 
    try {
       return fetchTeacher(1);
    }
    catch(err){
    return `Sams ${a}`
    }
    })(5);

console.log(teacher);