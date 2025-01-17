'use strict';
// 12 - Numbers, Dates, Intl and Timers [PROJECT]


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
   owner: 'Jonas Schmedtmann',
   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
   interestRate: 1.2, // %
   pin: 1111,
 
   movementsDates: [
     '2019-11-18T21:31:17.178Z',
     '2019-12-23T07:42:02.383Z',
     '2020-01-28T09:15:04.904Z',
     '2020-04-01T10:17:24.185Z',
     '2020-05-08T14:11:59.604Z',
     '2020-01-11T17:01:17.194Z',
     '2025-01-08T23:36:17.929Z',
     '2025-01-10T10:51:36.790Z',
   ],
   currency: 'EUR',
   locale: 'pt-PT', // de-DE
 };
 
 const account2 = {
   owner: 'Jessica Davis',
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
   interestRate: 1.5,
   pin: 2222,
 
   movementsDates: [
     '2019-11-01T13:15:33.035Z',
     '2019-11-30T09:48:16.867Z',
     '2019-12-25T06:04:23.907Z',
     '2020-01-25T14:18:46.235Z',
     '2020-02-05T16:33:06.386Z',
     '2020-04-10T14:43:26.374Z',
     '2020-06-25T18:49:59.371Z',
     '2020-07-26T12:01:20.894Z',
   ],
   currency: 'USD',
   locale: 'en-US',
 };
 
 const accounts = [account1, account2];
 
 /////////////////////////////////////////////////
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
 // Functions

 const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // BUG in video:
  // displayMovements(currentAccount.movements, !sorted);

  // FIX:
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
 
 ////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////
 // LECTURES

//////////////////////////////////////////////////////////////////////
///////////       14 Implementing a Countdown Timer         //////////
//////////////////////////////////////////////////////////////////////






 
//////////////////////////////////////////////////////////////////////
///////////    😋13 Timers setTimeout and setInterval😋   //////////
//////////////////////////////////////////////////////////////////////

/* 

// set timeout::
setTimeout(() => console.log(`Here is Your Pizza 🍕`), 3000);
console.log(`Waiting....`);

setTimeout((ing1, ing2) =>
  console.log(`Here is Your Pizza with ${ing1} and ${ing2} 🍕`),
  4000,
  'olives2',
  'spinach2'
);
console.log(`Waiting2....`);

// cancel timeout with condition
const ingredients = ['olives3', 'spinach3'];
const pizzaTimer = setTimeout((ing1, ing2) =>
    console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    6000,
    ...ingredients
);
console.log(`Third Pizaa order....`);
//  now this not come in console 
if(ingredients.includes('spinach3')) clearTimeout(pizzaTimer);

//  set Interval
// setInterval(function (){
//     const now = new Date();
//     console.log(now);
// }, 3000);


 */


//////////////////////////////////////////////////////////////////////
///////////       12 Internationalizing Numbers (Intl)    ////////////
//////////////////////////////////////////////////////////////////////


/* 
const num = 3884764.23;
const num2 = 546534.897;
const num3 = 6444.453;

const opt = {
    style: 'unit',
    unit: 'mile-per-hour'
};
const opt2 = {
    style: 'unit',
    unit: 'celsius'
};
const opt3 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR'
};

// Basic formating
console.log('US:      ', new Intl.NumberFormat('en-US', opt).format(num));
console.log('GERMANY: ', new Intl.NumberFormat('de-DE', opt).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', opt).format(num));
console.log(
            navigator.language,
            new Intl.NumberFormat(navigator.language, opt).format(num)
);

console.log('GERMANY: ', new Intl.NumberFormat('de-DE', opt2).format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, opt2).format(num2)
);

console.log('US:      ', new Intl.NumberFormat('en-US', opt3).format(num3));
console.log('GERMANY: ', new Intl.NumberFormat('de-DE', opt3).format(num3));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, opt3).format(num3)
);

 */

//////////////////////////////////////////////////////////////////////
///////////       11 Internationalizing Dates (Intl)    💾  //////////
//////////////////////////////////////////////////////////////////////
/* const now2 = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'long',
};
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now2);
 */
//////////////////////////////////////////////////////////////////////
///////////            10 Operations With Dates           ////////////
//////////////////////////////////////////////////////////////////////


/* 
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

 */


//////////////////////////////////////////////////////////////////////
///////////        09 Adding Dates to Bankist App   💾   /////////////
//////////////////////////////////////////////////////////////////////
//  working on all date section of appllication


//////////////////////////////////////////////////////////////////////
///////////              08 Creating Dates                ////////////
//////////////////////////////////////////////////////////////////////

