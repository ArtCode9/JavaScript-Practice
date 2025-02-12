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
 Understanding JavaScript Constructor Functions and Instances
Introduction
In JavaScript, constructor functions are a fundamental concept that allows developers
 to create multiple instances of objects with shared properties and methods. 
 This article will delve into a specific example of a constructor function, Person, 
 and explain how it operates, including the creation of instances and the implications
  of using the new operator.

Key Concepts
Constructor Function:
 A special type of function used to create objects. It is typically named with a capital 
 letter to distinguish it from regular functions.
Instance Properties: 
Properties that are unique to each instance of an object created by the constructor function.
The new Operator: 
A keyword that creates a new object, linking it to the constructor's prototype and returning it automatically.
Instanceof Operator: 
A way to check if an object is an instance of a particular constructor function.

Code Structure
The provided code defines a constructor function named Person, 
which takes two parameters: fName (first name) and birthYear. 
Inside the function, instance properties are initialized. 
The code also demonstrates how to create instances of the Person object and check their types.


const Person = function(fName, birthYear) {
   // Instance properties
   this.fName = fName;
   this.birthYear = birthYear;
};

// Creating instances of Person
const art = new Person('art', 1991);
const matilda = new Person('Matilda', 2014);
const jack = new Person('Jack', 1975);

// Checking instances
console.log(art instanceof Person); // true
console.log(jay instanceof Person); // false

Code Examples:
Creating Instances
When we create an instance of Person using the new operator, several steps occur:

A new empty object is created.
The constructor function is called with this referring to the new object.
The new object is linked to the prototype of the constructor function.
The new object is returned automatically.
For example:


const art = new Person('art', 1991);
console.log(art); // Outputs: Person { fName: 'art', birthYear: 1991 }

Instanceof Operator:
The instanceof operator checks whether an object is an instance of 
a specific constructor function. In the code, we see:


console.log(art instanceof Person); // true
console.log(jay instanceof Person); // false
Here, art is an instance of Person, while jay, a string, is not.

Conclusion
In summary, the Person constructor function exemplifies how to create 
objects with shared properties in JavaScript. By utilizing the new operator,
 developers can instantiate multiple objects efficiently. 
 Understanding these concepts is crucial for mastering object-oriented programming in JavaScript, 
 enabling the creation of robust and reusable code structures.
 */



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
   Understanding JavaScript Constructor Functions and Prototypes
Introduction
In JavaScript, constructor functions are a fundamental concept for creating objects. 
They allow developers to define a blueprint for creating multiple instances of an object 
with shared properties and methods. This article will delve into a specific example of 
a constructor function, Person, and explore how it utilizes prototypes to enhance 
functionality and memory efficiency.

Key Concepts
Constructor Functions: 
These are special functions used to create objects. They are typically named with a capital letter 
to distinguish them from regular functions.
Prototypes:
 JavaScript uses prototypes to enable inheritance. 
 When a method is added to a prototype, all instances of that object can access 
 it without needing to create a new copy for each instance.
Instance Properties: 
These are properties that are unique to each instance of an object created from a constructor function.
instanceof Operator: 
This operator checks whether an object is an instance of a specific constructor function.
Code Structure
The provided code defines a Person constructor function that initializes two properties: 
fName (first name) and birthYear. It also demonstrates how to create instances of Person,
 add methods to its prototype, and check for property ownership.

=============================================================
Explanation of the Code
Constructor Function: 
The Person function initializes fName and birthYear as instance properties
. When called with the new keyword, it creates a new object and assigns these properties.

Creating Instances: 
Instances of Person are created using the new keyword, which triggers the constructor function. 
For example, const art = new Person('art', 1991); creates a new Person object with the name 
"art" and birth year 1991.

Prototype Method:
 The calcAge method is added to Person.prototype, allowing all instances 
 to access this method without duplicating it for each instance. 
 This method calculates the age based on the current year (2037 in this case) and the birthYear.

Prototype Checks: 
The code checks the prototype chain using __proto__ and isPrototypeOf to 
confirm that art and matilda are indeed instances of Person.

Species Property: 
A new property, species, is added to the Person prototype, 
which is then accessible to all instances.

