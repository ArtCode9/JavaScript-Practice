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


