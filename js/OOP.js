'use strict';
/////////////////////////////////////////////////////////////////////
//////////      003 What is Object-Oriented Programming      ////////
/////////////////////////////////////////////////////////////////////
// write some note about it in my notebook 
// but start search and reading document about it in web

/////////////////////////////////////////////////////////////////////
///////////////////      004 OOP in JavaScript          /////////////
/////////////////////////////////////////////////////////////////////
// write some note about it in my notebook 
// but start search and reading document about it in web

/////////////////////////////////////////////////////////////////////
////////  005 Constructor Functions and the new Operator     ////////
/////////////////////////////////////////////////////////////////////

/* 
const Person = function(fName, birthYear) {
   // Instance properties

      // console.log(this);
      this.fName = fName;
      this.birthYear = birthYear;

   // Never do this you should never create a method inside of constructor function
      // this.calcAge = function(){
      //    console.log(2037 - this.birthYear);
      // }
};

const art = new Person('art', 1991);
console.log(art);

// what exactly happen when we call a function with the new Operator
// 1. new {} is created
// 2. function is called, this={}
// 3. {} linked tp prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2014);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// review of last lecture: an object created from a class is called an instance

const jay = 'jay';

console.log(art instanceof Person);
console.log(jay instanceof Person);

 */
/////////////////////////////////////////////////////////////////////
/////////////////////      006 Prototypes         ///////////////////
/////////////////////////////////////////////////////////////////////

/* 
const Person = function(fName, birthYear) {
   // Instance properties

      // console.log(this);
      this.fName = fName;
      this.birthYear = birthYear;

   // Never do this you should never create a method inside of constructor function
      // this.calcAge = function(){
      //    console.log(2037 - this.birthYear);
      // }
};

const art = new Person('art', 1991);
console.log(art);

// what exactly happen when we call a function with the new Operator
// 1. new {} is created
// 2. function is called, this={}
// 3. {} linked tp prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2014);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// review of last lecture: an object created from a class is called an instance

const jay = 'jay';

console.log(art instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);


Person.prototype.calcAge = function () {
      console.log(2037 - this.birthYear);
};

art.calcAge();
console.log(art);
matilda.calcAge();
jack.calcAge();

console.log(art.__proto__);
console.log(art.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(art));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(art);
console.log(matilda);
console.log(art.species, matilda.species);

console.log(art.hasOwnProperty('fName'));
console.log(art.hasOwnProperty('species'));

 */

/////////////////////////////////////////////////////////////////////
///////     007 Prototypal Inheritance and The Prototype Chain //////
/////////////////////////////////////////////////////////////////////

// search and study MDN and document

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

/////////////////////////////////////////////////////////////////////
/////////   008 Prototypal Inheritance on Built-In Objects    ///////
/////////////////////////////////////////////////////////////////////


const Person = function(fName, birthYear) {
   // Instance properties

      // console.log(this);
      this.fName = fName;
      this.birthYear = birthYear;

   // Never do this you should never create a method inside of constructor function
      // this.calcAge = function(){
      //    console.log(2037 - this.birthYear);
      // }
};

const art = new Person('art', 1991);
console.log(art);

// what exactly happen when we call a function with the new Operator
// 1. new {} is created
// 2. function is called, this={}
// 3. {} linked tp prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2014);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// review of last lecture: an object created from a class is called an instance

const jay = 'jay';

console.log(art instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);


Person.prototype.calcAge = function () {
      console.log(2037 - this.birthYear);
};

art.calcAge();
console.log(art);
matilda.calcAge();
jack.calcAge();

console.log(art.__proto__);
console.log(art.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(art));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(art);
console.log(matilda);
console.log(art.species, matilda.species);

console.log(art.hasOwnProperty('fName'));
console.log(art.hasOwnProperty('species'));


console.log(art.__proto__);
// Object.prototype  (top of prototype chain)
console.log(art.__proto__.__proto__);
console.log(art.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 5, 6, 8, 2 ,9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);




