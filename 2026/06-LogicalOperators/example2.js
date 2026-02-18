// ex1: Authentication Gate (AND chain)

let isLoggedIn = true;
let isVerified = true;
let has2FA = true;

if(isLoggedIn && isVerified && has2FA) {
   console.log(`Access Granted`);
}
// All must be truthy.  && Stops on first falsy

//---------------------------------------------------------------
// ex2: OR Fallback Role system

let role = "editor";

if(role === 'admin' || role === 'editor') {
   console.log(`Content access allowed`);
}
// One Valid role is enough

//---------------------------------------------------------------
// ex3: short-Circuit Value Return (important)
let username = "";
let displayName = username || "Guest";

console.log(displayName);
/* 
   "" is falsy -> return "Guest"
   || return the first truthy value NOT a boolean
*/

//---------------------------------------------------------------
// ex4: AND return last Truthy
let result = "Hello" && 100 && true;

console.log(result);
/* 
   "Hello", 100, true --> truthy and true is final value
   output -> true
*/

//---------------------------------------------------------------
// ex5: guard clause with AND
let user = { name: "ART" }

user && user.name && console.log(user.name);
// Prevents error if user is null

//---------------------------------------------------------------
// ex6: Permission system (Complex AND/OR)
let isAdmin = false;
let isOwner = true;
let isSuspended = false;

if((isAdmin || isOwner) && isSuspended) {
   console.log(`Modify resource allowed`);
}
// here parentheses is matter
//---------------------------------------------------------------
// ex7: Price validation
let price = 120;

if(price > 0 && price < 1000) {
   console.log("Valid price");
}
// Range check using AND

//---------------------------------------------------------------
// ex8: Login Condition with Type Coercion

let token = "abc123";

if(token && token.length > 0) {
   console.log(`Token Valid`);
}
// String must be truthy AND have length

//---------------------------------------------------------------
// ex9: Numeric OR Fallback
let input = 0;
let value = input || 10;

console.log(value);

// ⚠️ important: 0 is falsy -> value becomes 10
//                common bug in production
//---------------------------------------------------------------
// ex10: Correct Numeric Fallback (Professional Fix)
let input10 = 0;
let value10 = (input10 !== undefined && input10 !== null) ? input10 : 10;

console.log(value10);
// Avoids logical OR pitfall
//---------------------------------------------------------------
// ex11: Password Strength Validation
let password = "Abc123";

if(password.length >= 6 && 
   /[A-Z]/.test(password) &&
   /[0-9]/.test(password)
) {
   console.log("Strong Password");
}
// all condition required

//---------------------------------------------------------------
// ex12: Feature flag activation
let env = "production";
let featureEnabled = true;

if(env === "production" && featureEnabled) {
   console.log(`Feature active`);
}
// Real deployment logic
//---------------------------------------------------------------
// ex13: Double Negation Boolean Conversion
let data13 = "Hello";

if(!!data13) {
   console.log("Data exists");
}
// !! forces ToBoolean conversion

//---------------------------------------------------------------
// ex14: Complex Payment  Validation
let amount = 500;
let hasCard = true;
let cardExpired = false;

if(amount > 0 && hasCard && !cardExpired) {
   console.log("Payment processed");
}
//---------------------------------------------------------------
// ex15: inventory System
let stock = 5;
let isDiscontinued = false;

if(stock > 0 && !isDiscontinued) {
   console.log(`Available for purchase`);
}
//---------------------------------------------------------------
// ex16: IP + Rate Limit Security Check 
let ipAllowed = true;
let requests = 80;
let rateLimit = 100;

if(ipAllowed && requests < rateLimit) {
   console.log(`Request accepted`);
}

//---------------------------------------------------------------
// ex17: Short-Circuit Assignment Pattern
let cache = null;

cache || (cache = "Loaded from DB");

console.log(cache);

// if cache falsy -> assign new value


//---------------------------------------------------------------
// ex18: Boolean Logic with arithmetic
let a = 5;
let b = 3;

if((a + b > 7) && (a - b === 2)) {
   console.log(`Both conditions met`);
}
// Operators precedence respected

//---------------------------------------------------------------
// ex19: Nested Logical Groups
let age19 = 25;
let country = "US";
let hasVisa = false;

if(
   age >= 18 &&
   (country === "US" || hasVisa)
) {
   console.log("Entry Allowed");
}
// Grouped OR Inside AND
//---------------------------------------------------------------
// ex20: Multi-level Business Rule Engine
let isPremium = true;
let purchaseAmount = 300;
let couponValid = false;

if (
   (isPremium && purchaseAmount > 200) ||
   couponValid
) {
   console.log("Discount applied");
}
// Two possible paths to success
//---------------------------------------------------------------
/* 
   && operator:
      - Return first falsy value
      - if none falsy -> returns last value
      - Short-circuits
   
   || Operator:
      - Returns first truthy value
      - if none truthy -> returns last value
      - Short-circuits
   ! Operator:
      - Convert to boolean
      - Negates results
*/
//---------------------------------------------------------------