'strict mode';
///////////////////////////////////////////////////////////////////////////////////////////

/* function calcAverage (s1, s2 ,s3){
  const avg = (s1 + s2 + s3)/3;
  return avg;
}

function checkWinner(avgDolphins , avgKoalas){
      if (avgDolphins >= 2 * avgKoalas){
         return `Dolphins win (${avgDolphins} Vs. ${avgKoalas}🐶🦄)`;
      }else if(avgKoalas >= 2 * avgDolphins){
         return `Koalas win (${avgKoalas} Vs. ${avgDolphins})🧨🎇`;
      }else {
        return `No team wins...`;
      }
}

const scoreDolphins  = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins);
console.log(scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));


const scoreDolphins2  = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

console.log(scoreDolphins2);
console.log(scoreKoalas2);
console.log(checkWinner(scoreDolphins2, scoreKoalas2)); */

///////////////////////////////////////////////////////////////////////////////////////////
/////🧨 this below code belong to the course example but above solve is made by me🧨 /////
///////////////////////////////////////////////////////////////////////////////////////////

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
 */

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/* const friends = ['Hallo', 'Hexon', 'DIdi', 'Dodo'];
console.log(friends);

const firstName = 'Art';
const ArtDes = [firstName, 'Tavanmand', 1991, friends];
console.log(ArtDes);
console.log(ArtDes.length );
*/

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Array exercise////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/*
const  calcAge = function (BY) {
  return 2024-BY;
}

const Years = [1990, 1967, 2018, 2010, 2002];

const age1 = calcAge(Years[0]);
const age2 = calcAge(Years[1]);
const age3 = calcAge(Years[Years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(Years[0]), calcAge(Years[1]), calcAge(Years[Years.length - 1])];
console.log(ages);
 */
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/* const calcTips = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const  bills = [125, 555, 44];
const tip = [calcTips(bills[0]),calcTips(bills[1]),calcTips(bills[2])];

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills ,tip, total); */
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/* const jonas = {
  firstName: 'jonas',
  lastName: 'Art',
  birthYear: 1991,
  job: 'Developer',
  friends: ['me', 'mom','myself'],

  claAge: function(birthYear){
    return 2024 - this.birthYear;//or 1991 can descrese of 2024
  },
  motive: function(){
    return `this is repeat in my mind ::${this.job}`;
  }
};

const knowWhat = prompt('what do you want know about jonas??');

if(jonas[knowWhat]){
  console.log(jonas[knowWhat]);
}else {
  console.log(`please select correct property form jonas object!!!`);
}

jonas.location = 'Holland';
jonas['hobby'] = 'move';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} and best friends is ${jonas.friends[1]}`);

console.log(jonas.claAge(this.birthYear));
console.log(jonas['claAge'](1991));
console.log(jonas.motive());
 */
///////////////////////////////////////////////////////////////////////////////////////////
// check this and solve array problem in object you created yourself🧨🧨🧨 >>>> SOLVED 😎
/* const art = {
    firstName: 'art',
    lastNAme: 'arta',
    job: 'Developer',
    birthYear: 1999,
    dude: ['ghazal', 'mehran', 'amir'],
    paleD: function(){
        for(let i = 0; i < 3; i++){
          return this.dude;
        }
    },
    ability: function(a){
        const b = Number(a);

        if(b === 2){
          console.log(`He is trying to double skill in DEV`);
        }else if(b === 3){
          console.log(`he is awsome on JAVASCRIPTS`);
        }else {
          console.log(`He is resting do not bother him`);
        }
    }
}
const num = prompt('Enter number::');
console.log(`${art.firstName} ${art.lastNAme} born in ${art.birthYear} and he is ${art.job}
and also he ${art['ability'](num)} and his enemy ${art.paleD(art.dude)}`);
  */
///////////////////////////////////////////////////////////////////////////////////////////
/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
};
// model 1 can be like this below code
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`);
}else if(mark.bmi < john.bmi){
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}else {
    console.log(`Both are equal!!!!!!!!!`);
} */
/*
// model 2 can be like this below code

//const markbmi = mark.calcBMI();
//const johnbmi = john.calcBMI();

//console.log(markbmi, johnbmi);

// if(markbmi > johnbmi){
//     console.log(`${mark.fullName}'s BMI (${markbmi}) is higher than ${john.fullname}'s (${johnbmi})`);
// }else if(markbmi < johnbmi){
//     console.log(`${john.fullname}'s BMI (${johnbmi}) is higher than ${mark.fullName}'s (${markbmi})`);
// }else{
//     console.log(`Both are equal!!!!!!!!!`);
// }; */
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//          loop section try
/*
for (let rep = 1; rep <= 30; rep++){
    console.log(`I lOVE YOU ❤💙💜❤ ${rep}`);
} */

/* const dude = ['per1', 'per2', 1992 ,'per3',[1, 2,3]];

const types = [];

for(let i = 0; i < dude.length; i++){
  console.log(dude[i], typeof dude[i]);

  //filling another array in to way
  // types[i] = typeof dude[i];
  types.push(typeof dude[i]);
}

console.log(types);

 */
/* const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037-years[i]);
}
console.log(ages); */

///////////////////////////////////////////////////////////////////////////////////////////
/* const Person1 = {
    dude: ['per1', 'per2', 'per3'],
    enemy: function(){
            for(let i = 0; i < 3; i++){
              console.log(Person1.dude[i]);
            }
        }
}
console.log(`${Person1.enemy()}`); */

 /* const Person1 = {
    dude: ['per1', 'per2', 'per3'],
    enemy: function(){
            for(let i = 0; i < 3; i++){
              return this.dude;
            }
        }
}
console.log(`${Person1.enemy()}`); */
///////////////////////////////////////////////////////////////////////////////////////////
/* for(let exe = 1; exe < 5; exe++){
    console.log(`------Starting Lunching ${exe} 🕛💛`);

    for(let rep = 1; rep < 4; rep++){
        console.log(`Lunch ${exe} ::  spaceship ${rep} 💨`);

        for(let sat = 1; sat < 3; sat++){
          console.log(`to planet ${sat} 🏵`);
        }
    }
}
 */
///////////////////////////////////////////////////////////////////////////////////////////
// This  is while loop

/*
let rep = 1;
while(rep <=9){
    console.log(`🤣---Say may name ${rep} Times💫`);
  rep++;
} */

/*
 let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`DICE ONE is ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6 )console.log(`6 is coming loop stop`);
}
 */
