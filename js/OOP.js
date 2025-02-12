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
   Understanding JavaScript Classes:
    A Deep Dive into Class Expressions and Declarations
Introduction
In the realm of JavaScript, classes serve as a blueprint for creating objects, 
encapsulating data, and defining behaviors. This article delves into the nuances 
of class expressions and declarations, illustrated through a practical example.
 We will explore how to define a class, instantiate objects, and utilize methods, 
 all while adhering to JavaScript's principles.

Key Concepts
Before we dive into the code, let's clarify some key concepts:

Class Expression:
 A class can be defined using an expression, which can be anonymous or named.
  This allows for more dynamic class creation.
Class Declaration:
 This is a more traditional way to define a class, providing a clear structure and scope.
Prototype: 
JavaScript uses prototypes to enable inheritance and method sharing among instances of a class.
Strict Mode:
 Classes in JavaScript are executed in strict mode by default, which helps catch common coding errors.
Code Structure
The provided code snippet demonstrates both a class expression and a class declaration.
 It defines a PersonCl class with a constructor and methods,
  showcasing how to create instances and interact with




  Explanation of the Code:
The code begins with a class expression, which is logged to confirm its type.
A class declaration follows, defining the PersonCl class with a constructor and two methods.
An instance of PersonCl is created for a person named Jessica, demonstrating how to instantiate a 
      class and access its properties and methods.
The prototype is utilized to add a new method, greet, which can be called on the instance.
The comments at the end highlight important characteristics of classes in JavaScript.
Conclusion
In conclusion, understanding class expressions and declarations 
in JavaScript is crucial for effective object-oriented programming. 
The provided code illustrates how to define a class, create instances,
 and utilize methods, all while adhering to JavaScript's unique characteristics.
  By mastering these concepts, developers can create more organized and maintainable code, 
  leveraging the power of classes to encapsulate functionality and promote reusability.

 */
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

console.log(`=======================================`);

/////////////////////////////////////////////////////////////////////
//////////////////            016 CHALLENGE #3           ////////////
/////////////////////////////////////////////////////////////////////




// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, 
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

/* 

const Car = function (make, speed) {
   this.make = make;
   this.speed = speed;
};

Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function (){
   this.speed -= 5;
   console.log(`${this.make} is brake at ${this.speed}km/h`);
};

const EV = function (make , speed , charge) {
      Car.call(this, make, speed);
      this.charge = charge;
};


// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
   this.charge = chargeTo;
};

EV.prototype.accelerate = function (){
   this.speed += 20;
   this.charge--;
   console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}km/h`);
};

const tesla = new EV('Tesla', 120 , 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

 */



/////////////////////////////////////////////////////////////////////
////////    017 Inheritance Between Classes ES6 Classes     /////////
/////////////////////////////////////////////////////////////////////

