> # Scopes Expression

## Function Expression

Function Expression allows us to create an anonymous function which doesn't have any function name which is the main difference between fucntion expression and function Declaration. A function expression can be used as an IIFE(immediately invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName.

* Syntax for function Decalartion:-

```javascript
function declaration() {
  console.log("hello declartion");
}
```

* Syntax for function Expression(anonymous):-

```javascript
let variableName = function (x, y) {
  console.log("No name");
};
```

* Syntax for function Expression (named):-

```javascript
let variablename = function functionName(x, y) {
  console.log("Named function");
};
```

## Naming Function Expression

If a function is specified as a function Expression. It can be given a name.

* There are three reason to make a solid case they are :-

1. Reliable function self-reference (recursion.etc)
1. more Degubble stack traces
1. More self-documenting code

## Arrow function

Arrow function is a Function with Arrow mark `(=>)` and works as usual like regular function.

Arrow function is one of the features introduced in the Es6 version of javascript. It allows you to create functions in a cleaner way compared to regular functions.

Arrow functiion is just like Regular function but in arrow function it is callable but not constructable like (New keyword) and (this keyword)

* For Example:-

```javascript
var arrowfunction = (a, b) => a * b;
```

## For More Information Click Below:-

[Scopes & Function Expressions](../Js/Scope%20and%20Function%20Expression/)