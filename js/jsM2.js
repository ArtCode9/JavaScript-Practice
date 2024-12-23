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
///// 4 How Passing Arguments Works Value vs. Reference  ////
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
/////    ////
/////////////////////////////////////////////////////////////









