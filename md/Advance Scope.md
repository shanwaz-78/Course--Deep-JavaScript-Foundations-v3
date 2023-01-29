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

[For More Informatiion About Advance Scope](../Js/Advance%20Scope/)