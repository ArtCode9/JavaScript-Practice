'use strict';

//  11 - working with arrays

// BANKIST APP

// Data
const account1 = {
   owner: 'Jonas Schmedtmann',
   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
   interestRate: 1.2, // %
   pin: 1111,
 };
 
 const account2 = {
   owner: 'Jessica Davis',
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
   interestRate: 1.5,
   pin: 2222,
 };
 
 const account3 = {
   owner: 'Steven Thomas Williams',
   movements: [200, -200, 340, -300, -20, 50, 400, -460],
   interestRate: 0.7,
   pin: 3333,
 };
 
 const account4 = {
   owner: 'Sarah Smith',
   movements: [430, 1000, 700, 50, 90],
   interestRate: 1,
   pin: 4444,
 };

 const account5 = {
      owner: 'Art Tavanmand',
      movements: [750, 590, 233, 7000, 30000],
      interestRate: 3.2,
      pin: 5555,
};
 
 const accounts = [account1, account2, account3, account4, account5];
 
 // Elements
 const labelWelcome = document.querySelector('.welcome');
 const labelDate = document.querySelector('.date');
 const labelBalance = document.querySelector('.balance__value');
 const labelSumIn = document.querySelector('.summary__value--in');
 const labelSumOut = document.querySelector('.summary__value--out');
 const labelSumInterest = document.querySelector('.summary__value--interest');
 const labelTimer = document.querySelector('.timer');
 
 const containerApp = document.querySelector('.app');
 const containerMovements = document.querySelector('.movements');
 
 const btnLogin = document.querySelector('.login__btn');
 const btnTransfer = document.querySelector('.form__btn--transfer');
 const btnLoan = document.querySelector('.form__btn--loan');
 const btnClose = document.querySelector('.form__btn--close');
 const btnSort = document.querySelector('.btn--sort');
 
 const inputLoginUsername = document.querySelector('.login__input--user');
 const inputLoginPin = document.querySelector('.login__input--pin');
 const inputTransferTo = document.querySelector('.form__input--to');
 const inputTransferAmount = document.querySelector('.form__input--amount');
 const inputLoanAmount = document.querySelector('.form__input--loan-amount');
 const inputCloseUsername = document.querySelector('.form__input--user');
 const inputClosePin = document.querySelector('.form__input--pin');
 
 /////////////////////////////////////////////////
 /////////////////////////////////////////////////
 // LECTURES
 
 const currencies = new Map([
   ['USD', 'United States dollar'],
   ['EUR', 'Euro'],
   ['GBP', 'Pound sterling'],
 ]);
 
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////
/////////////////       04 The New at Method     ////////////
/////////////////////////////////////////////////////////////

//  At method
const arr = [23, 11, 64];
//  if  we wanted to take one of the values out of the array
console.log(arr[0]);
//  with the at methods we do this
console.log(arr.at(0));

// getting last array elements
//  if we don not know the length of the array
console.log(arr[arr.length - 1]);
// with the slice method
console.log(arr.slice(-1));
 



/////////////////////////////////////////////////////////////
/////////////////     03 Simple Array Methods    ////////////
/////////////////////////////////////////////////////////////


/* 
//  with the slice methods we can extract part of any arrays
//  but without changing the original array
let arr = ['a', 'b', 'c', 'd', 'e'];

//  SLICE Methods
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// we can simply create a shallow copy of any array
console.log(arr.slice());
console.log([...arr]);
console.log(arr);

// SPLICE Methods
// it does actually change the original array. so it mutates that array
// console.log(arr.splice(2));
arr.splice(-1); // remove last element 
console.log(`🤣`);
console.log(arr);
//  we position one and extracted or deleted two element
arr.splice(1, 2);
console.log(arr);

//  REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(`😀`);
console.log(arr2);
console.log(arr2.reverse()); // this one is mutate the array
console.log(arr2);

//  CONCAT  >>> does not mutate the original array
const letters = arr.concat(arr2);
console.log(`😘`);
console.log(letters);
// another way for concat array
console.log([...arr,...arr2]);

// JOIN
console.log(letters.join(' - '));
console.log(letters.join(' -$ '));


 */












