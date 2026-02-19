// ??= Nullish Coalescing Assignment Operator
// 

   x ??= y;

// this Equivalent To :
if(x ===null || x=== undefined) {
   x = y
}

/* 
It does NOT assign when x is :
   0 - false - "" - NaN
*/

// ex1: Basic -----------------------
let a = null;
a ??= 10;

console.log(a); // 10

// ex2: Undefined -------------------
let b;
b ??= 20;

console.log(b); // 20

// ex3: Zero Preservation -----------------
let count = 0;
count ??= 100;

console.log(count); // 0
// This is why ??= exists

// ex4: Boolean Preservation -------------

let isActive = false;
isActive ??= true;

console.log(isActive); // false

// ex5: Object Property Initialization -----------

let user = {};
user.role ??= "guest";

console.log(user.role); // guest

// ex6: Lazy Evaluation -------------------

function compute() {
   console.log("Computing....");
   return 50;
}

let value = 10;
value ??= compute(); // Compute NOT executed
// Short-circuit applies

//========================================================
/* 
   Operator Precedence Deep Dive:
   Precedence (higher runs first):
   _______________________________

   1. Member access (.)
   2. Optional chaining (?.)
   3. Unary (!, typeof, etc.)
   4. Multiplication / Division
   5. Addition / Subtraction
   6. Comparison (<, >, <=, >=)
   7. Equality (==, ===)
   8. Logical AND (&&)
   9. Logical OR (||)
   10. Nullish Coalescing (??)
   11. Assignment (=, ??=, ||=, &&=)
   _________________________________

   ⚠️ Important Rule: you CANNOT mix ?? with || or && without parentheses.
   true || (false && false)
   let x = (null ?? false) || true;
*/
// ex1: Safe Deep access -----------------------------------------
let user213 = {};
let city = user213.address?.city ?? "unknown";

console.log(city);
// user213.address -> undefined   ///    ?.city -> is short-circuits -> undefined   ///  ?? -> provides fallback
//-----------------------------------------------------------------
// ex2: Role validation -------------------------------------------
let user2 = {
   profile: {
      role: "admin"
   }
};

if (user.profile?.role === "admin" && (user.profile?.active ?? true)) {
   console.log(`Admin access`);
}

//-----------------------------------------------------------------
// ex3: Numeric Config Handling------------------------------------
let config = {
   timeout: 0
};

let timeout = config.server?.timeout ?? 5000;

console.log(timeout); // 5000
// because server is undefined

//-------------------------------------------------------------------
// ex4: Optional Method Call ----------------------------------------

let logger = null;

logger?.log("Message") ?? console.log("Fallback log");

//=====================================================================
/* 
    Writing a Config Loader Engine (Real Architecture Example)

Let’s build a serious one.
Requirements:
   - Read user config
   - Merge defaults
   - Preserve valid falsy values
   - Deep property safety
   - Validate ranges
*/
// step 1 : Default config

const defaultConfig = {
   port: 3000,
   host: "localhost",
   secure: false,
   retries: 3,
   timeout: 5000
};

// step 2: Loader

function loadConfig(userConfig ={}) {
   let config = {};

   config.port = userConfig.port ?? defaultConfig.port;
   config.host = userConfig.host ?? defaultConfig.host;
   config.secure = userConfig.secure ?? defaultConfig.secure;
   config.retries = userConfig.retries ?? defaultConfig.retries;
   config.timeout = userConfig.timeout ?? defaultConfig.timeout;

   if(config.port <= 0 || config.port > 65535) {
      config.timeout = defaultConfig.timeout;
   }

   return config;
}

// Test case 
let userConfig = {
   port: 0,
   retries: null,
};

console.log(loadConfig(userConfig));

/* 
   Result:
      - port reserved (0)
      - retries fallback
      - others default
   This is real backend level config logic
*/

//=============================================
// Edge-Case Interview Traps:

// Trap1:
console.log(0 ?? 5); // 0
// Trap2:
console.log(0 || 5); // 5
// Trap3:
let a1 = undefined;
let b1 = null;

console.log(a ?? b ?? "x"); // x
// Trap4:
let x2 = false;
x ??= true;
console.log(x); // false
// Trap5:
let obj = { value: null };
obj.value ??= 100;
console.log(obj.value); // 100
// Trap6:
function test() {
   console.log("Run");
   return 10;
}
let valueTest = null ?? test(); // test() runs  -> let value = 20 ?? test();  here test() not run