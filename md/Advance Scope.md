># Advance scope

## lexical scope
Lexical scoping to resolve the variable names when a function is created inside another function. It determines the functions parent scope by looking at where the function was created instead of where it was invoked.

```javascript
var a = 10;
var func = function () {
  var b = 20;
  console.log("a  and b is accessible(outer):", a, b);
  var innerFunc = function () {
    var c = 30;
    console.log("a and b and c is accessible(inner)", a, b, c);
  };
  innerFunc();
  return;
};
func();
console.log("only a is a accessible (global):", a);

```
[More About Lexical Scope.](../Js/Scope/lexical%20scope.js)

## IIFE (Immediate Invoked Function Expression )

An IIFE is a javascript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman

```javascript
(function () {
  console.log("hello yaseen ");
})();
```

**IIFE is anonymous**

```javascript
(function (teacher) {
  console.log(teacher);
})("robart");
```

IIFEs are whether anonymous are not but that are functions, which means we can pass in values.

[For More About IIFE Click It.](../Js/Advance%20Scope/IIFE%20Pattern.js)

## Blocking Scoping

Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it. Variables declared with the var keyword, do not have block scope.

_for example:-_

```javascript
`            Scopes Restrict the variables outside`;
{
  let p = 110;
  const q = 100;
}
console.log(p); // refernce Error p is not defined
console.log(q); // refernce Error q is not defined

`scope doesn't restrict  var variable outside the block`;

{
  var a = 100;
  var b = 200;
}
console.log(a); // a =100
console.log(b); // b =100
```

So, here let and const are blocked scope because . they got reference error when we use outside of the block.
if you see var it is not a blocked scope because,it is working outside of the block.

## Choosing let or var

var and let are both used for variable declartion in javascript but the difference between them is that var is function scoped and let is blocked scoped. Variable declared but let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.

```javascript
console.log(x); //undefined
var x = 5;
console.log(x); // 5
```

```javascript
console.log(y);
let y = 5;
console.log(y);
// ReferenceError: Cannot access 'y' before initialization
```

\*\* javascript let Vs var

| let                                        | var                                |
| ------------------------------------------ | ---------------------------------- |
| let is block-scoped.                       | var is function scoped.            |
| let does not allow to redeclare variables. | var allows to redeclare variables. |
| Hoisting does not occur in let.            | Hoisting occurs in var.            |

## Const Keyword

The const keyword, which is used to define a new variable in JavaScript. Generally, the var keyword is used to declare a JavaScript variable. Const is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.

**According to kyle simpson**
kyle simpson says you should not even use let and you should only use const wherever possible.
so the problem with the const is essentially the const keyword doesn't carry its own weight within the language.

Every time the const keyword has ever been added to any programming language, programmers got confused.
the reason they get confused, is because when we think of const, and we think of the word Constant, doesn't change.but that's not what a programmer means by const.
A programming language designer means a variable that can't be reassigned.

```javascript
var teacher = "suzy";
teacher = "kyle";

const myTeacher = teacher;
myTeacher = "suzm"; // getting typeerror for assign

const teachers = ["kyle", "suzi"];
teachers[1] = "braine"; // but here assigning its working

console.log(teacher);
console.log(teachers);
console.log(myTeacher);
```

This is baggage of const . we should follow of mutual values and mutual assignments.

## Hoisting

Javascript Hoisting refers to the process whereby the interpreter appears to move the decalaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

```javascript
// hoisting in javascript is a behavior in which a function or a variable can be used before declaration For example

var a;
a = 5;
console.log(a);

// By using Intilazation first

a = 8;
var a;
console.log(a);
```

**Note :-**

However in Javascript, intializations are not hoisted. For example,

```javascript
console.log(a);
var a = 5; //undefined
```

[For More Informatiion About Advance Scope](../Js/Advance%20Scope/)
