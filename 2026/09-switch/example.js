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
         
      }
}