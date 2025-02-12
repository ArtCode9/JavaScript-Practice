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


console.log(art.__proto__);
// Object.prototype  (top of prototype chain)
console.log(art.__proto__.__proto__);
console.log(art.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
console.log(`====================`);

const arr = [3, 5, 3, 2, 2 ,9];  // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// check array.prototype.filter() on MDN

Array.prototype.unique = function () {
      return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.log(h1);

console.dir(x => x + 1);
console.dir(typeof (x => x + 1));

*/


/////////////////////////////////////////////////////////////////////
/////////////             009 CHALLENGE #1              /////////////
/////////////////////////////////////////////////////////////////////
//   ⚠⚠⚠⚠⚠⚠   this is very good point read and study it more more

/* 

// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
// 'speed' property. The 'speed' property is the current speed of the car in 
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const Car = function(make, speed) {
      this.make = make;
      this.speed = speed;
};
// add method to Car
Car.prototype.accelerate = function() {
   this.speed += 10;
   console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function() {
   this.speed -= 5;
   console.log(`${this.make} is brake at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const benz = new Car('BENZ', 90);
console.log(bmw, benz);

bmw.accelerate();
bmw.accelerate();
bmw.brake(); 
bmw.accelerate();


 */
/////////////////////////////////////////////////////////////////////
///////////////////////     010 ES6 Classes         /////////////////
/////////////////////////////////////////////////////////////////////

/* 

// class expression
// const PersonCl = class {};
// console.log(typeof PersonCl);


// class declaration
class PersonCl {
   constructor(fName, birthYear){
      this.fName = fName;
      this.birthYear = birthYear;
   }
   
   // create method and will be added to .prototype property
   calcAge(){
      console.log(2037 - this.birthYear);
   }

   greet2(){
      console.log(`Hey ${this.fName} from inside class through prototype`);
   }
};
console.log(typeof PersonCl);

const jessica = new PersonCl('Jessica', 1998);
console.log(jessica);
console.log(typeof jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// add method manually to prototype and also we can add this inside the class like greet2
PersonCl.prototype.greet = function(){
   console.log(`Hey ${this.fName}`);
};
jessica.greet();
jessica.greet2();

// point for work with classes:::
// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

*/
/////////////////////////////////////////////////////////////////////
//////////////////      011 Setters and Getters     /////////////////
/////////////////////////////////////////////////////////////////////

/* 
const account = {
   owner: 'Jonas',
   movements: [200, 530, 120, 300],

   get latest() {
      return this.movements.slice(-1).pop();
   },

   set latest(mov) {
      this.movements.push(mov);
   }
};

// use get
console.log(account.latest);

// use set
account.latest = 50;
console.log(account.movements);

// from last section
class PersonCl {
   constructor(fName, birthYear){
      this.fName = fName;
      this.birthYear = birthYear;
   }
   
   // create method and will be added to .prototype property
   calcAge(){
      console.log(2037 - this.birthYear);
   }

   greet(){
      console.log(`Hey ${this.fName} from inside class through prototype`);
   }


   // setters and getters are very useful for validation
   get age() {
      return 2037 - this.birthYear;
   }
   // Set a property that already exists
   set fullName(name){
      console.log(name + "0000000");
      if(name.includes(' ')) this._fName = name;
      else alert(`${name} is not a full name!`);
   }

   get fullName() {
      return this.fName;
   }
};

const alan = new PersonCl('Alan spark', 1991);
console.log(alan);
alan.calcAge();
console.log(alan.age);
console.log(alan.fullName);


const walter = new PersonCl('Walter', 1965);

 */


/////////////////////////////////////////////////////////////////////
//////////////////        012 Static Methods        /////////////////
/////////////////////////////////////////////////////////////////////

// is the build in Array.from method
// static methods are not available on the instances

// console.log(Array.from(document.querySelector('h1')));


/////////////////////////////////////////////////////////////////////
//////////////////            013 Object.create          ////////////
/////////////////////////////////////////////////////////////////////

/* 
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },
   init(fname, birthYear) {
      this.fname = fname;
      this.birthYear = birthYear;
   },
};

// steven now is empty object and linked to PersonProto object which will be its prototype
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

 */

/////////////////////////////////////////////////////////////////////
//////////////////            014 CHALLENGE #2       ////////////////
/////////////////////////////////////////////////////////////////////

/* 
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
   constructor(make, speed){
      this.make = make;
      this.speed = speed;
   }

   accelerate(){
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed}km/h`);
   }

   brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed}km/h`);
   }

   get speedUS() {
      return this.speed / 1.6;
   }

   set speedUS(speed) {
      this.speed = speed * 1.6;
   }
};


const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

*/

/////////////////////////////////////////////////////////////////////
//////     015 Inheritance Between Classes Constructor Functions ////
/////////////////////////////////////////////////////////////////////

// parent class
const Person = function (firstName, birthYear){
   this.firstName = firstName;
   this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
};


const Student = function(firstName, birthYear, course) {
   Person.call(this,firstName, birthYear);
   this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);


// add method
Student.prototype.introduce = function () {
   console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////