Property Ownership:
 The hasOwnProperty method checks whether specific properties belong
 directly to the instance or are inherited from the prototype.

Conclusion
The provided code illustrates the power of constructor functions and prototypes
 in JavaScript. By using these features, developers can create efficient and
  memory-friendly applications. Understanding how to leverage prototypes allows
   for cleaner code and better organization of methods that can be shared across instances. 
   This foundational knowledge is essential for any JavaScript developer looking to build
    scalable and maintainable applications.
 */

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
   Introduction
In this article, we will delve into a JavaScript code snippet that 
demonstrates the use of constructor functions, prototypes, 
and the new operator. This code illustrates how to create objects, 
define methods on prototypes, and explore the prototype chain. 
By the end, you will have a clearer understanding of how these concepts work together in JavaScript.

Key Concepts
Constructor Functions: 
These are special functions used to create objects. 
When invoked with the new keyword, they create a new object and set the context (this) to that object.
Prototypes: 
Every JavaScript function has a prototype property that allows you to add methods and
 properties to all instances of that function.
The new Operator:
 This operator creates a new object, sets its prototype, and returns it.
Instance vs. Prototype Properties: 
Instance properties are unique to each object, while prototype properties are shared among all instances.
Code Structure
The provided code defines a constructor function Person, creates instances of Person,
 and demonstrates the use of prototypes to add methods and properties.
  It also explores the prototype chain and the hasOwnProperty method.


Explanation of Key Sections:
Constructor Function: 
The Person function initializes fName and birthYear as instance properties.
Creating Instances: 
Using new Person(...), we create three instances: art, matilda, and jack.
Prototype Method: 
The calcAge method is added to Person.prototype, allowing all instances to access it.
Species Property: 
A new property species is added to the prototype, demonstrating shared properties among instances.
Prototype Chain: 
The code explores the prototype chain, showing how properties and methods are inherited.
Conclusion
This code snippet effectively illustrates the power of constructor functions and 
prototypes in JavaScript. By understanding how to create objects, define shared methods, 
and navigate the prototype chain, you can leverage these concepts to build more efficient
 and organized code. The use of prototypes not only saves memory but also enhances
  the functionality of your objects, making JavaScript a versatile language for object-oriented programming.
 */



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
    Introduction
In the realm of JavaScript, the use of getters and setters provides a
 powerful mechanism for managing object properties. 
 This article delves into a code snippet that demonstrates 
 how to utilize these features within both an object and a class.
 By the end of this discussion, you will have a clearer understanding of how 
 to implement and leverage getters and setters effectively.

Key Concepts
Getters and Setters: 
These are special methods that allow you to define how properties of an
 object are accessed and modified. Getters retrieve a property value,
  while setters allow you to set a property value.

Object Literals: 
The code begins with an object literal that encapsulates properties 
and methods, showcasing how to manage data within a structured format.

Classes: 
The latter part of the code introduces a class structure,
 which is a blueprint for creating objects.
  It includes methods and properties,
   demonstrating the use of getters and setters within a class context.

Code Structure
The provided code consists of two main parts:

An object named account that contains properties and methods for managing account movements.
A class named PersonCl that encapsulates personal 
information and methods for calculating age and managing full names.  


*/


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
      Introduction
 In JavaScript, prototypal inheritance is a powerful feature that 
 allows objects to inherit properties and methods from other objects.
 This article will delve into a specific code example that demonstrates
 how to create a prototype for a Person object, allowing for the calculation 
 of age based on the birth year. We will explore the structure of the code,
 its key concepts, and provide detailed explanations of how it operates.


Key Concepts
Prototypal Inheritance: 
This is a method by which an object can inherit properties and methods
 from another object. In this case, PersonProto serves as the prototype for other person objects.
Object.create(): 
This method creates a new object with the specified prototype
 object and properties. It is essential for establishing the prototype chain.
Methods: 
The calcAge method calculates the age of a person based on the current year and the birthYear property.
Initialization:
 The init method is used to set the fname and birthYear properties for the person objects.
Code Structure
The code is structured around a prototype object called PersonProto,
 which contains two methods: calcAge and init. The calcAge method
  computes the age of the person, while the init method initializes
   the properties of the person object. Two instances, steven and sarah,
    are created using Object.create() to demonstrate how they inherit from PersonProto.


    Explanation of the Code:
