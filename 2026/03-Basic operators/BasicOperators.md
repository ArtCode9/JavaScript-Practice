# Basic Operators , Maths


## Terms: "unary" , "binary", "operand"
   - An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
   
   - An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
 
   - An operator is binary if it has two operands. The same minus exists in binary form as well:

-------------------
## Math: 
- Addition :  +
- Subtraction : -
- Multiplication : *
- Division : /
- Remainder: %
- Exponentiation : **

-----------------

## Remainder % : 

The remainder operator %, despite its appearance, is not related to percents.

The result of ```a % b``` is the remainder of the integer division of ```a ```by ```b```.

```js
   5 % 2  // 1, the remainder of 5 divided by 2
   8 % 3  // 2, the remainder of 8 divided by 3
   8 % 4  // 0, the remainder of 8 divided by 4
```
---------------

## Exponentiation ** :

The exponentiation operator ```a ** b``` raises ```a``` to the power of ```b```.

In school maths, we write that as a power b.
```js
2 * 2  // 4
2 ** 3 // 8
2 ** 4 // 16
------- // square root
4 ** (1/2)  // 2
8 ** (1/3)  // 2
```
-----------------------

## String concatenation with binary +
 if the binary + is applied to strings, it merges (concatenates) them:
```js 
let  s = "my" + "string"
```
Note that if any of the operands is a string, then the other one is converted to a string too.
```js 
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
```


## Numeric conversion, unary +
The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

```js
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```
It actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings:
```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```
If we want to treat them as numbers, we need to convert and then sum them:

```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```
From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

-----------------------

# Operator precedence

| Precedence | Name | Sign  | 
|---|----|---|
|...|...|...|
|14| unary plus| + |
|14| unary negation | - |
|13| exponentiation| **|
|12| multiplication | *|
|12| division| /|
|11| addition | + |
|11| subtraction | - |
|...|... |...|
|2|assignment| = |
|...|...|...|

---------

## Assignment 
= is also an operator. 
That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

-----------------------

## Assignment = returns a value
The fact of = being an operator, not a “magical” language construct has an interesting implication.

All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.

Here’s a demo that uses an assignment as part of a more complex expression:
```js
let a = 1; 
let b = 2;
let c = 3 - (a = b + 1);

// now a = 3 
// now c = 0
```

## Chaining assignments
```js 
let a , b, c;
 a = b = c = 2 + 2;

// all a b c equal 4
```
--------
## Modify-in-place

We often need to apply an operator to a variable and store the new result in that same variable.
for example:
```js
let n = 2;
n = n + 5;
n = n * 2;
```
This notation can be shortened using the operators += and *=:

```js
let n = 2;
n += 5;  // now n = 7 (same as n = n + 5)
n *= 2;  // now n = 14 (same as  n = n * 2)
```
Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

```js 
let n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8
alert( n ); // 16
```

##  Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.

- ***increment*** ```++``` : increases a variable by 1.
- ***Decrement***```--```: decreases a variable by 1.
------------------
The operators ++ and -- can be placed either before or after a variable.
- When the operator goes after the variable, it is in “postfix form”: ```counter++```.
- The “prefix form” is when the operator goes before the variable: ```++counter```.
-------------------------
Both of these statements do the same thing: increase counter by 1.


Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

```js 
let counter = 1; 
let a = ++counter; //(*)

console.log(a); // 2
```
In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

Now, let’s use the postfix form:
```js 
let counter = 1;
let a = counter++; // (*)
```
In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

```js 
let counter = 1;
( 2 * ++counter );  // 4
( 2 * counter++ );  // 2 because this  return old value
```
------------------
# Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:
   - AND ```&```
   - OR ```|```
   - XOR ```^```
   - NOT ```~```
   - LEFT SHIFT ```<<```
   - RIGHT SHIFT ```>>```
   - ZERO-FILL RIGHT SHIFT ```>>>```
--------------------
# Comma 
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
```js 
let  a = ( 1 + 2 , 3 + 4 );  // 7
```
Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.



