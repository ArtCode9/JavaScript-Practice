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
//--------------------------------------------------------
//--------------------------------------------------------

