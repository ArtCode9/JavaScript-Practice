// ex1:
let age = 20;

if (age > 18) {  // if is true so executed
   console.log("Adult");
}
//----------------------------------------------------------------------
// ex2:
let age2 = "20";

if (age2 == 20) { // == does type coercion and convert to number so true
   console.log("Equals");
}
//----------------------------------------------------------------------
// ex3:
let age3 = "20";
if (age3 === 20){ // === checks type + value so this condition false 
   console.log("Equals");
}
//----------------------------------------------------------------------
// ex4:
let score = 0; // falsy value = 0 , "", null, undefined, NaN, false

if (score) {
   console.log(`Passed`);
} else {
   console.log(`Failed`);
}
//----------------------------------------------------------------------
// ex5:
let nameU = "art"; // Non-empty string -> truthy

if(nameU) {
   console.log(`Name exist`);
}
//----------------------------------------------------------------------
// ex6:
let nameD = ""; // Falsy

if(nameD) {
   console.log(`Exists`);
} else {
   console.log(`Empty`);
}
//----------------------------------------------------------------------
// ex7:
let value7 = "Hello" * 2; // NaN

if(value7) { // false
   console.log(`Valid`);
} else {
   console.warn(`Invalid`);
}
//----------------------------------------------------------------------
// ex8:
let age8 = 25;
let hasId = true;

if(age > 18 && hasId) {    // Both sides must be true = Logical AND (&&)
   console.log("Allowed");
}
//----------------------------------------------------------------------
// ex9:
let isAdmin = false ;
let isEditor = true; 

if(isAdmin || isEditor) {         // at least one must be true
   console.log(`Access granted`);
}
//----------------------------------------------------------------------
// ex10:
let isLoggedIn = false;

if(!isLoggedIn) {                // !false -> true
   console.log(`Please Login`);
}
//----------------------------------------------------------------------
// ex11:
let a11 = 5;
let b11 = 3;

if(a + b > 7) {  // true
   console.log(`greater`);
}
//----------------------------------------------------------------------
// ex12:
let number12 = 10;

if(number12 % 2 === 0) {  // 0 === 0
   console.log(`Even`);
}
//----------------------------------------------------------------------
// ex13:
let value = null;

if(value === undefined) {  // null == undefined -> true
   console.log(`Loose equal`);
}
//----------------------------------------------------------------------
// ex14:
let value14;

if(value === undefined) {  // exact match
   console.log("Undefined");
}
//----------------------------------------------------------------------
// ex15:
if("b" > "a") {    // Strings compared by unicode values
   console.log("true");
}
//----------------------------------------------------------------------
// ex16:
let result16 = true + 1;

if(result16 === 2) {     // true -> 1  so  1 + 1 = 2
   console.log("converted");
}
//----------------------------------------------------------------------
// ex17:
let value17 = "Hello";

if(!!value17) {          //  !! forces Boolean conversion
   console.log("truthy");
}
//----------------------------------------------------------------------
// ex18:
let age18 = "30";  //  -> number(numeric comparison triggers conversion)
let salary = 4000;

if(age18 > 25 && salary >= 3000) {
   console.log(`Qualified`);
}
//----------------------------------------------------------------------
// ex19:
let a19 = 0;  // a is falsy because 0
let b19 = 5;

if(a19 && b19) {             // AND stops immediately -> condition false
   console.log("both true");
}
//----------------------------------------------------------------------
// ex20:
if(false == 0) {
   console.log("Equals");
}
/*
false = 0  >> 0 == 0 true
 */
false === 0 // false
//----------------------------------------------------------------------
// remember this: 
// falsy value: false, 0, -0, 0n, "", null, undefined, NaN  