'use strict';

//  Data structures , Modern Operators and Strings

///🚩////////////////////////////////////////////////////////
////////////////// 03 Destructuring Arrays //////////////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   }
};
//          we use Destructuring to retrieve elements from array and
//                    store them into variables

 const [first, second] = restaurant.categories;
 console.log(`1️⃣ this ${first} and ${second}.`);

 const [one, ,two] = restaurant.categories;
 console.log(`2️⃣ This ${one} and ${two}.`);
 console.log(`----------------------`);

 //                       simple example
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

//          if we want to switch the main and the secondary category
let [main, , secondary] = restaurant.categories;
console.log(`3️⃣`,main, secondary);
//          normal way to switching
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//          Destructuring way to switching
[main, secondary] = [secondary, main];
console.log(`4️⃣`,main, secondary);

//             receive 2 return values from a function
console.log(`5️⃣`,restaurant.order(2, 1));

const [starter, mainCourse] = restaurant.order(2, 1);
console.log(`🟩`,starter,` AND `,mainCourse);

//      how do this on nested array

const nested = [2, 4, [5, 6]];
const [i, ,j]= nested;
console.log(`nested🈚`,i, j);
const[d, ,[b, k]] = nested;
console.log(`nested㊙`,d, b, k);

//          default values
const def = [7, 2];
const [p = 1, q = 1, r = 1] = def;
console.log(`default♾`,p, q, r);

 */

//🚩/////////////////////////////////////////////////////////
////////////////// 05 Destructuring Objects /////////////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },

   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to 
         ${address} at ${time}`);
   },
};
// 🟥🟧🟨🟩🟦🟪1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟
//   call function from object and passing in an object of option
restaurant.orderDelivery({
   time: '22:30',
   address: 'Via del sole, 21',
   mainIndex: 2,
   starterIndex: 2
});
//       here we use default values pass to function above
restaurant.orderDelivery({
   address:  'Via del sole, 212',
   starterIndex: 1
});

//       Destructuring data from Objects(should exact same name)
const {name, openingHours, categories} = restaurant;
console.log(`🟥`,name, openingHours, categories);

//          change name of variable to proprty name
const {
   name: restaurantName,
   openingHours: hours,
   categories: tags
} = restaurant;
console.log(`🟦`,restaurantName, hours, tags);

//          set default values similar to array we did before
//          axe does not have default value so its undefined
const { menu = [], starterMenu: starter = [], axe} = restaurant;
console.log(`🟩`,menu, starter, axe);

//          nested object
const {
   fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

//          mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({ a , b } = obj);
console.log(`5️⃣`, a, b);

///////////////////// this section from MDN website//////////////////////
// In assignment patterns, the pattern does not start with a keyword.
// Each destructured property is assigned to a target of assignment —
// which may either be declared beforehand with var or let,
// or is a property of another object — in general,
// anything that can appear on the left-hand side of an
// assignment expression.

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`
// console.log(numbers);
*/

//🚩/////////////////////////////////////////////////////////
///////////////// 06 The Spread operator(...)////////////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },

   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
};


const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];//normal way mix this two
console.log(badNewArr);

const newArr = [3, 4, ...arr];// this is spread operator ...
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Omelet'];
console.log(`💥`,newMenu);

// copy array (shallow copies of arrays)
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array (or more) (merge two arrays)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`🔰 all menu::  ${menu}`);

// Iterable : arrays, string, map, set. NOT object
const str = 'ArtCode';
const letter = [...str];
console.log(`🔺`,letter);
console.log(...str);
// this does'nt work  console.log(`${...str} letter`);

//                 spread operator use in function
// const ingredients = [
//    prompt(`enter ing1 :`),
//    prompt(`enter ing2 :`),
//    prompt(`enter ing3 :`)
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//                object and use spread operator
const newRestaurant = {foundedId: 1998, ...restaurant, founder: 'Art'};
console.log(newRestaurant);

//             copy original object and chang item in copy
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'ARTCODE';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */

