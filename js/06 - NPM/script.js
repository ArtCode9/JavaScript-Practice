/*
   Npm stand for Node package Manger and it's both a software on our computer
   and a package repository
   so Why do we actually need a way of managing packages or dependencies in our project ??
   🚨
   Because modern software is a Frankenstein’s monster—and that’s a compliment.
   When you write a project today, you are not writing everything yourself.
   Even a “simple” JavaScript app quietly leans on hundreds or thousands of other people’s code.
   A package manager like NPM exists to keep that tower of borrowed brilliance from collapsing into a screaming heap.
   Here’s the core idea, without ceremony.
   Code reuse is unavoidable. You don’t want to write your own date parser, HTTP client,
   crypto library, bundler, test runner, or linter. Those problems are already solved, often
   better than you’d do on a Tuesday night. NPM lets you pull in those solutions instantly and reliably.
   Versioning is the real villain. Libraries change. Bugs get fixed, new bugs appear,
   APIs shift. Without a dependency manager, “works on my machine” becomes your project motto. 
   NPM locks exact versions so your app behaves the same today, tomorrow, and on your teammate’s laptop
   in a different time zone.
   Dependency trees are deep and weird. One library depends on five others, which depend on twelve more,
   some of which secretly hate each other. Manually managing that graph is like herding caffeinated cats.
   NPM builds and maintains that dependency graph automatically.
   Reproducibility matters more than heroics. When someone clones your project, they should be
   able to run one command and get the same environment you had. package.json plus a lock file is essentially
   a time capsule for your project’s ecosystem.
   Security is another quiet reason. Central registries allow vulnerability scanning, deprecation
   warnings, and rapid patching. It’s not perfect, but it beats copying random JavaScript files from 
   blog posts written in 2014.
   There’s also tooling gravity. Modern JavaScript tooling—bundlers, linters, formatters, test 
   frameworks—assumes a package manager exists. NPM isn’t just about libraries; it’s the plumbing that
   lets the whole ecosystem function.
   So the short, unsentimental truth is this:
   package managers exist because software complexity crossed a threshold where “just manage 
   it yourself” stopped being brave and started being reckless.
   Once you accept that, NPM stops feeling like overhead and starts feeling like gravity—annoying 
   to fight, essential to stand on.

   🚨🚨 installing npm :
   npm -v     >>>    check the cer of npm
   npm init   >>>     for add npm to our project and just press multi enter for default making package
   
   after this npm file create in our project
   now for example we want to install leaflet package
   npm install leaflet       >>>    this install that package
   and after finish it the whole package add to our project folder
   
   do not push node_module on your git because of this 👇👇🚨🚨
   What this warning actually means

LF = line ending used on Linux/macOS
CRLF = line ending used on Windows

Git is saying:
“These files currently use LF, but on your Windows machine I’ll convert them to CRLF when I touch them.”

That’s it. No data loss. No broken project. Just line-ending housekeeping.
Why you’re seeing so many warnings
Because you added node_modules.
node_modules contains:
  thousands of files
  created by other people
  with different line endings

Git is politely screaming because you told it:
      git add .
which means “track everything, including the kitchen sink.”

The real mistake (and this matters)
You should never push node_modules to GitHub.
Not because Git hates it — but because:
It’s huge
It’s reproducible (npm install recreates it)
Every OS handles it slightly differently
It creates noise exactly like this

🚨🚨The correct fix (do this once, forever)
Create a file called .gitignore in your project root
Put this inside it:
      node_modules/

Remove already-tracked node_modules:
      git rm -r --cached node_modules
Commit again:
   git add .
   git commit -m "Ignore node_modules"
   git push
What should be pushed
   package.json ✅
   package-lock.json ✅
   Your own source files ✅

What should never be pushed:
   node_modules ❌
One more thing (optional but clean)
To silence LF/CRLF warnings on Windows:
   git config --global core.autocrlf true

Mental model to keep
   Git tracks your code
   npm manages dependencies
   node_modules is a build artifact, not source
*/


 /*
   one of the most popular Javascript libraries:   🤖👉  lodash  
      is a collection of a ton of useful function for erase 
      objects, functions, dates, and more....
      so it's a lot of that could or should be included in javascript , but are not.

      now we add it to our project : 
         npm i lodash-es
 */

import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

const state = {
   cart:  [
      {product: 'bread', quantity: 5},
      {product: 'pizza', quantity: 5}
   ],
   user: { loggedIn: true} ,  
}
const stateClone = Object.assign({}, state);
// now we user cloneDeep.js before change false happen down below
const stateDeepClone = cloneDeep(state);

// i change true to false 
state.user.loggedIn = false;
console.log(stateClone);

// lock at this clone is still true 😎
console.log(stateDeepClone);   // that's beautiful using npm and package 😍😍😍

// you do not need push your node_module just copy or push your project file 
// then after that your project need all your module use before in it 
// just run " npm i " and when npm reach your package.json file and find out witch package you need
// it will be installed auto and add to your folder of your project 😎