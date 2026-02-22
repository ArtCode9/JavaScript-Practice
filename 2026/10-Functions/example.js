//==========================================
// 1. Hoisting Behavior

printMessage();

function printMessage() {
   console.log(`Hoisted successfully`);
}
// Function declaration are fully hoisted with body.

//==========================================
// 2. Parameters vs arguments
function add(a , b) {
   console.log(a + b);
}

add(3, 6); // a = 3 and b = 6

//==========================================
// 3. Missing arguments
function multiply(a , b) {
   console.log(a * b);
} 
multiply(5); // b is become undefined so the result is NaN

//==========================================
// 4. Default Parameters
function greet(name = "Guest") {
   console.log(`Hello ` + name);
}

greet(); // default applied only if argument is undefined

//==========================================
// 5. Rest parameters
function sumAll(...numbers) {
   let total = 0;

   for (let i =0; i < numbers.length; i++) {
      total += numbers[i];
   }

   return total;
}

console.log(sumAll(1,2,3,4,5));

//==========================================
// 6. arguments Object
function showArguments() {
   console.log(arguments.length);
   console.log(arguments[0]);
}

showArguments(10, 20, 30); // argument is array like

//==========================================
// 7. Early return Pattern
function divide(a, b) {
   if(b === 0) {
      return "Cannot divide by zero";
   }

   return a / b;
}
// Professional guard clause.

//==========================================
// 8. Pure function 
function square(n) {
   return n * n;
}
// No side effects

//==========================================
// 9. Impure Function
let counter = 0;

function increment() {
   counter++;
}
// Modifies external state

//==========================================
// 10. Returning Object

function createUser(name, age) {
   return {
      name: name,
      age: age,
   };
};
// Functions as factory 😍😍😍

//==========================================
// 11. Recursive Function 
function factorial(n) {
   if(n <= 1) {
      return 1;
   }

   return n * factorial( n - 1 );
}
// classic recursion

//==========================================
// 12. Recursive With Validation
function fibonacci(n) {
   if(n < 0) {
      return "Invalid input";
   }

   if( n <= 1) {
      return n;
   }

   return fibonacci(n - 1) + fibonacci(n - 2);
}

//==========================================
// 13. Function Calling Another Function 
function calculateTotal(price, tax){
   return applyTax(price, tax);
}

function applyTax(price, tax) {
   return price + price * tax;
}
// Layered Abstraction

//==========================================
// 14. Scope Demonstration
function outer() {
  let secret = "hidden";

  function inner() {
    console.log(secret);
  }

  inner();
}

outer();
// Lexical Scope

//==========================================
// 15. Closure (Declaration style)
function CounterFactory() {
   let count = 0;

   function increment () {
      count++;
      return count;
   }

   return increment;
}

let counter2 = CounterFactory();
console.log(counter2());
console.log(counter2());
// Closure retains count;

//==========================================
// 16. Function vs Validator Engine
function validator(user) {
   if(!user.name) {
      return "Name Required";
   }

   if(user.age < 18) {
      return "Must be adult";
   }

   return "valid";
} // Business rule function

//==========================================
// 17. Memoization (Advanced)
function memoizedFactorial() {
  let cache = {};

  function compute(n) {
    if (cache[n]) {
      return cache[n];
    }

    if (n <= 1) {
      return 1;
    }

    cache[n] = n * compute(n - 1);
    return cache[n];
  }

  return compute;
}

let fastFactorial = memoizedFactorial();
console.log(fastFactorial(5));
// Performance Optimization

//==========================================
// 18. IIFE (Function Declaration Variant)
(function initialize() {
   console.log("System initialized");  
})();
// Immediately executed

//==========================================
// 19. Error Throwing Function 
function withdraw(balance, amount) {
   if(amount > balance) {
      throw new Error("Insufficient funds");
   }

   return balance - amount;
}
// Error-based control flow.

//==========================================
// 20. Mini State Machine Using Functions

function createMachine() {
   let state = "idle";

   function transition(newState) {
      state = newState;
      return state;
   }

   function getState() {
      return state;
   }

   return {
      transition: transition,
      getState: getState
   };
}

let machine = createMachine();
machine.transition('Running');
console.log(machine.getState());
// Encapsulation with function only
//==========================================

/* 
🕶️ We go deep into:
 - Parameters mechanics
 - Default parameters
 - Rest parameters
 - Arguments object
 - Return mechanics
 - Early return
 - Recursion
 - Closures
 - Scope chain
 - Hoisting
 - Pure vs impure
 - IIFE (declaration form)
 - Higher-level architecture usage
 - Error handling
 - Function as abstraction tool
 - Memoization
 - State encapsulation
*/


/* 
   🔥 What You Just Covered
You now understand:
Hoisting
Parameter behavior
Default values
Rest parameters
arguments object
Early return patterns
Pure vs impure
Recursion
Closures
Memoization
Scope chain
Encapsulation
Error handling
State management
Function as abstraction tool
*/