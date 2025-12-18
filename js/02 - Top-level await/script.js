import * as dataModule from './shoppingCart.js';
console.log(dataModule.c1);
dataModule.man('spiderMan');
console.error(`🛳️🛳️🛳️🛳️🛳️🛳️`);
// console.log(card);

// so basically how you use top-level await 
// and so we see that indeed the await keyword is now working outside of an async function 
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data); // now we have 100 data from post each of theme object here 

// 🧧 that calling an async function will always return promise
//     it will not return the actual data  itself

const getLastPost = async function () {
   const res2 = await fetch('https://jsonplaceholder.typicode.com/posts');
   const dataPost = await res2.json();
   // console.warn(dataPost);
   return {title: dataPost.at(-1).title, text: dataPost.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost);

// NOT very clean 👇
// lastPost.then(last => console.log(last));

// so what we can do now is to use top-level await for this 👇
 const lastPost2 = await getLastPost();
 console.log(lastPost2);