/* 
   there are two categories:
   1: Explicit (intentional) Conversion
   2: Implicit (Coercion by JS Engine)
*/

// 1️⃣ Explicit Type conversion
// Ex1: user Input (DOM -> Number)

const priceInput = "199.99"; // from input 

const price = Number(priceInput);

if(Number.isNaN(price)) {
   throw new error("Invalid price");
}

/* 
   - never trust user input
   - uses Number.isNaN , not isNaN
*/
//---------------------------------------------
// Ex2: boolean conversion for feature flags

function isFeatureEnabled(envValue) {
   return envValue === "true";
}

const darkMode = isFeatureEnabled(process.env.DARK_MODE);

Boolean("false");  // this is true ⚠️

// Sting like "false" are truthy do not trust boolean
//---------------------------------------------
// Ex3: API Data Normalization

function normalizeUser(apiUser) {
   return {
      id: Number(apiUser.id),
      isActive: Boolean(apiUser.is_active),
      age: apiUser.age ? Number(apiUser.age) : null,
   }
}

/* 
   - APIs often return string
   - Frontend normalizes types once
*/
//-------------------------------------------------
// 2️⃣ Implicit Type conversion (COERCION)
// ⚠️ Most bugs live here

// Ex4: Silent Bug (Classic)

const total = "5" + 3;
console.log(total); // "53"

// Senior fix

const fixTotal = Number("5") + 3;

//------------------------------------------------------
// Ex5: Comparison Pitfall

0 == false // true
"" == false // true
null == undefined // true

/* 
   Never use == in business logic
   always:
*/
0 === false // false
//-------------------------------------------------------
// Ex6: Mathematical coercion (Know it)

"10" * 2 // 20
"10" - 1 // 9
"10" / 2 // 5

/* 
   * - /  => force numeric conversion
   +      => is ambiguous (String concat vs math)

   + is dangerous other are predictable
*/
//----------------------------------------------------

// 3️⃣ Boolean Conversion (Very important)
// Truthy / falsy in practice
if(user.name) {
   //  safe only if empty string is invalid
}

// falsy value
false
0 
-0
0n
""
null
undefined
NaN

// Senior trick
if(!user?.name?.trim()) {
   throw new Error("Name required");
}

//---------------------------------------------
// 4️⃣ Nullish Coalescing vs OR (High-Level)
// ❌ Wrong

const timeout = config.timeout || 3000;

// if timeout = 0 -> wrong
// ✅ Correct

const timeoutCorrect = config.timeout ?? 3000;

/* 
   || check falsy
   ?? check null or undefined only
*/
//---------------------------------------------
// 5️⃣ Conversion via Object (Advanced)

const value = {
   valueOf() {
      return 10;
   }
};

console.log(value + 5); // 15

/* 
   Used in :
   Libraries - Date - Custom numeric objects
*/
//----------------------------------------------
// 6️⃣ Real bug Example from Production 
const page = Number(params.page) || 1;

/* 
   Bug:    page = 0 -> becomes 1

   Fix:👇👇👇👇👇👇👇👇👇
*/
const fixPage = Number.isNaN(Number(params.page)) ? 1 : Number(params.page);

/* 
   🧠 Senior Rules to Remember
   1. Convert at boundaries (inputs, APIs)
   2. Store normalized types internally
   3. Avoid implicit coercion in logic
   4. Prefer === , ?? , Number()
   5. Never trust strings
*/

