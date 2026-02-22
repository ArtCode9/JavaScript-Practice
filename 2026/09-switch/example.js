// 1. Basic Match

let role = 'admin';

switch(role) {
   case 'admin':
      console.log(`Full access`);
      break;
   case 'editor':
      console.log(`Editor access`);
      break;
   default:
      console.log(`User access`);
}
//==========================================
// 2. Strict Comparison Trap

let value = '10';

switch(value) {
   case 10:
      console.log(`Matched Number`);
      break;
   default:
      console.log(`Not match`);
}
// output is Not match because : '10' !== 10

//==========================================
// 3. Numeric range Grouping (Fallthrough)

let score = 85;

switch(true) {
   case score >= 90:
      console.log(`Grade A`);
      break;
   case score >= 75:
      console.log(`Grade B`);
      break;
   case score >= 50:
      console.log(`Grade C`);
      break;
   default:
      console.log(`Fail`);
}
// This is boolean switch pattern

//==========================================
// 4. intentional Fallthrough (grouped Cases)

let day = 'saturday';

switch(day) {
   case "saturday":
   case "sunday":
      console.log(`Weekend`);
      break;
   case "Friday":
      console.log(`It's friday so ...`);
      break;
   default:
      console.log(`Weekday!`);
}
// both cases share logic

//==========================================
// 5. Enum like system 

const STATUS = {
   PENDING: 0,
   APPROVED: 1,
   REJECTED: 2,
}

let currentStatus = STATUS.APPROVED;

switch(currentStatus) {
   case STATUS.PENDING:
      console.log(`Waiting approval!`);
      break;
   case STATUS.APPROVED:
      console.log(`Approved!`);
      break;
   case STATUS.REJECTED:
      console.log(`Rejected`);
      break;
}
// professional constant mapping pattern

//==========================================
// 6. Nested Switch (State + action)

let state6 = "LoggedIn";
let action6 = "delete";

switch(state6) {
   case "LoggedIn":
      switch(action6) {
         case "delete":             
            console.log(`Delete Allowed`);
            break;
         default:
            console.log(`Action not allowed`);
      }
      break;
   default:
      console.log(`Please login!`);
}

//==========================================
// 7. Default in Middle (Legal but Rare)

let x7 = 2;

switch(x7) {
   case 1:
      console.log(`One`);
      break;
   default:
      console.log(`Default`);
   case 2:
      console.log(`Two`);
      break;
}
// still works logically

//==========================================
// 8. Without Break (Dangerous Fallthrough)

let level8 = 1;

switch(level8) {
   case 1:
      console.log(`Level 1`);
   case 2:
      console.log(`Level 2`);
      break;
}
/* 
   Out put is : Level 1 - Level 2  ----  Because no break after case 1.
*/

//==========================================
// 9. Switch with Function Execution

let command = "start";

switch(command) {
   case "start":
      startEngine();
      break;
   case "stop":
      stopEngine();
      break;
}
// Used in command pattern system

//==========================================
// 10. Expression Evaluation Switch

let a = 5;
let b = 3;

switch(a + b) {
   case 8:
      console.log(`Correct`);
      break;
}
// Switch expression is evaluated once.

//==========================================
// 11. Using Object in Switch

let user11 = { id: 1, };

switch(user11){
   case user:
      console.log(`Same Reference`);
}
// Switch compares by reference for object

//==========================================
// 12. Switch with boolean value

let isActive = true;

switch(isActive) {
   case true:
      console.log('Active');
      break;
   case false:
      console.log('Inactive');
      break;
}

//==========================================
// 13. Typed-based Handling

let input3 = 42;

switch(typeof input3) {
   case "string":
      console.log(`String input`);
      break;
   case "number":
      console.log(`Number input`);
      break;
}
// useful for validators

//==========================================
// 14. Switch as Finite State Machine

let state4 = "idle";

switch(state4) {
   case "idle":
      console.log('Waiting....');
      break;
   case "loading":
      console.log(`Loading Data....`);
      break;
   case "error":
      console.log(`Error occurred`);
      break;
}
// Used in UI frameworks

//==========================================
// 15. complex permission logic

let role15 = "editor";
let action = "publish";

switch(role15) {
   case "admin":
      console.log(`All permissions`);
      break;
   case "editor":
      switch (action) {
         case "publish":
            console.log(`Publish Allowed`);
            break;
         default:
            console.log(`Restricted action`);
      }
   break;
}

//==========================================
// 16. Dynamic case value:

let tody = new Date().getDay();

switch(tody) {
   case 0:
      console.log(`Sunday`);
      break;
   case 1:
      console.log(`Monday`);
      break;
}

//==========================================
// 17. Switch with return (function pattern)

function getMessage(code) {
   switch(code) {
      case 200:
         return "Success";
      case 404:
         return "Not Found";
      default:
         return "Unknown";
   }
}
// Professional pattern

//==========================================
// 18. Switch with multiple condition (boolean mode)

let age18 = 25;

switch(true) {
   case age18 < 13:
      console.log(`Child`);
      break;
   case age18 < 18:
      console.log(`Teen`);
      break;
   case age18 >= 18:
      console.log(`Adult`);
}

//==========================================
// 19. Symbol comparison

let sym = Symbol("id");

switch(sym) {
   case sym:
      console.log(`Matched symbol`);
}
// Switch uses strict reference equality

//==========================================
// 20. Advanced pattern: Command Router

function execute(command) {
   switch(command){
      case 'create':
         return `Creating resources`;
      case 'update':
         return `Updating resources`;
      case 'delete':
         return `Deleting resources`;
      default:
         throw new Error(`Unknown command`);
   }
}
// Used in backend routing logic 

/* 
🔥 Deep Understanding Summary

Switch characteristics:

Uses ===

Evaluates expression once

Supports fallthrough

Requires break (unless intentional)

Cases can be any expression

Can simulate range logic using switch(true)

Good for enum-style logic

Not good for complex logical expressions (prefer if)
*/