// 1️⃣ && (And) - Permission and Guard Logic
// example : Authorization gate

function canAccess(user) {
   return user && user.isActive && user.role === "admin";
}

/* 
   Why this is high-level
      Uses short-circuit evaluation
      Stops immediately if any condition fails
      Prevents runtime errors (user && user.isActive)

   Mental modal
   && returns the first falsy value , not true/false
*/
//---------------------------------------------------------------
// 2️⃣ ||  (or) - Fallback and default
// Example: Configuration fallback

const port = EncodedVideoChunk.PORT || 3000;

/* 
   Why professionals use it:
      Graceful fallback
      One-line defaulting
      Fast execution

   But:
*/
  0  || 3000   // -> 3000 (maybe wrong!)
  "" || "text" // -> "text"

//-----------------------------------------------------------------
// 3️⃣ ??  vs ||  (important distinction)

const timeout = userTimeout ?? 5000;

/* 
   ||  ->  replaces falsy
   ??  ->  replaces null / undefined only

   📌 Rule:
   " Use ?? when 0, "", or false are valid values "
*/

//----------------------------------------------------------------------
// 4️⃣ ! (NOT)  -  State inversion
// Example: Toggle logic

setIsOpen(prev => !prev)

// Example: Validation

if(!email.includes("@")) {
   throw new Error("invalid email");
}

/* 
   📌 ! convert value -> boolean -> inverted boolean
*/
//------------------------------------------------------------------------
// 5️⃣ Logical Operator as control flow (Advanced)
// Conditional execution

isLoggedIn && showDashboard();

// Equivalent: 

if( isLoggedIn ) showDashboard();

/* 
   clean
   Avoid when logic becomes complex
*/
//----------------------------------------------------------------------------
// 6️⃣ OR as Lazy Execution

loadFromCache() || fetchFromServer();

// fetchFromServer() runs only if cache fails
/* 
   used in:
      Caching
      Feature detection
      Polyfills
*/
//----------------------------------------------------------------------------
// 7️⃣ Complex real-world example (Production Pattern)

const canSubmit = !isLoading && isValid && (isAdmin || isOwner);

// Readable, expressive, intentional.
//-----------------------------------------------------------------------------
// 8️⃣ ❌ Anti-Patterns to avoid

// hard to read
isReady && isValid && SubmitEvent();

// Side effects hidden
user || createGuest();

// Prefer clarity over cleverness.
//-----------------------------------------------------------------------------
// 9️⃣ Truth Table (Senior-level intuition)
/* 
   &&   ->   finds falsy
   ??   ->   finds non-null
   !    ->   flips boolean

   🔑Expert summary:
   Logical operators in JS are value selectors not boolean operators.
   They control execution, default, and safety not just condition.
*/

/* 
   Real bugs Caused by || (Logical OR)
   Many devs thinks:
      || means use default if value is missing
   But in JS:
      || uses the default if the value is falsy
      not just null or undefined.

   Falsy values include:
      false , 0, "", NaN, undefined
*/

/* 
   Decision Rule (memorize this)
   only null/undefined are invalid     ->   Use ??
   all falsy values are invalid        ->   Use '
   Boolean logic / condition           ->   Use &&
   Defaults in configs                 ->   Use ??


   Most || bugs come from treating falsy as missing.
   JS does not agree with that assumption
*/