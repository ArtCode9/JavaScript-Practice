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