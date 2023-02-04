> # Prototype

In javascript, every function and object has a property named prototype by default.

**For Example**

```javacript
function person(){
  this.name ="yaseen",
  this.age = 23
}
//Creating objects
const person1 = new Person();
const person2 = new Person();
```

## Protypal class

The Prototypal inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.

**Example**

```javascript
function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepjs = new Workshop("kyle");
var reactjs = new Workshop("suzy");

deepjs.ask("Is 'prototype' a class?");

reactjs.ask("isn't 'protoype' ugly?");
```

## Prototype Chain

Every object in javascript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype . making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

**Example**

```javascript
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

## Dunder Prototypes

dunder proto === **proto** Every object in js has the property. It points back to the prototype object of the constructor function that created that object.

The **proto** property of Object. prototype is an accessor property(a getter function and a setter function)that express the internal[[prototype]](either an object or null) of the object through which it is accessed.


__Example__

```javascript
function workshop(teacher) {
    this.teacher = teacher;
}
workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
};

var deepjs = new workshop("kyle");
deepjs.constructor === workshop;
deepjs.__proto__ === workshop.prototype;
Object.getPrototypeOf(deepjs) === workshop.prototype; 

deepjs.ask("what's up")
```


## Shadowing Prototype

When creating a property on an object that has the same property name on its prototype chain it will shadow the proeprty on its prototype. This means that the property defined on the object will always be found first instead of looking through the prototype for the  property

__Example__

```javascript
function workshop(teacher){
    this.teacher=teacher;
}
workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};
var deepJs = new workshop("simp");

deepJs.ask = function(question){
    this.__proto__.ask.call(this,question.toUpperCase());
};
deepJs.ask("Is this fake polymorphism?");
```

## For More Information Click Below :-
[Prototypes](../Js/Prototypes/)