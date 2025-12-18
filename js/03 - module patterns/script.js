// the main goals of the modules pattern is to encapsulate functionality 
//  to have private data and to expose a public API
import * as data from './moduleOne.js';

console.log(`importing module from one`);

/*
    we create an iife so it's very important that this  function 
    is only created once because the goal of this  function 
    is not to reuse code by running it multiple times
    the only purpose of this function is to create a new scope and return data just once 
*/

(function () {
   // all of this data here is private
   const cart = [];
   const shippingCost = 10;
   const totalPrice = 237;
   const totalQuantity = 23;

   const addToCart = function(product, quantity) {
      cart.push({product, quantity});
      console.log(`${quantity} ${product} added to cart`);
   };

   const orderStock = function(product, quantity){
      console.log(`${quantity} ${product} ordered from supplier`);
   };

})();
 