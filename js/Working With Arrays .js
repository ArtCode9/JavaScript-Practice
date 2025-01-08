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
      movements: [750, -230, 590, 233, 7000, 30000, -400],
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

const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    // .textContent = 0 we can use this for above but innerHTML is better

    const movs = sort ? movements.slice().sort((a , b) => a -b) : movements;


    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

      // template literal amazing for create html templates
      const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          
          <div class="movements__value">${mov} €</div>
      </div>
      `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
                                      // beforeend = the order be inverted
    });
};

/////////////////////////////////////////////////////////////
/////////         12 Computing Usernames   💾   ////////////
/////////////////////////////////////////////////////////////
 
const createUsernames = function (accs){
  accs.forEach(function (acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);
// console.log(account1.username);
// console.log(account2.username);
// console.log(account3.username);
// console.log(account4.username);
// console.log(account5.username);

/* ============================================== */
// const user = 'John Smith';

// const createUsernames = function (accounts) {
//   const username = user.toLowerCase().split(' ').map(accounts => accounts[0])
//   .join('');
//   return username;
// };
// console.log(createUsernames('Steven Thomas Williams',));

const updateUI = function (acc){
  
  //  Display movements
      displayMovements(acc.movements);
  //  Display balance
      calcDisplayBalance(acc);
  //  Display summary
      calcDisplaySummary(acc);
};

/////////////////////////////////////////////////////////////
//////////////       14 The reduce Method   💾    ///////////
/////////////////////////////////////////////////////////////

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  
  labelBalance.textContent = `${acc.balance} €`;
};



/////////////////////////////////////////////////////////////
/////////    16 The Magic of Chaining Methods   💾    //////
/////////////////////////////////////////////////////////////
  
const calcDisplaySummary = function(acc) {
      const incomes = acc.movements
            .filter(mov => mov > 0)
            .reduce((acc, mov) => acc + mov, 0);
      labelSumIn.textContent = `${incomes} €`;


      const out = acc.movements
            .filter(mov => mov < 0)
            .reduce((acc, mov) => acc + mov, 0);
      labelSumOut.textContent = `${Math.abs(out)} €`;
      
      
      const interest = acc.movements
             .filter(mov => mov > 0)
             .map(deposit => (deposit * acc.interestRate) / 100)
             .filter((int, i, arr) => {
                console.log(arr);
                return int >= 1;
             }) 
             .reduce((acc, inter) => acc + inter, 0);
      labelSumInterest.textContent = `${interest} €`; 
};



/////////////////////////////////////////////////////////////
/////////            18 The find Method    💾   ////////////
/////////////////////////////////////////////////////////////

console.log(accounts);

const acco = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(acco);


/////////////////////////////////////////////////////////////
/////////           19 Implementing Login   💾    ///////////
/////////////////////////////////////////////////////////////

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    
  // Prevent form from submitting  
    e.preventDefault();
  
   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
   console.log(currentAccount);

   if(currentAccount?.pin === Number(inputLoginPin.value)) {
  //   Display Ui and and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
  //  Clear input fields  
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
      updateUI(currentAccount);
   };
});

/////////////////////////////////////////////////////////////
/////////       20 Implementing Transfers      💾   /////////
/////////////////////////////////////////////////////////////

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    
    inputTransferAmount.value = inputTransferTo.value = '';

      if(
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
      ){
          //  Doing the transfer
          currentAccount.movements.push(-amount);
          receiverAcc.movements.push(amount);

           // Update UI
          updateUI(currentAccount);
      }
});
/////////////////////////////////////////////////////////////
///////////      22 some and every   💾          ///////////
/////////////////////////////////////////////////////////////

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

      if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
          // Add movement
          currentAccount.movements.push(amount);

          // Update UI
          updateUI(currentAccount);
      }
      inputLoanAmount.value = '';

});


/////////////////////////////////////////////////////////////
/////////           21 The findIndex Method    💾    ////////
/////////////////////////////////////////////////////////////

btnClose.addEventListener('click', function(e) {
      e.preventDefault();

      if(
          inputCloseUsername.value === currentAccount.username &&
          Number(inputClosePin.value) === currentAccount.pin      
      ){
          const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
          );
          console.log(index);

          //  Delete account
          accounts.splice(index, 1);

          // Hide UI
          containerApp.style.opacity = 0;
      }

      inputCloseUsername.value = inputClosePin.value = '';

});

/////////////////////////////////////////////////////////////
/////////             24 Sorting Arrays       💾  //////////
/////////////////////////////////////////////////////////////
// add in the displaymovement function


let sorted = false;// fix button to do and undo
btnSort.addEventListener('click', function(e){
      e.preventDefault();

      displayMovements(currentAccount.movements, !sorted);
      sorted = !sorted;
});


///////💎🏀💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💎🏀/////////

/////////////////////////////////////////////////////////////
//////      26 Summary Which Array Method to Use     ////////
/////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////
//////  25 More Ways of Creating and Filling Arrays  ////////
/////////////////////////////////////////////////////////////

// in this section we learn how to programmatically create and fill arrays🧨🧨🧨

/* 

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//  empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
// where we want to start fill 
x.fill(1, 3, 5);
// x.fill(1);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6);
console.log(arr);

//  Array.from
const y = Array.from({ length: 7 }, () => 3);
console.log(y); 

// this like a map method calling on empty array 
const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ means we don't use this parameter
console.log(z);
 

labelBalance.addEventListener('click', function () {
      const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', ''))
      );

      console.log(movementsUI);

      const movementsUI2 = [...document.querySelectorAll('.movements__value')];
      console.log(movementsUI2);
});


 */

/////////////////////////////////////////////////////////////
/////////             24 Sorting Arrays          ////////////
/////////////////////////////////////////////////////////////


/* 
// its also mutate the original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// string
const owner = ['Jonas','Art','Adam','Martina'];
console.log(owner);
console.log(owner.sort());
console.log(owner);

// sort method is working on string so for number at first must convert everything to string
// number
console.log(movements);
console.log(movements.sort());

// if return < 0, then A, B (Keep order)
// if return > 0, then B, A (Switch order)
// the array is sorted in an ascending order
      // movements.sort((a,b) => {
      //     if(a > b) return 1;
      //     if(a < b) return -1;
      // });
      //this work the same
movements.sort((a,b) => a - b );
console.log(movements);


// the array is sorted in an descending order
        // movements.sort((a,b) => {
        //   if(a > b) return -1;
        //   if(a < b) return 1;
        // });
        // this work the same
        movements.sort((a,b) => b - a);        
console.log(movements);


 */

/////////////////////////////////////////////////////////////
/////////         23 flat and flatMap     🗺     ////////////
/////////////////////////////////////////////////////////////


/* 
const arr = [[ 1, 2, 3], [ 4, 5], 6, 7, 8];
console.log(arr);
// flat method::: so remove nested arrays and flattened the array
console.log(arr.flat());

const arrDeep = [[[ 1, 2], 3], [ 4, [5, 6]], 7, 8, 9];
console.log(arrDeep);
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));


const accountMovement = accounts.map(acc => acc.movements);
console.log(accountMovement);

const allMovement = accountMovement.flat();
console.log(allMovement);

const overalBalance = allMovement.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// we can do all this stuff with chaining

const overalBalanceChain = accounts
      .map(acc => acc.movements)
      .flat()
      .reduce((acc, mov) => acc + mov ,0);
console.log(overalBalanceChain);

// flatmap combines flat method and map methods like above
// flatmap :::

const overalBalanceFlatmap = accounts
      .flatMap(acc => acc.movements)
      .reduce((acc, mov) => acc + mov ,0);
console.log(overalBalanceFlatmap);

// flatmap only goes one level deep so if you need go deeper than just one level use just flat


 */

/////////////////////////////////////////////////////////////
/////////            22 some and every           ////////////
/////////////////////////////////////////////////////////////

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(`🎄` + movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 5000);
const anyDeposits2 = movements.some(mov => mov > 1500);
console.log(anyDeposits);
console.log(anyDeposits2);

// EVERY 
//  its pretty similar to some methods but the differ between theme
//  is that every only returns true if all elements in the array 
//  satisfy the condition that we pass in.
// so in other word if every elements passes the test on our callback function
//  only then the every methods return true and thats why the method called every in the first place
console.log( `🎁` + movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//  Separate  callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

 */


/////////////////////////////////////////////////////////////
/////////            18 The find Method          ////////////
/////////////////////////////////////////////////////////////


/* 
const menet = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstwithdrawal = menet.find(mov => mov < 0);
console.log(menet);
console.log(firstwithdrawal);

 */


/////////////////////////////////////////////////////////////
/////////            17 CHALLENGE #3             ////////////
/////////////////////////////////////////////////////////////


/* 
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
// as an arrow function, and using chaining!
// Test data:
//  Data 1: [5, 2, 4, 1, 15, 8, 3]
//  Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = ages =>
  ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

 */
/////////////////////////////////////////////////////////////
/////////    16 The Magic of Chaining Methods    ////////////
/////////////////////////////////////////////////////////////

/* 

const vem = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUds = 1.1;
console.log(vem);
// Chaining Methods how it works??
//  PIPELINE
const totalDepositsUSD = vem
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUds)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const totalDepositsUSD2 = vem
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
      // console.log(arr);
      return mov * eurToUds;
    })
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD2);

 */
/////////////////////////////////////////////////////////////
//////////////          15 CHALLENGE #2          ////////////
/////////////////////////////////////////////////////////////

/* 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
// dog ages to human ages and calculate the average age of the dogs in their study.

// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
// ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is 
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
// humanAge = 16 + dogAge * 4

// 2. Exclude all dogs that are less than 18 human years old (which is the same as 
// keeping dogs that are at least 18 years old)

// 3. Calculate the average human age of all adult dogs (you should already know 
// from other challenges how we calculate averages �)

// 4. Run the function for both test datasets
// Test data:
//  Data 1: [5, 2, 4, 1, 15, 8, 3]
//  Data 2: [16, 6, 10, 5, 6, 1, 4]
 
const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18); 

  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  
  //  2 3 .  avg = (2 + 3)/2=2.5 === 2/2+3/2 = 2/5
  
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

 */

/////////////////////////////////////////////////////////////
//////////////       14 The reduce Method        ////////////
/////////////////////////////////////////////////////////////

/*  
const mov = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(mov);

//  accumulator -->  SNOWBALL
const balance = mov.reduce(function (acc, cur, i, arr) {
      console.log(`Iteration ${i}: ${acc}`);
      return acc + cur;
}, 0);
console.log(balance);
// with arrow function
console.log(`----arrow function----`);
const balanceArrow = mov.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

//  now do it with for loop
console.log(`----for loop----`);
let balance2 = 0;
for(const m of mov) balance2 += m;
console.log(balance2);

//  Maximum value
console.log(`---max value----`);
const max = mov.reduce((acc, mov) => {
  if(acc > mov) return acc;
  else  return mov;
}, mov[0]); 
console.log(max);

 */

/////////////////////////////////////////////////////////////
//////////////       13 The filter Method        ////////////
/////////////////////////////////////////////////////////////

/* 
const mov = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = mov.filter(function (m) {
  return m > 0;
});
console.log(mov);
console.log(`Filter method:`);
console.log(deposits);

const depositsFor = []; //  empty array
for(const v of mov) if (v > 0) depositsFor.push(v);
console.log(`for and push method:`);
console.log(depositsFor);


const withdrawals = []; //  empty array
const withdrawal = mov.filter(function (t) {
   return t < 0 ;
});
// with arrow function
// const withdrawal = mov.filter(mov => mov < 0);
console.log(`Filter method:`);
console.log(withdrawal);

for(const v of mov) if (v < 0) withdrawals.push(v);
console.log(`for and push method:`);
console.log(withdrawals); 
*/

/////////////////////////////////////////////////////////////
//////////////        11 The map Method         /////////////
/////////////////////////////////////////////////////////////


/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 999, 876, -1092];

const eurToUds = 1.1;

// const movementsUsd = movements.map(function(mov){
//     return mov * eurToUds;
//     // return 23;
// });

const movementsUsd = movements.map( (mov) => mov * eurToUds);

console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) movementsUsdfor.push(mov * eurToUds);
console.log(movementsUsdfor);

const movementsDescriptions =  movements.map((mov, i) => 

  `Movement ${i + 1}: You ${mov > 0 ? 'deposited🤑' : 'withdrew😋'} ${Math.abs(mov)}`
); 
console.log(movementsDescriptions);

 */


/////////////////////////////////////////////////////////////
//////    10 Data Transformations map, filter, reduce  //////
/////////////////////////////////////////////////////////////
// three array methods map - filter - reduce

// MAP >> applying an operation on all original array element and build new array
// Filter >> return a new array containing the array elements that passed a specified test condition
// Reduce >> all elements down to one single value 

/////////////////////////////////////////////////////////////
///////////              09 CHALLENGE #1            /////////
/////////////////////////////////////////////////////////////

// Coding Challenge #1

/* 
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

//  Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//  Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 

const checkDogs = function (dogsJulia, dogsKate) {
      const dogsJuliaCorrected = dogsJulia.slice();
      dogsJuliaCorrected.splice(0, 1);
      dogsJuliaCorrected.splice(-2);
      // we can also do this with the same result
      // dogsJulia.slice(1, 3);
      console.log(`Julia🐶 ${dogsJuliaCorrected}`);
      const dogs = dogsJuliaCorrected.concat(dogsKate);
      console.log(`All 🐶 ${dogs}`);
      console.log(dogs);
// ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
      dogs.forEach(function(dog, i){
            console.log(dog);
            if(dog >= 3) {
              console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old🐕‍🦺`);
            }else {
              console.log(`Dog number ${i + 1} is still a puppy🐕`);
            }
      });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
checkDogs([19, 6, 16, 18, 7], [1, 15, 9, 10, 14]);


 */
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












