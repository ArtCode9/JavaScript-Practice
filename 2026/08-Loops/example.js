/* 
   Core mental Model 
   Loops Are for repeated behavior not repeated code.
   the loop choice depends on data shape side effects and exit condition.
*/
//--------------------------------------------------------------
//  1️⃣ loop -- Precise Control (index-driven)
// use case: performance-critical or index-aware logic

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

