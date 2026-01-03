# Logical Operator

- OR ```||```
- AND ```&&```
- NOT ```!```
- Nullish Coalescing ```??```
----------------
## OR ```||```
In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.


```js
result = a || b;

if(1 || 0){ // works like true or false
   // code
}
```
### OR "||" finds the first truthy value
The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.
The extended algorithm works as follows.
```js
result = value1 || value2 || value3;
```
The OR || operator does the following:
   - Evaluates operands from left to right.
   - For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
   - If all operands have been evaluated (i.e. all were false), returns the last operand.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

```js 
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```

-----------

# && (AND)
In classical programming, AND returns true if both operands are truthy and false otherwise:

```js
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```
An example with if: 
```js
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
```
### AND “&&” finds the first falsy value
```js
result = value1 && value2 && value3;
```
The AND && operator does the following:
   - Evaluates operands from left to right.
   - For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
   - If all operands have been evaluated (i.e. all were truthy), returns the last operand.

Example: 
```js 
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```
We can also pass several values in a row. See how the first falsy one is returned:

```js 
alert( 1 && 2 && null && 3 ); // null
```

# ! (NOT)
The boolean NOT operator is represented with an exclamation sign !.
```js 
result = !value;
```
The operator accepts a single argument and does the following:

1. Converts the operand to boolean type: true/false.
2. Returns the inverse value.

```js 
alert( !true ); // false
alert( !0 ); // true
```
A double NOT !! is sometimes used for converting a value to boolean type:
```js
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

🚨⚠️ The precedence of NOT ```!``` is the highest of all logical operators, so it always executes first, before ```&&``` or ```||```.


