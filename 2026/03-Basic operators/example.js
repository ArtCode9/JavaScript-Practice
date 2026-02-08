// 1️⃣ Arithmetic Operator (Not Just Math)
// Ex1: + is not a math operator

const a = 10;
const b = "5";

a + b; // "105"
a - b; // 5

/* 
   Senior Rule:
   + is string concatenation OR addition
   - * / are always numeric

   so senior safe version
*/
const result = a + Number(b);

//--------------------------------------------------
// Ex2: Floating Point Trap (Real BUG)

0.1 + 0.2 === 0.3 // false

// senior fix 
const sum = 0.1 + 0.2;
Number(sum.toFixed(2)) === 0.3 // Now is TRUE

/* 
   Used In: 
   - payments - Calculator - E-commerce
*/
//------------------------------------------------
// Ex3: Modulo % (Not just reminder)

// toggle feature every 3 clicks
if(clickCount % 3 === 0) {
   enableBonus();
}

/*
   Use in :
   Pagination - Grid Systems - Scheduling - Rate limiting
 */
//--------------------------------------------------
// 2️⃣ Assignment Operators (side effect!)
// Ex4: Hidden Mutation

let total = 10;
total += 5; // total = 15

// Fine .... until:
function addTax(amount) {
   return amount += amount * 0.1;
}
/* 
   Why dangerous ?
   - Mutates amount
   - Confusing in larger functions
*/
// ✅ Senior clarity:
function addTax2(amount) {
   return amount + amount * 0.1;
}
//---------------------------------------------------
// Ex5: Chained Assignment (Avoid)

let z, n, c;
z = n = c = 0;
/* 
   Problem :
   hard to debug - Right-to-left execution

   Senior Prefers:
*/
z = 0;
n = 0;
c = 0;
//---------------------------------------------------
// Ex6: Subtle Bug

let index = 0;

items[index++]; // uses 0 then increment
items[++index]; // increment first uses 1

/* 
   Senior rules:
   Avoid ++ in expressions
*/
// ✅ Clear version:
const item = items[index];
index += 1;
//------------------------------------------------
// 4️⃣ Logical operators (Very PowerFul)
//  Ex7: || is not default
const limit = userLimit || 10;

// Bug:
// userLimit = 0 -> limit = 10 ❌
// Senior fix
const fixLimit = userLimit ?? 10;
//-----------------------------------------------
// Ex8: Short-circuit Execution

isAdmin && deleteUser();

/* 
   Used for:
      Guards - Conditional execution - Clean Code
*/

// Ex9: Returning Values(not booleans!)
const name = input && input.trim();
/* 
   if input is empty -> return ""

   Senior know:
   Logical operator return operands not true/false
*/
//-----------------------------------------------
// 5️⃣ Unary Operators(High-Level Usage)
// Ex10: Unary + (Fast Conversion)

const width = +"300"; // 300

/* 
   Used in:
   Performance-sensitive code - Short expressions
*/
//-------------------------------------------------
// Ex11: typeof Gotcha

typeof null; // "object"

// Senior check
value === null
//-------------------------------------------------
// Ex12: delete (Danger Zone)

delete user.password;

/* 
   Used careFully in:
   Security - Sanitizing objects before sending to client
*/
//-------------------------------------------------
// 6️⃣ Real Production Bug Example:
if(count++) {
   sendAnalytics();
}

/* 
   Bug:
      first run -> false
      Logic unclear
*/
// fix
count += 1;
if(count > 0) sendAnalytics();
//---------------------------------------------------
/* 
   🧠 Senior Operator Rules
   - Never trust +
   - Avoid ++ inside expressions
   - Prefer clarity over cleverness
   - Use ?? over || 
   - Logical operators return values
*/
