// Nullish Coalescing operator
/* 
   core idea (the rule)

   ?? return the right-hand value only if the left-hand value is null or undefined -- nothing else

   This is the entire reason it exists.
*/

// bugs with ||
const retries = setOptions.retries || 3;

setOptions.retries = 0;
// Results:

retries === 3; // ❌

// Correct with ??
const retriesFix = setOptions.retries ?? 3;

// Results: 
retries === 0 // ✔️

/* 
   Why this is high-level
      Differentiates intentional values from missing values
      Prevents silent logic corruption
*/
//-----------------------------------------------------------------
//  2️⃣User preferences (Real-world UI logic)

const theme = userSettings.theme ?? "dark";

/* 
   Works correctly if:
      theme = "" -> keep empty
      theme = "light" -> keep
      theme = null -> default to dark
*/
//--------------------------------------------------------------------
//  3️⃣ Safe API Data Handling

const displayName = apiUser.name ?? "Anonymous";

/* 
   Why this matters:
      APIs often return null.
      Empty strings may be intentional
*/
//------------------------------------------------------------------------
// 4️⃣ Form values (Very Common in React)

const value = formData.age ?? "";

/* 
   Allows 0
   Avoids uncontrolled input bugs
   Prevents React warning
*/
//-----------------------------------------------------------------
// 5️⃣ Nested defaults (Advanced Pattern)

const timeOut = config.network?.timeOut ?? config.global?.timeOut ?? 5000;

/* 
   Safe - Expressive - No crashes
*/
//------------------------------------------------------------------
// 6️⃣ Function Parameters (Modern API design)

function createUser (name, role = "user") {
   return {
      name,
      role: role ?? "user"
   };
}

/* 
   Why not || ?
      role = "" might be intentional
*/
//-------------------------------------------------------------------
// 7️⃣ ❌ Illegal usage (important!!)
// You can not mix ?? with || or && without Parentheses.

// ❌ Syntax error
// a ?? b || c

//  ✔️correct 
a ?? (b || c)
//-----------------------------------------------------------------
// 8️⃣ When NOT to use ??
// ❌ Validation:
if (value ?? false) {}

// ❌ Boolean logic:
isReady ?? doSomething();

// Use ?? only for default not control flow.
//-----------------------------------------------------------------
/* 
   Mental model:
   ??  -> null or undefined
   &&  -> truthy (Control flow)

   🔑 Senior-level takeaway
   ?? is not convenience operator - it is a correctness operator.
   it exists to prevent silent production-level bugs.
*/