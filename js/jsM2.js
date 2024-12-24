'use strict';

/////////////////////////////////////////////////////////////
/////////////////     3 Default Parameters    ///////////////
/////////////////////////////////////////////////////////////

/* 
const bookings = [];

const createBooking = function(flightNum, numPassenger = 1, price = 199 * numPassenger) {//default value define for parameters in es6
   // ES5
   // numPassenger = numPassenger || 1;
   // price = price || 199;

   const booking = { flightNum , numPassenger , price}
   console.log(booking);
   bookings.push(booking);
;}

createBooking('LH124');
createBooking('LH124', 2, 800);
createBooking('LH124', 2);
createBooking('LH124', 8);
// for skip one parameter we can use >> 'undefined'
createBooking('LH124', undefined, 1000);

 */

/////////////////////////////////////////////////////////////
////  4 How Passing Arguments Works Value vs. Reference   ///
/////////////////////////////////////////////////////////////

/* 
const flight = 'LH234';
const jonas = {
   name: 'Art Codeman',
   passport: 234323526454675
};


const checkIn = function(flightNum,passenger) {
      flightNum = 'LH999';
      passenger.name = 'Mr. ' + passenger.name;
      
      if(passenger.passport === 234323526454675){
         console.log(`Checked In!`);
      }else {
         console.log(`Wrong Passport number!!!`);
      }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// is the same doing....
const flightNum = flight;
console.log(flightNum);
const passenger = jonas;
console.log(passenger);

const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
console.log(jonas);
checkIn(flight, jonas);

 */

/////////////////////////////////////////////////////////////
/////     5 First-Class and Higher-Order Functions       ////
/////////////////////////////////////////////////////////////

// first class function : simply values
//                        function are another type values
// higher order function : ""    ""    ""   ""

/////////////////////////////////////////////////////////////
/////     6 Functions Accepting Callback Functions       ////
/////////////////////////////////////////////////////////////

/* 
// low-level functions
const oneWord = function (str) {
      return str.replace(/ /g, ' + ').toLowerCase();
};

const upperFirstWord = function (str) {
   const [first, ...others] = str.split(' ');
   return [first.toUpperCase(), ...others].join(' ');
};


//  Higher-order Function
const transformer = function (str, fn) {
   console.log(`Original string : ${str}`);
   console.log(`Transformed String : ${fn(str)}`);

   console.log(`Transformed by : ${fn.name}`);

};

transformer(`Javascript is the best!`, upperFirstWord);
transformer(`Javascript is the best!`, oneWord);


//  JS uses callbacks all the time
const high5 = function () {
   console.log('🤑');
};
document.body.addEventListener('click', high5); // addEventListener is higher-order functions

['Jonas', 'Martha', 'Adam'].forEach(high5);

 */

/////////////////////////////////////////////////////////////
/////           ////
/////////////////////////////////////////////////////////////

