console.log(`Exporting data from inside this module 🤖`);

export const c1 = 23;

export function man (create) {
   console.warn(`${create} ❤️❤️`);
}


// console.warn(`🚨🚨 Start fetching USERS!!!`);
//    await fetch('https://jsonplaceholder.typicode.com/users');
// console.warn(`🚨🚨 Finish fetching USERS👥`);

// ⚠️🤖  It's very important to remember that using top-level  await sp await outside
//        of any async function will block the entire module in a way that we really could not  block code execution  before 
//        