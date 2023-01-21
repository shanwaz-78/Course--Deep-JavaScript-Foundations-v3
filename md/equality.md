> # Equality.
The Equality operator (==) checks whether its two Operands are equal,returning a Boolean result. Unlike the Strict equality operator, it attemnpts to convert and compare operands that are of different types.

Equality Provides 3 types of comparison they are :-

1. (==) Loose Equality.
2. (===) Strict Equality.
3. Object.is()

## Loose Equality (==)
Double equals (==) will perform a type of conversion when comparing two things and will handle NAN, -0, and +0 specially to conform to IEE 754(so NaN!=NaN, and -0 == +0 );.

## Strict Equality. (===)
Triple equals (===) will do the same comparsion as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.

## Object.is()
Object.is() does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).

* For Example.
```Javascript
console.log(11 == '11');
// true. it's check only the values not types.
console.log(11 === '11');
// false. it's also check data types along values.

```
(==) Allows Coerciion when the data type are different.

(==) Comapres Only Primitives. Whenever we use it with non primitive it's turn into a primitive.

(===) disallows Coercion if the data tpes are same.

## For More Information Click Below:-
[Equality](../Js/Equality/)