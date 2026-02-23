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
const logger = function(message) {
   console.log(message);
}

function execute(fn) {
   fn("executed");
}

execute(logger);
// Function are values

//--------------------------------------------------------
// 6. Passing Function as Argument (callback)
const process = function (num, callback) {
   return callback(num);
};

const double = function (x) {
   return x * 2;
};

console.log(process(5, double));

//--------------------------------------------------------
// 7. Returning a Function 
const multiplier = function (factor) {
   return function (number) {
      return number * factor;
   };
};

const double7 = multiplier(2);
console.log(double7(10));
// Closure via expression.

//--------------------------------------------------------
// 8. IIFE (Expression Form)
(function () {
   console.log('Immediately executed;');
})();
// Classic IIFE using expression

//--------------------------------------------------------
// 9. Function Expression in Object (Method)
const user9 = {
   name: art,
   greet: function () {
         return "Hello" + this.name;
      },
};

console.log(user9.greet());

//--------------------------------------------------------
// 10. Dynamic Function Assignment
let operation;

if(true) {
   operation = function (a, b) {
      return a + b;
   };
} else {
   operation = function (a, b) {
      return a - b;
   };
}

console.log(operation(5, 3));
// strategy switching

//---------------------------------------------------------
// 11. Closure with Private State
const counterFactory = function () {
   let count = 0;
   
   return function () {
      count++;
      return count;
   };
};

const counter = counterFactory();
console.log(counter());
console.log(counter());
// Private state retained

//---------------------------------------------------------
// 12. Memoization Pattern
const memoizedSquare = function () {
   const cache = {};

   return function (n) {
      if(cache[n]) return cache[n];

      cache[n] = n * n;
      return cache[n];
   };
};

const square = memoizedSquare();
console.log(square(5));
console.log(square(5));

//-----------------------------------------------------------
// 13. Function Expression as Event Handler
document.addEventListener('click', function (event) {
   console.log("Clicked at", event.clientX, event.clientY);
});
// anonymous callback usage

//------------------------------------------------------------
// 14. Encapsulation via module pattern
 const AuthModule = (function () {
  let isLoggedIn = false;

  return {
    login: function () {
      isLoggedIn = true;
    },
    status: function () {
      return isLoggedIn;
    }
  };
})();

AuthModule.login();
console.log(AuthModule.status());
// Private variable via IIFE.

//------------------------------------------------------------
// 15. Higher-Order Function (Decorator)
const withLogging = function (fn) {
  return function (...args) {
    console.log("Arguments:", args);
    return fn.apply(null, args);
  };
};

const add = function (a, b) {
  return a + b;
};

const loggedAdd = withLogging(add);
console.log(loggedAdd(3, 4));
// Decorator pattern.

//------------------------------------------------------------
// 16. Partial Application
const partialAdd = function (a) {
  return function (b) {
    return a + b;
  };
};

const addFive = partialAdd(5);
console.log(addFive(10));

//------------------------------------------------------------
// 17. Functional Composition
const compose22 = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};

const square22 = function (x) { return x * x; };
const double22 = function (x) { return x * 2; };

const squareAfterDouble = compose22(square22, double22);
console.log(squareAfterDouble(3));


//------------------------------------------------------------
// 18. Function Expression for Validation Engine
const createValidator = function (rule) {
  return function (value) {
    return rule(value);
  };
};

const isAdult = createValidator(function (age) {
  return age >= 18;
});

console.log(isAdult(20));

//------------------------------------------------------------
// 19. State Machine Using Expressions
const createMachine = function () {
  let state = "idle";

  return {
    transition: function (newState) {
      state = newState;
    },
    getState: function () {
      return state;
    }
  };
};

const machine = createMachine();
machine.transition("running");
console.log(machine.getState());

//------------------------------------------------------------
// 20. Strategy Pattern Implementation
const createCalculator = function () {
  const strategies = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; }
  };

  return function (type, a, b) {
    return strategies[type](a, b);
  };
};

const calculator = createCalculator();
console.log(calculator("multiply", 5, 4));

/* 
   🧠 What You Now Mastered
You covered:
Anonymous vs named expressions
Hoisting difference
First-class functions
Callback mechanics
Higher-order functions
Closures
Private state
IIFE (expression form)
Recursion with named expressions
Decorators
Partial application
Composition
Strategy pattern
Module pattern
State machines
You are now operating at solid upper-intermediate / early senior functional understanding.
*/