# Conditional branching : if , '?'


```js 
if(condition) {
   // code executed
}
```
Falsy Value:
```0 - "" - null - undefined - NaN``` = false
```js
if(0){ // false  if is 1 then become true

}

let cond = (year == 2026) // equality evaluates to true or false
if(cond) {
   // execute code
}
```

## The "else" clause
```js
if (cond1) {
   // code
}else if(cond2) {
   //code
}else if(cond3) {
   //code
}else {
   //code
}
```
---------------

# Conditional operator "?" 
The ```condition``` is evaluated: if it’s truthy then ```value1``` is returned, otherwise – ```value2```.
```js
let result = condition ? value1 : value2;
```
Example:
```js
let accessAllowed = (age > 18) ? true : false;
or 
let accessAllowed = age > 18 ? true : false;
```
But parentheses make the code more readable, so we recommend using them.

---------------------------

# Multiple '?'

```js
let message = (age < 3) ? 'Hi, baby' : 
              (age < 18) ? 'Hello!' :
              (age < 100) ? 'greeting' :
              'what an unusual age!';
```

