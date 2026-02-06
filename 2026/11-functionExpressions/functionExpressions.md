# Function Expressions
In Js a function is a special kind of value.

The syntax that we use before is called a function Declaration.
```js
function sayHi(){
   alert("Hello");
}
```
There is another syntax for creating a function that is called function expression.

it allow us to create new function in middle of any expression.

For example:
```js
let sayHi = function () {
   alert("Hello");
}
```
Here we can see a variable ```sayHi``` getting a value, the new function created as ```function(){...}```.

As the function creation happens in the context of the assignment expression(to the right side of =), this is a Function Expression.

there is no name after a function keyword.

so we create a function and put it into the variable in other word.

in more advanced situations that we'll come cross later, a function may be created and immediately called or schedule for a later execution , not stored anywhere thus remaining anonymous.

``` Function is a value no matter how it is created```

for execute the function you should set the parentheses after the function name until will execute.

we can copy a function to another variable:
```js
function sayHi() { // (1) create
   alert("Hello")
}

let func = sayHi;  // (2) copy

func(); // Hello  // (3) run the copy (it works)!
sayHi(); // Hello // this still works too (why wouldn't it)
```
there are no () after sayHi in 2 . 
if there were then func = sayHi() would write the result of the call sayHi() into func not the function sayHi itself.

We could also have used a Function Expression to declare sayHi in the first line.
```js
let sayHi = function() {  // (1) create
   alert("Hello");
};

let func = sayHi; // (2) copy
//...
```
everyThing would work the same.

You might wonder why do function Expression have semicolon ; at the end but function Declaration do not:
```js
function sayHi() {
   //...
}

let sayHi = function() {
   //...
};
```

The answer is simple: a function expression is created here as ```function (...) {...}``` inside the assignment statement ```let sayHi = ...;```. The semicolon ; is recommended at the end of the statement it is not a part of the function syntax.

The ; would be there for a simpler assignment such as ```let sayHi = 5;``` and it is also there for a function assignment.

---------------------------

# Callback function

we will write a function ```ask(question, yes, no)``` with three parameters:

question: 
   - Text of the question

yes: 
   - Function to run it if answer is yes

no:
   - Function to run if the answer is no

```js
function ask(question, yes , no) {
   if(confirm(question)) yes ()
   else no();
}

function showOk() {
   alert("You agreed.");
}

function showCancel() {
   alert("You canceled the execution.");
}

// usage: function showOk, showCancel are passed as argument to ask
ask("Do you agree?", showOk, showCancel);
```
***The argument```showOk``` and ```showCancel``` of ```ask``` are called callback functions or just callback***

We can use Function Expressions to write an equivalent, shorter function:

```js 
function ask(question, yes, no) {
   if(confirm(question)) yes()
   else no();
}

ask(
   "Fo you agree?",
   function() {alert("You agreed.");},
   function() {alert("You Canceled the execution.");}
);
```
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

A function is a value representing an “action”

Regular values like strings or numbers represent the data.

------------------------------

# Function Expression vs Function Declaration
Let’s formulate the key differences between Function Declarations and Expressions.

First, the syntax: how to differentiate between them in the code.

   - Function Declaration: a function, declared as a separate statement, in the main code flow:
   ```js
      // Function Declaration
      function sum(a, b) {
      return a + b;
      }
   ```
   - Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
   ```js
   // Function Expression
   let sum = function(a, b) {
   return a + b;
   };
   ```
   The more subtle difference is when a function is created by the JavaScript engine.

🧠 A Function Expression is created when the execution reaches it and is usable only from that moment.

🧠 A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

```js
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```
The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

…If it were a Function Expression, then it wouldn’t work:

```js
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```
Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

```js
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined
```
That’s because a Function Declaration is only visible inside the code block in which it resides.

Here’s another example:

```js
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
```
What can we do to make welcome visible outside of if?

📌The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

This code works as intended:

```js
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now
```
Or we could simplify it even further using a question mark operator ?:

```js
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
```
When to choose Function Declaration versus Function Expression?

```text
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
```
Summary
   - Functions are values. They can be assigned, copied or declared in any place of the code.
   - If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
   - If the function is created as a part of an expression, it’s called a “Function Expression”.
   - Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
   - Function Expressions are created when the execution flow reaches them.