Prototype Definition: 
The PersonProto object is defined with two methods:

calcAge: This method calculates the age by subtracting the birthYear from the year 2037.
init: This method initializes the fname and birthYear properties for the object.
Creating an Object: 
The steven object is created using Object.create(PersonProto), which links it to PersonProto. Initially, steven is an empty object.

Adding Properties: 
The properties name and birthYear are added to the steven object. 
The calcAge method is then called, which calculates and logs Steven's age based on the birth year provided.

Prototype Check: 
The line console.log(steven.__proto__ === PersonProto); 
checks if steven's prototype is indeed PersonProto, returning true.

Creating Another Object:
 The sarah object is created similarly, and the init method is called to set
  her properties. The calcAge method is then invoked to calculate Sarah's age.

Conclusion
This code snippet effectively illustrates the concept of prototypal 
inheritance in JavaScript. By utilizing a prototype object, we can 
create multiple instances that share methods and properties, promoting
 code reusability and organization. Understanding these principles is crucial 
 for any JavaScript developer, as they form the foundation of object-oriented
  programming in the language. Through this example, we see how easily we can
   manage and manipulate object properties and methods, making JavaScript a 
   versatile and powerful programming language.

*/

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


// Introduction:
//  In the realm of JavaScript, understanding how objects and inheritance work is crucial
//  for effective programming. The provided code snippet demonstrates the creation of a 
//  Person object and a Student object that inherits from Person.
//  This example illustrates the use of constructor functions, prototype chaining,
//  and method definitions, showcasing how JavaScript handles inheritance and object-oriented programming.

// Key Concepts:
//  Constructor Functions: 
//  These are special functions used to create objects. 
//  They are invoked with the new keyword, which creates a new object and sets its prototype.

// Prototypal Inheritance: 
//  JavaScript uses prototypes to enable inheritance. 
//  An object can inherit properties and methods from another object through its prototype.

// Method Definition: 
//  Methods can be added to the prototype of a constructor function, 
//  allowing all instances of that constructor to share the same method.

// Instanceof Operator: 
//  This operator checks whether an object is an 
//  instance of a specific constructor or its prototype chain.

// Code Structure
//  The code is structured into two main constructor functions:
//  Person and Student. The Person function initializes the properties of a person,
//  while the Student function extends Person to include additional properties specific to students.
//  The prototype of Student is linked to Person, 
//  allowing Student instances to access methods defined in Person.

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


// Explanation of the Code
// 1. Person Constructor:

// The Person function initializes a new object with firstName and birthYear properties.
// The calcAge method calculates the age based on a fixed year (2037 in this case).

// 2. Student Constructor:

// The Student function calls the Person constructor using
//  Person.call(this, firstName, birthYear) to inherit its properties.
// It also initializes a new property, course, specific to students.

// 3. Prototype Linking:

// Student.prototype = Object.create(Person.prototype); establishes the prototype chain, 
// allowing Student instances to access methods from Person.

// 4. Method Addition:

// The introduce method is added to Student.prototype, enabling instances to introduce themselves.

// 5. Creating an Instance:

// An instance of Student, named mike, is created with specific values.
// The introduce and calcAge methods are called on mike, demonstrating the functionality inherited from Person.

// 6. Prototype Inspection:

// The prototype chain is inspected using __proto__, showing the relationship between mike, Student, and Person.

// 7. Instance Checks:

// The instanceof operator checks if mike is an instance of Student, Person, and Object, confirming the inheritance structure.

// 8. Constructor Reference:

// Finally, the constructor reference for Student.prototype is restored to Student to maintain proper constructor references.

// Conclusion
//  This code snippet effectively illustrates the principles of prototypal 
//  inheritance in JavaScript. By utilizing constructor functions and prototype
//  chaining, we can create a robust object-oriented structure that allows for code 
//  reuse and organization. Understanding these concepts is essential for any 
//  JavaScript developer aiming to write clean, maintainable, and efficient code.



/////////////////////////////////////////////////////////////////////
//////////////////            016 CHALLENGE #3           ////////////
/////////////////////////////////////////////////////////////////////



