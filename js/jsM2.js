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
/////          7 Functions Returning Functions           ////
/////////////////////////////////////////////////////////////

/* 

const greet = function (greeting) {
   return function (name) {
         console.log(`${greeting} ${name}`);
   };
};

const greeterHey = greet('hey');
greeterHey('Art');
greeterHey('Steven');

greet('hi')('dada');

//  challenge
//  write arrow function for above functions
const greetArr = greeting => names => console.log(`${greeting} ${names}`);

greetArr('Hiiii')('Arrow Functions');

 */

/////////////////////////////////////////////////////////////
/////////       8 The call and apply Methods           //////
/////////////////////////////////////////////////////////////

/* 

const lufthansa = {
   airline: 'Lufthansa',
   iataCode: 'LH',
   bookings: [],
   // book: function()
   book(flightNum, name) {
         console.log(`${name} booked a seat on ${this.airline} flight
            ${this.iataCode} ${flightNum}`);
   this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });         
   },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const euroWings = {
   airline: 'Eurowings',
   iataCode: 'EW',
   bookings: []
};

const book = lufthansa.book;
// lufthansa.book.call(euroWings, 23, 'Sarah Williams');


// Does NOT work
// book(23, 'Sarah Williams');

//  Call Methods
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);


book.call(lufthansa, 23, 'Sarah Williams');
console.log(lufthansa);

const swiss = {
   airline: 'Swiss Air line',
   iataCode: 'LX',
   bookings: []  
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//  Apply Methods
const flightDate = [583, 'George Cooper'];
book.apply(swiss, flightDate);
console.log(swiss);

book.call(swiss, ...flightDate);


// The apply() method accepts arguments in an array:
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);



//   Compared with the call() method:
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

// another Example for call() method

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

 */


// console.log(Math.max.apply(null, [2,6,9]));
// console.log(Math.max.apply(0, [2,6,9]));

/////////////////////////////////////////////////////////////
/////////            9 The bind Method                 //////
/////////////////////////////////////////////////////////////

/* 
const lufthansa = {
   airline: 'Lufthansa',
   iataCode: 'LH',
   bookings: [],
   // book: function()
   book(flightNum, name) {
         console.log(`${name} booked a seat on ${this.airline} flight
            ${this.iataCode} ${flightNum}`);
   this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });         
   },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const euroWings = {
   airline: 'Eurowings',
   iataCode: 'EW',
   bookings: []
};

const book = lufthansa.book;
// lufthansa.book.call(euroWings, 23, 'Sarah Williams');


// Does NOT work
// book(23, 'Sarah Williams');

//  Call Methods
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);


book.call(lufthansa, 23, 'Sarah Williams');
console.log(lufthansa);

const swiss = {
   airline: 'Swiss Air line',
   iataCode: 'LX',
   bookings: []  
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//  Apply Methods
const flightDate = [583, 'George Cooper'];
book.apply(swiss, flightDate);
console.log(swiss);

book.call(swiss, ...flightDate);


//  Bind Method
// book.call(euroWings, 23, 'Sarah Williams');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven art');
bookLH(77, 'arti art');
bookLX(88, 'hi man');


const bookEW23 = book.bind(euroWings, 2453);
// this only need a name of passenger
bookEW23('Arta Tav');
bookEW23('BAT man');


// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
   console.log(this);

   this.planes++;
   console.log(this.planes);
};
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate ;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value =>  value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
      return function (value) {
         return value + value * rate;
      }
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

 */

/////////////////////////////////////////////////////////////
///////////           10 CHALLENGE #1               /////////
/////////////////////////////////////////////////////////////


/* 

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an 
// array with the number of replies for each option. This data is stored in the starter 
// 'poll' object below.
//        Your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
// method does 2 things:

// 1.1. Display a prompt window for the user to input the number of the 
// selected option. The prompt should look like this:
// What is your favourite programming language?
//    0: JavaScript
//    1: Python
//    2: Rust
//    3: C++
//    (Write option number)

// 1.2. Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 

// 1. Make sure to check if the input is a number and if the number makes 
// sense (e.g. answer 52 wouldn't make sense, right?)

// 2. Call this method whenever the user clicks the "Answer poll" button.

// 3. Create a method 'displayResults' which displays the poll results. The 
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using 
// console.log(). This should be the default option. If type is 'string', display a 
// string like "Poll results are 13, 2, 4, 1".

// 4. Run the 'displayResults' method at the end of each 
// 'registerNewAnswer' method call.

// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
// object! So what should the this keyword look like in this situation?

//    Test data for bonus:
//           Data 1: [5, 2, 3]
//           Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 

const poll = {
   question: "What is your favourite programming language?",
   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
   // This generates [0, 0, 0, 0]. More in the next section!
   answers: new Array(4).fill(0),
   registerNewAnswer() {
      // Get the answer
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option Number)`));
      console.log(answer);
      
      // Register
      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

      // console.log(this.answers);
      this.displayResult();
      this.displayResult('string');

   },
   displayResult (type = 'array'){
      if(type === 'array'){
         console.log(this.answers);
      }else if(type === 'string'){
            // poll result are 13, 2, 4, 1
            console.log(`Poll result are ${this.answers.join(', ')}`); 
      }
   }
};
   
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3]});
poll.displayResult.call({ answers: [5, 2, 3]}, 'string');

poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1]});
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1]}, 'string');


 */

/////////////////////////////////////////////////////////////
/////  11 Immediately Invoked Function Expressions (IIFE) ///
/////////////////////////////////////////////////////////////

/* 
const runOnce = function () {
   console.log(`This will never run again`);
};
runOnce();

// IIFE
(function () {
   console.log(`This will never run  again`);
   const isPrivate = 23;
})();
//  this not work for scope reason
// console.log(isPrivate);

(() => console.log(`This will NEVER ALSO run again`))();


{
   const isPrivate = 23;
   var notPrivate = 46;
}
//  not work scope reason
// console.log(isPrivate);
//  it's work scope reason
console.log(notPrivate);

 */

/////////////////////////////////////////////////////////////
///////////                12 Closures              /////////
/////////////////////////////////////////////////////////////

 
/* 
const secureBooking = function () {
   let passengerCount = 0;

   return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
   };
};

const booker = secureBooking();

console.log(typeof booker);

booker();
booker();
booker();

console.dir(booker);

 */



