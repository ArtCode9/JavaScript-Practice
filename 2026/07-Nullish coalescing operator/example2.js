/* 
   Core Rule : 
                  a ?? b 
   Returns : 
      - a if a is NOT null and NOT undefined
      - otherwise return b 
   only Checks: null and undefined
   it does not treat: 0 - false - "" - NaN as nullish
*/
//--------------------------------------------------------
// ex1: Basic default value (correct way)
let userName = null;
let displayName = userName ?? "Guest";

console.log(displayName);  // Guest
//--------------------------------------------------------
// ex2: undefined Fallback
let age;
let finalAge = age ?? 18;

console.log(finalAge); // 18

//--------------------------------------------------------
// ex3: Important Difference vs OR
let count = 0;

let result1 = count || 10;
let result2 = count ?? 10;

console.log(result1); // 10 (wrong for numeric case)
console.log(result2); // 0 (correct)

// This is why ?? exist

//--------------------------------------------------------
// ex4: Empty String Preservation
let title = "";

let finalTitle = title ?? "Untitled";

console.log(finalTitle); // ""
// "" is valid --- not nullish

//--------------------------------------------------------
// ex5: Boolean Preservation
let isActive = false;

let status5 = isActive ?? true;

console.log(status5); // false

// false in NOT nullish

//--------------------------------------------------------
// ex6: NaN Case 
let value = NaN;

let result6 = value ?? 100;
console.log(result6); // NaN

// NaN is Not nullish
//--------------------------------------------------------
// ex7: Deep API Response Handling
let response = {
   user: {
      name: null,
   }
};

let username = response.user.name ?? "Anonymous";
console.log(username);
// real backend scenario

//--------------------------------------------------------
// ex8: Chained Nullish Coalescing
let a = null;
let b = undefined;
let c = "Final";

let result = a ?? b ?? c;

console.log(result);
// Evaluates left to right
//--------------------------------------------------------
// ex9: Nullish with arithmetic
let price = null;
let total = (price ?? 0) + 100;

console.log(total); // 100
// parentheses are important

//--------------------------------------------------------
// ex10: Function Parameter Default (Advanced Use)
function createUser (name) {
   name = name ?? "Guest";
   return name;
}

console.log(createUser(null)); // Guest
console.log(createUser("Art")); // Art

//--------------------------------------------------------
// ex11: Nullish vs falsy complex case
let input11 = "";

let value11 = input11 ?? "default";

console.log(value11);

// with || this would break
//--------------------------------------------------------
// ex12: With Optional Chaining (Modern Pattern)

let user = {};
let city = user.address?.city ?? "Unknown";

console.log(city);
// This is production-level Safe access
//--------------------------------------------------------
// ex13: Strict Nullish Logic
let configValue = 0;

if((configValue ?? 100) === 0) {
   console.log(`Value preserved`);
}
// Ensures 0 is not replaced
//--------------------------------------------------------
// ex14: Lazy Evaluation Insight
function fallback() {
   console.log(`Fallback Executed`);
   return 50;
}
let value14 = 10 ?? fallback();
console.log(value14);

// fallback never run because 10 is not nullish
//--------------------------------------------------------
// ex15: Side-effect Demonstration
let a15 = null;

let result15 = a ?? console.log(`Running fallback`);
// Fallback executes only when left side is nullish
//--------------------------------------------------------
// ex16: Mixed with Logical Operator (Precedence Important)
let value16 = null;
let result16 = (value16 ?? false) || true;
console.log(result16);

// ?? can not mix directly with || or && without parentheses in modern js
// Understanding precedence restrictions is  advanced knowledge
//--------------------------------------------------------
// ex17: Configuration System
let envConfig = {
   timeout: 0
};
let timeout = envConfig.timeout ?? 3000;

console.log(timeout); // 0
// correct handling of zero config
//--------------------------------------------------------
// ex18: database value handling
let dbValue = undefined;

let finalValue = dbValue ?? 'Not provide';

console.log(finalValue);

// Classic DB null handling
//--------------------------------------------------------
// ex19: Nested Object Defaulting
let setting = {
   theme: null
};

let theme = setting.theme ?? "light";
console.log(theme);
//--------------------------------------------------------
// ex20: Real validation Pipeline Example:
function calculateDiscount(discount) {
   let validDiscount = discount ?? 0;

   if(validDiscount >= 0 && validDiscount <= 50) {
      return validDiscount;
   }

   return 0;
}

console.log(calculateDiscount(null)); // 0
console.log(calculateDiscount(20)); // 20
//--------------------------------------------------------

