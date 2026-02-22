// 1. Basic function Expression
const greet = function () {
   console.log('Hello there');
}

greet();
// function is stored in a variable

//--------------------------------------------------------
// 2. Function Expression is NOT Hoisted
// greet(); ❌ Error

const greet2 = function () {
   console.log('Hello again');
}
// Only the variable is hoisted (undefined) not the function body.

//--------------------------------------------------------
// 3. Named Function Expression
const greet3 = function sayHello() {
   console.log('Hellllllllloooo');
}

greet3();
// sayHello();  ❌ not accessible outside
//  Name exists only inside the function body.

//--------------------------------------------------------
// 4. Named Expression for Recursion
const factorial = function fact(n) {
   if(n <= 1) return 1;
   return n * fact(n - 1);
};
console.log(factorial(5));
// Better Recursion safety

//--------------------------------------------------------
// 5. Function as first-class citizen

//--------------------------------------------------------