/* 
// this is really important in real world application
// the fundamental of date

// create date
const now = new Date();
console.log(now);

console.log(new Date('Jan 11 2025 01:37:51'));
console.log(new Date('December 24, 2015'));
console.log(`-----account section------`);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

*/

/* 
//  working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142285780000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

 */
//////////////////////////////////////////////////////////////////////
///////////              07 Working with BigInt           ////////////
//////////////////////////////////////////////////////////////////////


/* 
// this is the biggest number js can represent
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);


// now if need bigger number than this
// use n  at end to make regular number to big int
console.log(4531257469887923908012937n);
console.log(BigInt(4531257));

// operation with big int
console.log(10000n + 10000n);
console.log(12956438476876329487234n * 10000000n);
// console.log(Math.sqrt(16n));  <<<< this does not work

const huge = 2334647452468657n;
const num = 23;
console.log(huge * BigInt(num));

// Exception
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === '20');

console.log(huge + 'is REALLY big!!!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

 */

//////////////////////////////////////////////////////////////////////
///////////               06 Numeric Separators            ///////////
//////////////////////////////////////////////////////////////////////


/* 
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));

 */


//////////////////////////////////////////////////////////////////////
///////////             05 The Remainder Operator  %       ///////////
//////////////////////////////////////////////////////////////////////

/* 
// what is the remainder operator?
// simply returns the remainder of a division >>> %
console.log(5 % 2);
console.log(5 / 2);// 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3);// 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2); 

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

 */


labelBalance.addEventListener('click', function(){
    [...document.querySelectorAll('.movements__row')].
    forEach(function(row, i){
          // 0, 2, 4, 6
          if( i % 2 === 0) row.style.backgroundColor = 'pink';
          // 0, 3, 6, 9
          if( i % 3 === 0) row.style.backgroundColor = 'lightblue';
    });
});



//////////////////////////////////////////////////////////////////////
///////////               04 Math and Rounding             ///////////
//////////////////////////////////////////////////////////////////////

/* 

// square root
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(3, 23, 6, 8, 12, 7));
console.log(Math.max(3, '23', 6, 8, 12, 7));
console.log(Math.max(3, '23p', 6, 8, 12, 7));

console.log(Math.min(3, 23, 6, 8, 12, 7));

// this how we calculate the area of a circle with that radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => 
      Math.floor(Math.random() * (max - min) + 1) + min;
//  random 0...1  -> 0...(max - min) -> min...max
console.log(randomInt(15, 23));
console.log(randomInt(18, 83));

// rounding integers
console.log(Math.trunc(23.12));

console.log(Math.round(56.3));
console.log(Math.round(56.9));

console.log(Math.ceil(88.9));
console.log(Math.ceil(88.3));

console.log(Math.floor(44.4));
console.log(Math.floor(44.9));
//  all of the above method do type coercion
console.log(Math.floor('44.9'));

//  with minus number
console.log(`----with minus number-----`)
console.log(Math.trunc(-23.12));
console.log(Math.floor(-23.12));// floor is good for work with negative

//rounding decimal
// toFixed always return string 
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.346).toFixed(2));
console.log(+(2.346).toFixed(2));

//  work on the bankist project >>>> 💾

 */


//////////////////////////////////////////////////////////////////////
///////////        03 Converting and Checking Numbers    /////////////
//////////////////////////////////////////////////////////////////////


/* 
// that a bug for javascript 
console.log((1 / 10) + (2 / 10) );
console.log((1 / 10) + (2 / 10) === 0.3);

// make number in two case (convert string to number conversion)
console.log(Number('23'));
// or
console.log(+'23');

// Parsing > pars a number from string > js automatically try to
//           figure out the number and the string must start with number if 
//            want this work
console.log(Number.parseInt('63px'));
console.log(Number.parseInt('px55'));
//  also can accept second argument is called = regex
console.log(Number.parseInt('63px', 10));
console.log(Number.parseInt('63px', 2));
console.log(Number.parseInt('px55', 10));

console.log(Number.parseFloat('2.5rem')); // parseFloat is very good for working with css value
console.log(Number.parseInt('2.5rem')); // only get the integer part
//  white space would not effect at all
// also this all global function we can called without Number
console.log(parseFloat('22.5rem')); // but this old school js now we use Number😎

// check a value is Not A Number or NAN
console.log(Number.isNaN(20));
console.log(Number.isNaN('23'));
console.log(Number.isNaN(+'26x'));
console.log(Number.isNaN(23/ 0));


// the best way of checking a value is a number
// this very useful and important😍😍😍
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'26x'));
console.log(Number.isFinite(23 / 0));

// 
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

 */


////////////////////////////////////////////////////