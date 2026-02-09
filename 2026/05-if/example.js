// 1️⃣ if / else  --- decision trees (control flow)
// real world example: Authorization logic

function getDashboard (user) {
   if(!user) {
      return "Guest";
   }

   if(user.isBanned) {
      return "blocked";
   }

   if(user.role === "admin") {
      return "admin-panel";
   }

   return "user-dashboard";
}

/* 
   Why this is high-level:
      - Reads like a policy
      - Handles early exist (guard clauses)
      - Easy to extend and debug

   📌 Best practice
   Use if when logic branches effects flow not just values.
*/
//--------------------------------------------------------------
// 2️⃣ Nested if vs Guard clauses (professional Refactor)
// ❌ hard to reason:

if(user) {
   if(!user.isBanned){
      if(user.role === "admin"){
         access();
      }
   }
}
//  ✅ clean scalable

if(!user) return;
if(user.isBanned) return;

if(user.role === "admin") { access(); }

//--------------------------------------------------------------
//  3️⃣ Ternary Operator (? : ) --- value selection
// Use case: UI state

const buttonText = isLoading ? "loading..." : "submit";

/* 
   Why ternary is ideal here:
      produces a value
      Single clear decision
      no side effects

   📌 Golden rule
   Use ternary when  choosing what not what happens
*/
//-------------------------------------------------------------
//  4️⃣Complex Ternary (still acceptable)
const status = 
   score >= 90 ? "A" :
   score >= 80 ? "B" :
   score >= 70 ? "C" :
   "Fail";
   
/* 
    ☑️ Acceptable when:
      pure value mapping
      short and linear 
    ❌ Avoid when:
      side effects
      Function calls
      Deep logic
*/
//------------------------------------------------------------
// 5️⃣ ❌ Anti pattern: ternary for side effects

// bad
isValid ? saveData() : showError();

// ✅ Correct:

if(isValid) {
   saveData();
} else {
   showError();
}
//-------------------------------------------------------------
// 6️⃣ Advanced pattern: Conditional assignment

const config = isDev 
   ? { debug: true, api: "localhost" }
   : { debug: false, api: "prod.api" };

/* 
   Used heavily in:
      Config files
      Feature flags
      Environment Switches
*/
//--------------------------------------------------------------
// 7️⃣ React-style Conditional Rendering (mid-level)

{isLoggedIn ? <Dashboard /> : <Login /> }

// Or with guards:

if (!isLoggedIn) return <Login />;
return <Dashboard />;
//--------------------------------------------------------------
// 8️⃣ Decision Matrix: When to use what
/* 
   | Situation       | Use         |
   | --------------- | ----------- |
   | Control flow    | `if / else` |
   | Value selection | `? :`       |
   | Early exit      | `if` guard  |
   | UI text         | ternary     |
   | Side effects    | `if`        |
---------------------------------------
🔑 Expert Summary:
   if controls execution
   Ternary selects values
   Mixing them leads to unreadable code
*/ 
