/* 
We will cover:
Syntax variations
Implicit vs explicit return
Parameter rules
Object return pitfalls
Lexical this
No arguments
No prototype
Not constructible
No super
No own this
No own new.target
Callback superiority
Functional programming patterns
Closures
Currying
Composition
Async arrow
Class context behavior
Performance considerations
*/

//---------------------------------------------------------
// 1. Basic Arrow Function
const great = () => {
   console.log(`Hello`);
};
great();
// Concise function expression.

//---------------------------------------------------------
// 2. Single parameter (No parentheses)
const square = x => x * x;
console.log(square(5));
// Implicit return

//---------------------------------------------------------
// 3. Multiple Parameters
const add = (a, b) => a + b;
console.log(add(3, 4));
// Parentheses required

//---------------------------------------------------------
// 4. Explicit Return Block
const divide = (a, b) => {
   if(b === '0') return "Error";
   return a /b;
};
// Use {} when multiple statements.

//---------------------------------------------------------
// 5. Returning Object (Common Pitfall)
// ❌ Wrong:
const createUser = (name) => { name: name};

// ✅ Correct:
const fixedCreateUser = (name) => ({ name: name});
console.log(createUser("Art"));
// Must Wrap object in parentheses


//---------------------------------------------------------
// 6. No arguments Object 
const showArgs = () => {
   console.log(arguments); // ❌ ReferenceError
};
// Arrow Function do not have arguments
// Use Rest Instead:
const NoArgShowArgs = (...args) => {
   console.log(args);
};

//---------------------------------------------------------
// 7. Lexical `this` (Critical Concept)
const user7 = {
   name: 'art',
   greet: function () {
      setTimeout(() => {
         console.log(this.name);
      }, 1000);
   },
}

user7.greet();
// Arrow Captures surrounding `this`

//---------------------------------------------------------
// 8. Arrows Does NOT Bind Its Own `this`
const user8 = {
   name: 'Art',
   greet: () => {
      console.log(this.name);
   }
};

user8.greet(); // undefined
// Never use arrow as object method When you need `this`

//---------------------------------------------------------
// 9. Not Constructible (Cannot Use new)
const Person = (name) => {
   this.name = name;
}
// new Person("Art"); ❌ TypeError
// Arrow Functions have no  [[Construct]]

//---------------------------------------------------------
// 10. No Prototype
const test10 = () => {};
console.log(test10.prototype); // undefined
// Arrow function cannot act as constructor functions.

//---------------------------------------------------------
// 11. Arrow in Array Methods (Professional Usage)
const numbers = [1,2,3,4];

const doubled = numbers.map(n => n * 2);
console.log(doubled);
// Most Common real-world use.

//---------------------------------------------------------
// 12. Filtering with arrow
const users12 = [
   { name: "Art", age:20 },
   { name: "Sara", age: 15},
];

const adults12 = users12.filter(user => user.age >= 18);
console.log(adults12);

//---------------------------------------------------------
// 13. Reduce Pattern
const numbers13 = [1,2,3,4];

const sum = numbers13.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Arrow functions dominate functional patterns.

//---------------------------------------------------------
// 14. Closure With arrow
const multiplier = factor => number => number * factor;

const double = multiplier(2);
console.log(double(10));
// Concise Currying

//---------------------------------------------------------
// 15. Functional Composition
const compose = (f, g) => x => f(g(x)); 

const square2 = x => x * x;
const double2 = x => x * 2;

const result15 = compose(square2, double2);
console.log(result15(3));
// Pure Functional style.


//---------------------------------------------------------
// 16. Arrow Inside Class (Correct Usage)
class counter {
   constructor() {
      this.count = 0;
   }

   increment = () => {
      this.count++;
      console.log(this.count);
   }
}

const c = new counter();
c.increment();
// Arrow preserves lexical `this` in class filed.

//---------------------------------------------------------
// 17. Async Arrow Function
const fetchData = async () => {
   return "Data Loaded";
};

fetchData().then(console.log());
// Works perfectly with async/await

//---------------------------------------------------------
// 18. Immediately Invoked Arrow Function (IIAFE)
(() => {
   console.log("Executed instantly");
})();
// Expression-only execution

//---------------------------------------------------------
// 19. Conditional Logic Inline
const check = age19 => age19 >= 18 ? "Adult" : "Minor";

console.log(check(20));
// Powerful one-liner logic

//---------------------------------------------------------
// 20. Strategy Pattern With arrow
const calculator = {
   add: (a, b) => a + b,
   subtract: (a, b) => a - b,
   multiply: (a, b) => a * b,
};

const compute = (type, a, b) => calculator[type](a, b);

console.log(compute("multiply", 5, 4));
// Clean modern strategy mapping.

/* 
   🚨 Critical Differences Summary
Arrow Functions:

✔ Shorter syntax
✔ Implicit return possible
✔ Lexical this
✔ No arguments
✔ No prototype
✔ Cannot be constructor
✔ Ideal for callbacks
✔ Perfect for functional programming
✔ Dangerous for object methods
✔ Not good for dynamic this scenarios
*/

/* 
   🧠 When To Use Arrow Functions
Use Arrow When:
   Writing callbacks
   Using map/filter/reduce
   Functional programming
   Preserving outer this
   One-liner logic

Avoid Arrow When:
   Defining object methods needing this
   Creating constructors
   Using arguments
   Needing dynamic context
*/