/* 
Introduction
In the realm of JavaScript, classes provide a powerful way 
to create objects and manage their behavior. 
The code provided illustrates the implementation of a PersonCl 
class and a derived StudentCl class, showcasing the principles
 of inheritance, encapsulation, and method overriding. 
 This article will break down the code, explaining its structure and functionality in detail.

Key Concepts
Classes and Objects: 
Classes serve as blueprints for creating objects. 
In this code, PersonCl is a base class, while StudentCl extends it,
 inheriting its properties and methods.

Constructor: 
The constructor method initializes new objects.
 It sets the fullName and birthYear properties for instances of PersonCl.

Instance Methods: 
These are functions defined within a class that operate on
 instances of that class. In this code, calcAge and greet are instance methods of PersonCl.

Getters and Setters: 
These allow controlled access to properties. 
The fullName property has a setter that validates the input and a getter that retrieves the value.

Static Methods: 
Unlike instance methods, static methods belong to the class
 itself rather than any object instance. The hey method in PersonCl is an example of this.

Inheritance: 
The StudentCl class inherits from PersonCl, allowing it to use its methods 
and properties while also defining its own.

Code Structure
The code is structured into two classes: PersonCl and StudentCl.

PersonCl:

Contains a constructor to initialize fullName and birthYear.
Includes instance methods for calculating age and greeting.
Implements a getter and setter for fullName.
Features a static method for a generic greeting.

StudentCl:

Inherits from PersonCl using the extends keyword.
Has its own constructor that calls the parent constructor with super().
Introduces a method to introduce the student and overrides the calcAge 
method to provide a customized age calculation.
===================================================================================

Explanation of the Code
PersonCl Class:

The constructor initializes the fullName and birthYear.
The calcAge method calculates the age based on a fixed year (2037).
The greet method outputs a greeting message.
The fullName setter checks if the name contains a space, ensuring it is a full name.
The age getter calculates the age dynamically.
The static method hey can be called without creating an instance of the class.

StudentCl Class:

Inherits from PersonCl and adds a course property.
The introduce method provides a personalized introduction.
The calcAge method overrides the parent method to add a humorous twist to the age calculation.

Creating an Instance:

An instance of StudentCl named martha is created, demonstrating the use of both inherited and new methods.

Conclusion
The provided code exemplifies the power of JavaScript classes,
 showcasing how to create a base class and extend it with additional 
 functionality. By utilizing constructors, instance methods, getters, 
 setters, and static methods, developers can create robust and maintainable
 code structures. Understanding these concepts is crucial for any JavaScript 
 programmer looking to leverage the full potential of object-oriented programming in their applications.

 */

 /* 
class PersonCl {
      constructor(fullName, birthYear){
         this.fullName = fullName;
         this.birthYear = birthYear;
      }

      // Instance methods
      calcAge() {
         console.log(2037 - this.birthYear);
      }

      greet() {
         console.log(`Hey ${this.fullName}`);
      }

      get age() {
         return 2037 - this.birthYear;
      }

      set fullName(name){
         if(name.includes(' ')) this._fullName = name;
         else alert(`${name} is not a full name!`);
      }

      get fullName() {
         return this._fullName;
      }

      // static method
      static hey (){
         console.log(`Hey there 🖐`);
      }
};

class StudentCl extends PersonCl {
   constructor(fullName, birthYear, course){
      // Always needs to happen first!
      super(fullName, birthYear);
      this.course = course;    
   }

   introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
   }

   calcAge(){
      console.log(`I'm ${2037 - this.birthYear} years old, but as a Student i feel more like 
         ${2037 - this.birthYear + 10}`);
   }
};

const martha = new StudentCl('Martha Jones', 2012, 'It Computer');
console.log(martha);
martha.introduce();
martha.calcAge();

 */
console.log(`==================================`);
/////////////////////////////////////////////////////////////////////
/////////    018 Inheritance Between Classes Object.create   ////////
/////////////////////////////////////////////////////////////////////

/* 
Introduction
In JavaScript, prototypal inheritance is a powerful feature that allows 
objects to inherit properties and methods from other objects. 
This article will delve into a specific code example that demonstrates 
how to create objects using prototypes, initialize their properties,
 and utilize inherited methods. We will explore the structure of the code, 
 its key concepts, and how it operates in practice.

Key Concepts
Prototypal Inheritance: 
This is a method by which an object can inherit properties and methods 
from another object. In JavaScript, every object has a prototype, which is also an object.
Object.create(): 
This method creates a new object, using an existing object as the prototype
 of the newly created object.
Method Invocation: 
The way in which methods are called on objects, allowing access to their properties and functionalities.
Code Structure
The provided code consists of two main prototypes:
 PersonProto and StudentProto. The PersonProto serves as a base prototype
  for creating person objects, while StudentProto extends PersonProto to
  create student objects with additional properties and methods.

Breakdown of the Code:
PersonProto: This prototype includes methods for calculating age and initializing properties.
StudentProto: This prototype inherits from PersonProto and adds functionality specific to 
students, such as introducing themselves.

===============================================================================
Explanation of the Code:
PersonProto:

calcAge(): This method calculates the age of a person based on the year 2037 and the birthYear property.
init(firstName, birthYear): This method initializes the firstName and birthYear properties of the object.

Creating a Person Object:

const steven = Object.create(PersonProto);: This line creates a new object steven that inherits 
from PersonProto. Initially, it has no properties.

StudentProto:

const StudentProto = Object.create(PersonProto);: This creates a new prototype for students 
that inherits from PersonProto.
init(firstName, birthYear, course): This method initializes the properties of a student, 
including the additional course property. It uses call to invoke the init method of PersonProto to set the firstName and birthYear.
introduce(): This method allows the student to introduce themselves, 
utilizing the firstName and course properties.

Creating a Student Object:

const jay = Object.create(StudentProto);: This creates a new student object jay that inherits from StudentProto.
jay.init('Jay', 2010, 'Computer Science');: This initializes jay with the specified properties.
jay.introduce();: This calls the introduce method, outputting the student's name and course.
jay.calcAge();: This calls the calcAge method, calculating and outputting the age based on the birthYear.

Conclusion
The provided code effectively demonstrates the principles of prototypal inheritance in JavaScript. 
By utilizing prototypes, we can create a hierarchy of objects that share methods and properties,
 promoting code reusability and organization. Understanding these concepts is crucial for any JavaScript
  developer, as they form the foundation of object-oriented programming in the language. 
  Through this example, we see how inheritance can be leveraged to create more complex and 
  functional objects, enhancing the capabilities of our applications.


*/

