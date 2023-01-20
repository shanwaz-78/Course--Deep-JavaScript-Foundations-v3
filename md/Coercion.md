> # Coercion.
Coercion is conversion of one data type to another data type.

Coercion is divided into 2 types :-

1. ## Implict Coercion:-
Implict Coerciion is conversion one data type to another data type automatically.
    
For Example:-
```javascript
const num = '20';

console.log(50 + num); // 5020

console.log(50 - num)  // 30

```
In first line Number is converted into string;

In Second line String is converted into number;

* For Another Instance.
```javascript
var a = '20';
a = a + 1; 
console.log(a) // 201
a++ // increment using postFix Position. It will converted data type string to number.
console.log(a) // 202 

```
2. ## Explict Coercion
Explict Coercion is convertion one data type to another data type manually and it's provided by Inbuilt Methods.

___For Example___:- We Converting String to number by using Inbuilt Function __Number()__.

```javascript
const num2 = '20';

const val = Number(num2);

console.log(val);

```

## For More Information Click Below:-
[Coercion](../Js/Coercion/)

## For Philosophy of Coercion Click Below :-
[Philosophy](../Js/Philosophy%20of%20Coercion/)