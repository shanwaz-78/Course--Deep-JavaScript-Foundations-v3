> # Objects

## The this keyword

In javascript, the this keyword refers to an object.

which object depends on how this this is being invoked(used or called).

The this keyword refers to different objects depending on how it is used.

```
In an object method, this refers to the object.

Alone, this refers to the global object.

In a function, in strict mode, this is undefined.

In an event, this refers to the element that received the event.

Methods like call(), apply(), and bind(), can refer this to any  object.
```

_for example_;-

```javascript
let person = {
  name: "yaseen",
  age: 20,
  info: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
person.info();
```

---

**kyle simpson Theroy**

A function's this refernces the execution context for that call. determined entirely by how the functions was called

     A context in which that call was being made. and that is determined entirely by how the function is called.

     In other words, that ths key word assignment, if you look at a function that
     has this keyword in it, it is assigned based upon how the function is called.

    So, In other words, that this keyword is javascript version of dynamic scope if it's this way of having as flexible

---

## Implict and Explict Binding

## **Implict Binding:-**

Implict Binding is appiled when you invoke a function in an object using the dot notation. this in such scenariros will point to the object using which the function was invoked.Or simply the object on the left side of the dot.

_for example :-_

```javascript
function myfunction() {
  console.log(this);
}
const obj = {
  somekey: 1,
  myfunction: myfunction,
};
obj.myfunction();
// {somekey: 1, myfunction: f}. i.e obj
```

## **Explicit Binding**

In this method, you can force a function to use a certain object as its this. Explicit Binding can be applied using call(), apply|(), and bind().

**call():** Pass in the required object as the first parameter during the function call. The actual parameters are passed after the object.

**apply:** Similar to call() with a difference in the way the actual arguments are passed. Here, the actual arguments are passed as an array.

```javascript
function myFunction(param1, param2) {
  console.log(this);
}

const obj = {
  someKey: 1,
};

const param1 = 1,
  param2 = 2;
myFunction.call(obj, param1, param2); // {someKey: 1}
myFunction.apply(obj, [param1, param2]); // {someKey: 1}
```

**Blind():** In this method, you create a new function with a fixed this . These types of functions created using bind() are commonly known as bound functions.

```javascript
function myFunction() {
  console.log(this);
}

const obj = {
  someKey: 1,
};

const boundFunction = myFunction.bind(obj);
boundFunction(); // {someKey: 1}
```

## classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.

The constructor function is defined as:

```javascript
constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person1 = new Person();
```

Instead of using the function keyword, you use the class keyword for creating JS classes. For example,

```javascript
// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

The class keyword is used to create a class. The properties are assigned in a constructor function.

Now you can create an object. For example,

```javascript
// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// creating an object
const person1 = new Person("John");
const person2 = new Person("Jack");

console.log(person1.name); // John
console.log(person2.name); // Jack
```

Here, person1 and person2 are objects of Person class.

---

**Note:** The constructor() method inside a class gets called automatically each time an object is created.

classes are of two components they are

1.  Class declarations
1.  Class expressions

### Class declarations

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

**Example**

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Class expressions

A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.

**Exmaple**

```javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```

## For More Information Click Below:-
[objects refernces](../Js/Object/)