/* 
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },

   init(firstName, birthYear){
      this.firstName = firstName;
      this.birthYear = birthYear;
   },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
      PersonProto.init.call(this, firstName, birthYear);
      this.course = course;
};

StudentProto.introduce = function (){
   console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay' , 2010, 'Computer Science');
jay.introduce();
console.log(jay)
jay.calcAge();

 */

/////////////////////////////////////////////////////////////////////
//////////////          019 Another Class Example        ////////////
/////////////////////////////////////////////////////////////////////

/* 
 Understanding the JavaScript Account Class Implementation
Introduction
In this article, we will delve into a JavaScript class named Account,
 which encapsulates the functionality of a bank account. 
 This class allows for basic operations such as depositing and withdrawing
 funds, as well as requesting loans. We will explore the key concepts behind
  the class, its structure, and provide code examples to illustrate its functionality.

Key Concepts
The Account class is designed to represent a bank account with several key features:

Constructor: 
Initializes the account with an owner's name, currency type, and a personal 
identification number (PIN).
Movements: 
An array that tracks all deposits and withdrawals made to the account.
Locale: 
Captures the user's locale using the browser's language settings.
Public Methods: 
Includes methods for depositing, withdrawing, approving loans, and requesting loans.
Code Structure


The structure of the Account class is straightforward:

Properties: 
The class has properties for the account owner, currency, PIN, movements, and locale.
Methods: 
It includes methods for depositing and withdrawing money, 
approving loans, and requesting loans.  
=============================================================

Explanation of Code Examples
Creating an Account:

const acc1 = new Account('Jonas', 'EUR', 1111);
creates a new account for the owner "Jonas" with the currency "EUR" and 
a PIN of 1111. The constructor logs a welcome message to the console.

Depositing Funds:

acc1.deposit(290); adds 290 to the movements array, indicating a deposit.
Withdrawing Funds:

acc1.withdraw(145); effectively calls the deposit method with a 
negative value, thus subtracting 145 from the account.
Requesting a Loan:

acc1.requestLoan(1000); checks if the loan can be approved. 
If approved, it deposits 1000 into the account and logs a message indicating the loan approval.
Logging Account Details:

The final console.log statements display the account details, 
including the PIN, movements, and the deposit method itself.
Conclusion
The Account class in JavaScript provides a
 simple yet effective way to manage bank account operations
 . By encapsulating properties and methods, it allows for a 
 clean interface for users to interact with their accounts. 
 This implementation serves as a foundational example of 
 object-oriented programming in JavaScript, demonstrating 
 how to create and manage complex data structures effectively.
  As you continue to explore JavaScript, consider how you can 
  expand upon this class to include additional features such as 
  transaction history or interest calculations.

 */