//🚩/////////////////////////////////////////////////////////
///////////////   07 Rest Pattern and Parameters   //////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },
   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

//          1) Destructuring

//        spread, because on Right side of =
const arr = [1, 2, ...[3, 4]];

//        REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(`💜` ,a, b, others);
//         REST                                             // spread
const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(`☢`,Pizza, Risotto, otherFood);

//             objects
const {fri, ...weeksDays} = restaurant.openingHours
console.log(weeksDays);
const {sat, ...weeksDay} = restaurant.openingHours
console.log(weeksDay);

//             2) Functions

const add = function(...numbers) {
   console.log(`🟢`,numbers);
   let sum = 0;
   for(let i = 0; i < numbers.length; i++){
      sum += numbers[i];
   }
   console.log(`🟥`,sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const L = [23, 7, 6];
add(...L);


restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('pickels');
 */

//🚩/////////////////////////////////////////////////////////
//////////////   08 Short Circuiting (&& and ||)  ///////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },
   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

//          there are three properties about logical operators::
//       1) use any data types
//       2) return any data types
//       3) short-circuiting => means if the first value is a truthy; return that
console.log(`------ OR ------`);
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);


restaurant.numGuests = 23; // if this don't have value show that 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(`🚻` ,guests1);

const guests2 = restaurant.numGuests || 10;
cons ole.log(guests2);

console.log(`------- AND ------`);
console.log(0 && 'Jonas');
console.log(7 && 'Art');

console.log('Hello' && 23 && null && 'Jonas');

// practical Example
if (restaurant.orderPizza){
      restaurant.orderPizza('mushroom', 'carrot');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'carrot');
 */

/////////////////////////////////////////////////////////////
//////////  09 The Nullish Coalescing Operator(??)  /////////
/////////////////////////////////////////////////////////////

/*
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },
   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */

/////////////////////////////////////////////////////////////
//////////   10 Logical Assignment Operators      ///////////
/////////////////////////////////////////////////////////////

/*
const rest1 = {
   name: 'capri',
   //numGuests: 20
   numGuests: 0
};

const rest2 = {
   name: 'La Piazza',
   owner: 'ARTCODE',
};
//       OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//       Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//       AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);

 */

/////////////////////////////////////////////////////////////
//////////            11 CHALLENGE #1            ////////////
/////////////////////////////////////////////////////////////
// coding challenge
/* 
// football betting app
const game = {
      team1: 'Bayern Munich',
      team2: 'Borrussia Dortmund',
      players: [
         [
            'Neuer',
            'Pavard',
            'Marinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
         ],
         [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'sancho',
            'Gotze',
         ]
      ],
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
         team1:  1.33,
         x: 3.25,
         team2: 6.5
      },
};
// 1️⃣. Create one player array for each team (variables 'players1' and 
// 'players2')
const [players1, players2] = game.players;
console.log(`👽`,players1,`👾`,players2);

// 2️⃣. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
const [gk, ...fieldPlayers] = players1;
console.log(`👻`,gk, fieldPlayers);

// 3️⃣. Create an array 'allPlayers' containing all players of both teams (22 
// players)
const allPlayers = [...players1, ...players2];
console.log(`🐸`,allPlayers);

// 4️⃣. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(`🦍`,players1Final);

// 5️⃣. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')
const { odds: {team1, x: draw, team2} } = game;
console.log(`😃`, team1, `😄`,draw, `😆`, team2);

// 6️⃣. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
const printGoals = function(...playersss) {
   console.log(playersss);
   console.log(`🐅${playersss.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7️⃣. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
team1 < team2 && console.log(`team 1 is more likely to win`);
team1 > team2 && console.log(`team 2 is more likely to win`);
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
// Then, call the function again with players from game.scored

 */

/////////////////////////////////////////////////////////////
//////////   12 Looping Arrays The for-of Loop    ///////////
/////////////////////////////////////////////////////////////

/* 
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
      thu: {
         open: 12,
         close:22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // open 24 hours
         close: 24,
      },
   },
   order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function ({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) { // entries : return index number and the element itself
   console.log(`${i + 1}: ${el}`);
   console.log(i + 1);
   console.log(el);
};
console.log([...menu.entries()]);

 */

/////////////////////////////////////////////////////////////
//////////       13 Enhanced Object Literals      ///////////
/////////////////////////////////////////////////////////////

/* 
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
   [weekDays[1]]: {
      open: 12,
      close:22,
   },
   [weekDays[4]]: {
      open: 11,
      close: 23,
   },
   [weekDays[5]]: {
      open: 0, // open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   // ES6 enhanced object literals
   openingHours,
   // no longer need write like function you can do this with easer syntax
   order(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

 */

/////////////////////////////////////////////////////////////
//////////        14 Optional Chaining (.?)       ///////////
/////////////////////////////////////////////////////////////

/* 
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
   [weekDays[1]]: {
      open: 12,
      close:22,
   },
   [weekDays[4]]: {
      open: 11,
      close: 23,
   },
   [weekDays[5]]: {
      open: 0, // open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   // ES6 enhanced object literals
   openingHours,
   // no longer need write like function you can do this with easer syntax
   order(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};

// we want to know is open on monday and when ? the time?
if(restaurant.openingHours && restaurant.openingHours.mon)
   console.log(restaurant.openingHours.mon.open);

// White optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
      //console.log(day);
      const open = restaurant.openingHours[day]?.open
         ?? 'closed'; // for that day dosent open we set default value after chaining and nullish ??
      console.log(`on ${day} we open at ${open}`);
};

// Methods
console.log(restaurant.order?.(0, 1) ?? 'order method does not exist!');
console.log(restaurant.axe?.(0, 1) ?? 'axe method does not exist!');

// Arrays
const users = [{ name: 'art', email: 'art@code.io'}];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[2]?.name ?? 'User array empty');

// if we want do two line above whitout chainng something like this happen
if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

if(users.length > 1) console.log(users[1].name);
else console.log('user array empty');

 */

/////////////////////////////////////////////////////////////
/////15 Looping Objects Object Keys, Values, and Entries/////
/////////////////////////////////////////////////////////////

/* 
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
   [weekDays[1]]: {
      open: 12,
      close:22,
   },
   [weekDays[4]]: {
      open: 11,
      close: 23,
   },
   [weekDays[5]]: {
      open: 0, // open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   // ES6 enhanced object literals
   openingHours,
   // no longer need write like function you can do this with easer syntax
   order(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

// one way😉
// console.log(`We are open on ${properties.length} days.`);

// for (const day of Object.keys(openingHours)){
//       console.log(day);
// }
// other way can write above code😀
let openStr = `😍We are open on ${properties.length} days: `;
for (const day of properties) {
   openStr += `${day},`;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [Key, value]
for(const [day, { open, close }] of entries) {
   console.log(`😜On ${day} we open at ${open} and close at ${close}`);
}

 */

/////////////////////////////////////////////////////////////
//////////            16 CHALLENGE #2            ////////////
/////////////////////////////////////////////////////////////
// coding challenge
/*  
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from 
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, 
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already 
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them 
// (except for "draw"). Hint: Note how the odds and the game objects have the 
// same property names �
// 4.😎🙄Bonus: Create an object called 'scorers' which contains the names of the 
// players who scored as properties, and the number of goals as the value. In this 
// game, it will look like this:
//       {
//          Gnarby: 1,
//          Hummels: 1,
//          Lewandowski: 2
//       }  //   you sholud number 4 by yourself 🤔🤔

const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players:
   [
         [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
         ],
         [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
         ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
         team1: 1.33,
         x: 3.25,
         team2: 6.5,
      },
};

//   1.
for(const [i, player] of game.scored.entries())
   console.log(`Goal ${i + 1}: ${player}`);

//   2.
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
   average /= odds.length;
   console.log(average);

//   3.
for(const [team, odd] of Object.entries(game.odds)){
   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
   console.log(`Odd of ${teamStr} ${odd}`);
}
//   make string like this:::::
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

//   4. 
// do it your self

 */

/////////////////////////////////////////////////////////////
//////////                 17 Sets               ////////////
/////////////////////////////////////////////////////////////

/* 
const orderSet = new Set([
   'pasta',
   'pasta',
   'pasta',
   'Rissoto',
   'pizza',
   'pizza',
]);
console.log(orderSet);

console.log(new Set('Artc'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('garlic bread');
orderSet.add('garlic bread');
console.log(orderSet);
orderSet.delete('pasta');
console.log(orderSet);
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUniqe = [...new Set(staff)];
console.log(staffUniqe);

console.log(`🧡`,new Set(staff).size);

console.log(new Set('jonassschemdtmann').size);

 */

/////////////////////////////////////////////////////////////
//////////         18 Maps Fundamentals          ////////////
/////////////////////////////////////////////////////////////

/* 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, italy');
rest.set(2, 'Lisbon, portugal');
console.log(rest);

// we can chain set in map
rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).
set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'we closed');

console.log(rest);

console.log(rest.get(1));
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('Categories'));

const time = 21;
console.log(rest.get(time > rest.get('open') &&  time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'),'heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

 */

/////////////////////////////////////////////////////////////
//////////           19 Maps Iteration           ////////////
/////////////////////////////////////////////////////////////

/* 
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
   [weekDays[1]]: {
      open: 12,
      close:22,
   },
   [weekDays[4]]: {
      open: 11,
      close: 23,
   },
   [weekDays[5]]: {
      open: 0, // open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenzem Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   // ES6 enhanced object literals
   openingHours,
   // no longer need write like function you can do this with easer syntax
   order(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery({ starterIndex = 1, mainIndex = 0,
      time = '20:00', address}) {
      console.log(`1️⃣Order received ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered to
         ${address} at ${time}`);
   },
   orderPasta(ing1, ing2, ing3){
      console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
   orderPizza(mainIngredient, ...otherIngredients) {
      console.log(`💲`,mainIngredient);
      console.log(otherIngredients);
   }
};


const question = new Map([
   ['question', 'What is the best programing language in the world?'],
   [1, 'C'],
   [2, 'Java'],
   [3, 'JavaScript'],
   ['correct', 3],
   [true, 'Correct🎉'],
   [false, 'try again']
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for(const [key, value] of question){
   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

 */

/////////////////////////////////////////////////////////////
//////        20 Which Data Structure to Use       //////////
/////////////////////////////////////////////////////////////

// check notebook

/////////////////////////////////////////////////////////////
///////////            21 CHALLENGE #3            ///////////
/////////////////////////////////////////////////////////////
// coding challenge
/* 
// Let's continue with our football betting app! This time, we have a map called 
// 'gameEvents' (see below) with a log of the events that happened during the 
// game. The values are the events themselves, and the keys are the minutes in which 
// each event happened (a football game has 90 minutes plus some extra time). 
// Your tasks: 
// 1. Create an array 'events' of the different game events that happened (no 
// duplicates) 
// 2. After the game has finished, is was found that the yellow card from minute 64 
// was unfair. So remove this event from the game events log. 
// 3. Compute and log the following string to the console: "An event happened, on 
// average, every 9 minutes" (keep in mind that a game has 90 minutes) 
// 4. Loop over 'gameEvents' and log each element to the console, marking 
// whether it's in the first half or second half (after 45 min) of the game, like this: 
// [FIRST HALF] 17: 
// ⚽
//  GOOD LUCK 
// �
// �
//  GOAL 

const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players:
   [
         [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
         ],
         [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
         ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
         team1: 1.33,
         x: 3.25,
         team2: 6.5,
      },
};


const gameEvents = new Map([ 
   [17, '⚽ GOAL'], 
   [36, '🔁 Substitution'], 
   [47, '⚽ GOAL'], 
   [61, '🔁 Substitution'], 
   [64, '🔶 Yellow card'], 
   [69, '🔴 Red card'], 
   [70, '🔁 Substitution'], 
   [72, '🔁 Substitution'], 
   [76, '⚽ GOAL'], 
   [80, '⚽ GOAL'], 
   [92, '🔶 Yellow card'], 
   ]);

//  1. 
const events = [...new Set(gameEvents.values())];
console.log(events);

//  2.
gameEvents.delete(64);
console.log(gameEvents);

//   3.
console.log(
   `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop(); // take lasy part with .pop
console.log(time);
console.log(
   `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//    4.
for(const [min, event] of gameEvents) {
   const half = min <= 45 ? 'First' : 'Second';
   console.log(`[${half} HALF] ${min}: ${event}`);
};

 */

/////////////////////////////////////////////////////////////
///////////   22 Working With Strings - Part 1-2-3-4   //////
/////////////////////////////////////////////////////////////

/* 
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(airline, '✈',plane);

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(`================`);

const checkMiddleSeat = function(seat){
      // B and E are middle seat
      const s = seat.slice(-1);
      if(s === 'B' || s === 'E')
         console.log(`You got the middle seat🎊`);
      else console.log(`You got lucky🎆`);
}
checkMiddleSeat('11b');
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

// fix capitalization in name
const passanger = 'jOnAs' // Jonas
const passangerlower = passanger.toLowerCase();
const passangerCorrect = passangerlower[0].toUpperCase() + passangerlower.slice(1);
console.log(passangerCorrect);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97e';
const priceUS = priceGB.replace('e', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passanger come to boarding door 23. boarding door 23';
console.log(announcement);
console.log(announcement.replace('door', 'Gate'));
console.log(announcement.replace(/door/g, 'Gate'));

// Booleans
const plan = 'A320neo';
console.log(plan.includes('A320'));
console.log(plan.includes('Boeing'));
console.log(plan.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
   console.log('part of the new Airbus');
};

// Practice exercise
const checkBaggage = function(items){
   const baggage = items.toLowerCase()
   
   if(baggage.includes('knife') || baggage.includes('gun')){
      console.log('You are not allowed onboard');
   }else {
      console.log('Welcome aboard!');
   }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Scoks nad animal');
checkBaggage('Got some snacks and a gun for protection');

//    split and join 
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedthmen'.split(' '));

const [firstName, lastName] = 'Jonas Schmedthmen'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('--');
console.log(newName);



const capitalizeName = function (name){
   const names = name.split(' ');
   const namesUpper = [];

   for(const n of names){
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));  // or
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));  // work like same above
   }
   console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith daris');
capitalizeName('jonas schemdtmen');
capitalizeName('alireza tavanmand');


//    padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Art'.padStart(20, '+').padEnd(30, '+'));

const maskCredicard = function (number){
   const str = number + ' ';
   const last = str.slice(-5);
   return last.padStart(str.length, '*');
};
console.log(maskCredicard(64567894));
console.log(maskCredicard(43378456789128));
console.log(maskCredicard('33546832146842237554'));

//       repeat
const message2 = 'Bad weather... all Delayed...';
console.log(message2.repeat(5));
const planesInline = function (n) {
   console.log(`there are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInline(5);
planesInline(3);
planesInline(12);
planesInline(9);

 */

/////////////////////////////////////////////////////////////
///////////             25 CHALLENGE #4                //////
/////////////////////////////////////////////////////////////


// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// 1 Remember which character defines a new line in the textarea 
// 2 The solution only needs to work for a variable made out of 2 words, like a_b
// 3 Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working 
// 4 This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue!
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
   const text = document.querySelector('textarea').value;
   const rows = text.split('\n');
   

   for (const [i, row] of rows.entries()){
      const [first, second] = row.toLowerCase().trim().split('_');
      
      const output = `${first}${second.replace(
         second[0],
         second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
   }
});

 */
// underscore_case  -> underscoreCase
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure

/////////////////////////////////////////////////////////////
///////////                  THE END                   //////
/////////////////////////////////////////////////////////////