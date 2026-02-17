// importing modules

// all the import statement at the top of the file and all the imported file executed by strict mode by default

// import { addToCart } from './shoppingCart.js';
// import { totalPrice as price, tq } from './shoppingCart.js'; // you can change the name of const 

// console.log(`Importing module`); 

// addToCart('bread', 5);
// console.log(`this is :` + price + `  this is all  ` + tq);

console.log(`Importing modules`);

// we can also import all the exports at same time like this 
import * as shoppingCart from './shoppingCart.js'; // also this module is now basically exporting a public API just like a class
shoppingCart.addToCart('bread', 3);
console.warn(shoppingCart.totalPrice , shoppingCart.tq); // everything else stay private in modules

// this is call default import form module with every name we want can call here
// import  add, { addToCart , totalPrice as bb , tq } from './shoppingCart.js'; // 👉 i call default 'add' here  and can import all export 
import  add from './shoppingCart.js';

// 🤖  this 👇prove this import here is in fact not simply a copy of the value that we export from shoppingCart 
//                                              it is a live connection
import { games } from './shoppingCart.js'; 

add('CSGo' , 2.14);
add('DOTA2' , 1.22);
add('WOW', 1.232);

console.warn(games);
// what you probably should really not do is to mix default and named exports so avoid to reduce complexity⚠️

//  ⚠️⚠️  import is not a copy  of export is live connecting ⚠️⚠️