# Comparisons

In JavaScript they are written like this:
   - Greater/less than: ```a > b```, ```a < b```.
   - Greater/less than or equals: ```a >= b```, ```a <= b```.
   - Equals: ```a == b```, please note the double equality sign ```==``` means the equality test, while a single one ```a = b``` means an assignment.
   - Not equals: In maths the notation is ```≠```, but in JavaScript it’s written as ```a != b```.

-----

### Boolean is the result
```js
   2 > 1 // true
   2 == 1 // false
   2 != 1 // true
```

### String Comparison

string are compared letter-by-letter 
```js
   'z' > 'a' ;  // true
   'Glow' > 'Glee' // true
```
The algorithm to compare two strings is simple:
1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
--------------------------

### Comparison of  different type
When comparing values of different types, JavaScript converts the values to numbers.
For boolean values, true becomes 1 and false becomes 0.

```js 
'2' > 1     //true String '2' becomes a number 2
'01' == 1   // true, string '01' becomes a number 1
true == 1  // true
false == 0 // true
```
### Strict equality 
```js
0 == false  // true
'' == false // true
```


-------------
### summary
- comparison operators return boolean value
- String are compared letter-by-letter in the dictionary order
- when value of different types are compared the get converted to number (with exclusion of a strict equality check)
- the values ```null``` and ```undefined``` are equal ```==``` to themselves adn each other but do not equal any other value.
- Be careful when using comparisons like ```>``` or ```<``` with variable that can occasionally be ```null/undefined```. Checking for ```null/undefined``` separately is a good idea.





