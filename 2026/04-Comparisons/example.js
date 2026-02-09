// 1️⃣ Equality vs Strict Equality
// ❌ Loose equality (==) -- Type coercion happens
 

0 == false // true
"" == 0    // true
null == undefined // true

/* 
   why this is dangerous:
    - JS silently converts types
    - Leads to bugs that are hard to detect 
*/
// ✅ Strict equality (===) -- no type conversion

0 === false    // false
"" === 0       // false
null === undefined // false

/* 
   Rules used by professionals
   Always use === and !== unless you fully understand coercion
*/
//---------------------------------------------------------------
// 2️⃣ Numeric Comparisons (including Edge Cases)
10 > 5  // true
5 <= 5  // true 

// ⚠️ NaN is never equal to anything
NaN === NaN   // false

// Correct check:
Number.isNaN(NaN)   // true

//-------------------------------------------------------------
// 3️⃣ String comparisons (lexicographical)
// String are compared character by character (Unicode)

"apple" < "banana"   // true
"Zoo" > "apple"      // false (z has lower unicode than a)

//  case-insensitive comparison:

"a".toLowerCase() === "A".toLowerCase()   // true
//----------------------------------------------------------
// 4️⃣ Mixed Type Comparisons (Hidden Coercion)

"5" > 3  // true (String -> number)
"5" === 3 // false (no coercion)

// ⚠️ Dangerous Example:

null >= 0   // true
null > 0    // false
null == 0   // false

/* 
   Why ?
   null converts to 0 in relational comparisons
   null stays null in equality checks
*/
//-----------------------------------------------------------------
// 5️⃣ Object and reference Comparisons
// objects are compared by reference not value

// {} === {}  false

// same reference
const a = {}
const b = a 

a === b // true

// correct way to compare object values:

JSON.stringify(a)  === JSON.stringify(b)  // simple cases only
//----------------------------------------------------------
// 6️⃣ Practical Real-World Example (Auth Logic)

function canAccess(user) {
  return user.role === "admin" && user.active === true;
}

/* 
Why this is correct:
   No coercion
   Explicit boolean checks
   Predictable logic
*/
//----------------------------------------------------------
// 7️⃣ Professional Comparison Rules (Mental Model)

/* 
   | Rule            | Use             |
| --------------- | --------------- |
| `===` / `!==`   | Always          |
| `>` `<` `>=`    | Numbers only    |
| Compare objects | By reference    |
| Compare values  | Normalize first |
| Trust coercion  | ❌ Never         |

*/

/* 
   🔑 One-Line Expert Summary

JavaScript comparisons are safe only when types are explicit.
Ambiguity is the enemy of correctness.
*/