class Account {
   constructor(owner, currency, pin){
      this.owner = owner;
      this.currency = currency;
      // protected property
      this._pin = pin;
      this._movements = [];

      this.locale = navigator.language;

      console.log(`Thanks for opening an account, ${owner}`);
   }

   // public interface
   getMovements() {
      return this._movements;
   }

   deposit(val){
      this._movements.push(val);
      return this;
   }

   withdraw(val){
      this.deposit(-val);
      return this;
   }

   _approveLoan(val){
      return true;
   }

   requestLoan(val){
      if(this._approveLoan(val)){
         this.deposit(val);
         console.log(`Loan approved.`);
         return this;
      }
   }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//   this will protected so cant effected from outside
//  acc1._movements.push(250);
//  acc1._movements.push(-149);

// we do instead like this
acc1.deposit(290);
acc1.withdraw(145);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log('😂' + acc1.getMovements());

console.log(acc1);
console.log(acc1._pin);
console.log(acc1._movements);
console.log(acc1.deposit);
 
/////////////////////////////////////////////////////////////////////
////   020 Encapsulation Protected Properties and Methods   /////////
/////////////////////////////////////////////////////////////////////
// all change for this section on last section 19 all code (protected)

/////////////////////////////////////////////////////////////////////
////////   021 Encapsulation Private Class Fields and Methods   /////
/////////////////////////////////////////////////////////////////////

/* 
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

class Account2 {
   // 1. Public fields (instance)
   locale = navigator.language;
   
   // 2. Private fields (instance) 
   #movements = [];
   #pin; 

   // 3. Public methods

   static helper(){
      console.log(`Helper`);
   }

   // 4. Private methods
   #approveLoan(val){
      return true;
   }
};
 */

/////////////////////////////////////////////////////////////////////
//////////////       022 Chaining Methods                ////////////
/////////////////////////////////////////////////////////////////////

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

/////////////////////////////////////////////////////////////////////
///////////           024 CHALLENGE #4                ///////////////
/////////////////////////////////////////////////////////////////////

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);


/* 
   JavaScript Class Implementation for Car and Electric Vehicle
Introduction
In this article, we will explore a JavaScript implementation of a
class structure that models a traditional car and an electric vehicle (EV).
 The code demonstrates the use of classes, inheritance, private fields, 
 and method overriding, providing a clear example of object-oriented programming
  in JavaScript.

Key Concepts
Classes: 
JavaScript classes are syntactical sugar over JavaScript's existing prototype-based 
inheritance, allowing for a more intuitive way to create objects and handle inheritance.
Constructor:
 The constructor method is a special method for creating and initializing an 
 object created with a class.
Inheritance: 
The extends keyword allows one class to inherit the properties and methods
 of another class.
Private Fields: 
The # symbol denotes private fields, which are only accessible within 
the class they are defined in.
Method Overriding: 
Subclasses can override methods from their parent class to provide 
specialized behavior.
Code Structure
The code consists of two classes: 
CarCl and EVCl. 
The CarCl class serves as a base class for traditional cars,
 while the EVCl class extends CarCl to represent electric vehicles.
  Each class contains methods for accelerating, braking, and managing speed,
   with the EVCl class adding functionality specific to electric vehicles.
   ==========================================================



   Explanation of the Code
CarCl Class: 
This class initializes a car with a make and speed.
 It includes methods to accelerate and brake, as well as
  getters and setters for converting speed between kilometers and miles.
EVCl Class: 
This class extends CarCl and introduces a private 
field for charge. It overrides the accelerate method to increase 
speed more significantly and decrease the charge with each acceleration. 
The chargeBattery method allows setting the charge level.
Instance Creation: 
An instance of EVCl named rivian is created,
 and various methods are called in a chain to demonstrate the
  functionality of the class.
Conclusion
The provided JavaScript code effectively demonstrates the 
principles of object-oriented programming through the use 
of classes, inheritance, and method overriding. By modeling a 
traditional car and an electric vehicle, it showcases how to
 encapsulate behavior and state within objects, making the code
  modular and reusable. This structure not only enhances readability 
  but also allows for easy maintenance and extension in future developments.
 */