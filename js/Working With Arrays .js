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
/*  
 const currencies = new Map([
   ['USD', 'United States dollar'],
   ['EUR', 'Euro'],
   ['GBP', 'Pound sterling'],
 ]);
 */ 
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////
///////////        08 Creating DOM Elements 💾     /////////
/////////////////////////////////////////////////////////////

const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    // .textContent = 0 we can use this for above but innerHTML is better

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

      // template literal amazing for create html templates
      const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          
          <div class="movements__value">${mov}</div>
      </div>
      `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
                                      // beforeend = the order be inverted
    });
};
displayMovements(account1.movements);



/////////////////////////////////////////////////////////////
///////////              09 CHALLENGE #1            /////////
/////////////////////////////////////////////////////////////

// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
// about their dog's age, and stored the data into an array (one array for each). For 
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
// old.

// Your tasks:

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
// ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the first and the last two dogs actually have 
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
// ages from that copied array (because it's a bad practice to mutate function 
// parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 

// 4. Run the function for both test datasets
// Test data:

// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 











/////////////////////////////////////////////////////////////
///////////          07 PROJECT Bankist App         /////////
/////////////////////////////////////////////////////////////
//  lets take a look at the application bankist

/////////////////////////////////////////////////////////////
///////////      06 forEach With Maps and Sets      /////////
/////////////////////////////////////////////////////////////


/* 
//  Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
}); 

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
});

 */
/////////////////////////////////////////////////////////////
/////////////////    05 Looping Arrays forEach   ////////////
/////////////////////////////////////////////////////////////
// we were start working with bank account data 😎 in this section

/* 
//  the positive values are deposits
//  and the negative values are withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements){
    if (movement > 0){
      console.log(`You deposited ${movement} 😎🤑`);
    }else {
      console.log(`You withdrew ${Math.abs(movement)} 😥😁`);
    }; 
};
// with forEach method
console.log(`------with forEach Methods------`);
movements.forEach(function(movement) {
    if(movement > 0){
      console.log(`You deposited ${movement} 😍🤑`);
    }else {
      console.log(`You withdrew ${Math.abs(movement)} 😑😁`);
    };
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ......
console.log(`--------`);
// now what if we actually needed access to a counter variable here.
for (const [i, movement] of movements.entries()){
  if(movement > 0 ){
    console.log(`Movement ${i + 1}: You deposited ${movement} 😎🤑`);
  }else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} 😥😁`);
  }
}; 
// now what if we actually needed access to a counter variable here do with forEach
console.log(`----ForEach----`);
movements.forEach(function (mov, i, arr){
    if(mov > 0){
      console.log(`Movement ${i + 1}: You deposited ${mov} 🤡🤡🤡`);
    }else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)} 🤠🤠🤠`);
    }
});
// when should you use forEach and when you use the for of loop
// well one fundamental difference between the two of them
// is that you cannot break out of a forEach loop.
// so the continue and break statements do not work in a forEach loop at all
// so instead foreach will always loop over the entire array and there is nothing that
//  you can do about it.so if you need break out of the loop then you have 
//  keep using the for of loop bit other than that it really comes down to your personal 
//  preference.

 */
/////////////////////////////////////////////////////////////
/////////////////       04 The New at Method     ////////////
/////////////////////////////////////////////////////////////

/* 
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
 // with the at method
console.log(arr.at(-1));
//  in methods chaining at is perfect for that
//  for combining multiple methods
// at method also work on the string

console.log('artcode9'.at(0));
console.log('artcode9'.at(-1));

 */
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












