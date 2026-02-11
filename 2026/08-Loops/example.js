/* 
   Core mental Model 
   Loops Are for repeated behavior not repeated code.
   the loop choice depends on data shape side effects and exit condition.
*/
//--------------------------------------------------------------
//  1️⃣ loop -- Precise Control (index-driven)
// use case: performance-critical or index-aware logic

const { attempt } = require("lodash-es");

function normalizeScores (scores) {
   for(let i = 0; i < scores.length; i++){
      if(scores[i] < 0 ) break;  // early exit
      scores[i] = Math.min(scores[i], 100);
   }
   return scores;
}

/* 
   Why This is hight-level:
      Explicit index control
      Early break
      Mutates data intentionally
   Use when
      You need index
      You need break / continue
      You care about performance
*/
//--------------------------------------------------------
//  2️⃣ for...of  -- value Focused Iteration (clean and safe)
// use case: readable iteration over collections.

for (const user of users) {
   if(!user.active) continue;
   sendEmail(user.email);
}
/* 
   why professionals prefer it:
      no idex mistakes
      works with arrays, strings, maps, sets
      clean intent
*/
//-------------------------------------------------------------
// 3️⃣ for...in -- object Enumeration (Use Carefully)
// Use Case: Object property inspection

function sanitize (obj) {
   for (const key in obj) {
      if(obj[key] == null) {
         delete obj[key];
      }
   }
}

/* 
   caution:
      iterate over inherited properties
      avoid on arrays
*/
//--------------------------------------------------------------------
// 4️⃣ while  -- unknown Duration loops
// use case: Retry / polling logic

while (attempts < MAX_RETRIES && !connected) {
   connected = tryConnect();
   attempts++;
}
/* 
   Why this is correct :
      Loop depends on state not count
      Reads like real-world logic
*/
//-------------------------------------------------------------------------
// 5️⃣ do...while  --  at least once execution
// use case: user interaction

do {
   input = prompt("Enter a number");
}while (isNaN(input));
//-------------------------------------------------------------------------
// 6️⃣ Functional loops (map, filter, reduce) -- Data Transformation
// example: pipeline thinking

const activeEmails = users
      .filter(u => u.active)
      .map(u => u.email);
/* 
   Why this is high level :
      no mutation
      Declarative
      Composable

   Rule:
   use functional loops when transforming data not controlling flow.
*/
//------------------------------------------------------------------------
// 7️⃣ ❌ Anti-pattern: Using map for side effects

// bad
users.map(u => console.log(u.name));

// correct
users.forEach(u => console.log(u.name));
//-------------------------------------------------------------------------
// 8️⃣ breaking Early (performance + correctness)
let found = false;

for(const item of list ) {
   if(item.id === targetId) {
      found = true;
      break;
   }
}
// ❌ functional methods can not break early.
//-------------------------------------------------------------------------
// 9️⃣ Async loops (Critical for real apps)
// ❌ Buggy

items.forEach(async item => {
   await save(item);
});

// ✅ correct

for (const item of items) {
   await save(item);
}
//---------------------------------------------------------------------

/* 
   Decision Table (Senior intuition)
   Goal                  Best loop
   index control         ```for```
   Clean iteration       ```for...of```
   Objects               ```for...in```
   Unknown repeats       ```while```
   transform data        ```map / filter / reduce```
   Async sequencing      ```for...of```
*/

/* 
   🔑 Expert Takeaway
   loops are not interchangeable.
   choosing the wrong one causes:
      bugs
      performance issues
      unreadable code
*/