///////////////////////////////////////////////////////////////////////////////////////////
/* const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills =  [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++){
      const tip = calcTip(bills[i]);
      tips.push(tip);
      total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      //sum = sum + arr[i];
      sum += arr[i];
    }
    //console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));
 */
///////////////////////////////////////////////////////////////////////////////////////////
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// this function find max value in array🐱‍🏍
const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){

      //you can put temp[i] in a var and use in if like >>> const curTemp = temps[i];
          if(typeof temps[i] !== 'number') continue
          ;
          if(temps[i] > max) max = temps[i];
          if(temps[i] < min) min = temps[i];
    }
    console.log(`this is max number::${max}`);
    console.log(`this is min number::${min}`);
    const x = max - min;
    console.log(`this is defer::: ${x}`);
}
calcTempAmplitude([3,7,9,80,23,35,68,345,6]);
calcTempAmplitude(temperatures);
 */
///////////////////////////////////////////////////////////////////////////////////////////
/*
// now this function get to value form two differnt array and do the same stuff on it
const mixToArray = function(t1 , t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
      const curTemp = temps[i];
      if(typeof curTemp !== 'number') continue;

      if(curTemp > max) max = curTemp;
      if(curTemp < min) min = curTemp;
    }
    console.log(`this is max::${max} and this is min::${min}`);
    const x = max -min;
    console.log(`dif is ::: ${x}`);
}
mixToArray([4,2,5,6], [45,56,2,34]);
 */
///////////////////////////////////////////////////////////////////////////////////////////
// in this part we try lvl up debug skill
/* const measurekelvin = function() {
    const measurment = {
      type: 'temp',
      unit: 'celsius',
      value: prompt(`Degrees celsius:`)
    };
    console.log(measurment);
    console.table(measurment);
    // this value is string you should convert it to number then use it
    console.log(measurment.value);
    //console.warn(measurment.value);
    //console.error(measurment.value);

    const kelvin = Number(measurment.value) + 273;
    return kelvin;
};
console.log(measurekelvin());
 */
///////////////////////////////////////////////////////////////////////////////////////////
/* 
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);

const printForecast = function(arr){
      let str = '';
      for(let i = 0; i < arr.length; i++ ){
          str += `${arr[i]}c in ${i + 1} days...`;
      }
      console.log('...' + str);
};
printForecast(data2);
 */
///////////////////////////////////////////////////////////////////////////////////////////
//scoping practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge(){
      const output = `${firstName}You are ${age}, born in ${birthYear}`;
      console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'jonas';
calcAge(1991);
console.log(age); */

///////////////////////////////////////////////////////////////////////////////////////////




























