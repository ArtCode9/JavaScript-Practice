/**
 * that parcel actually automatically uses babel to transpile or code.
 * Babel has one job:
translate modern JavaScript into older JavaScript without changing meaning.
Polyfills have one job:
add missing features that translation alone cannot create.

Different tools. Different layers. Same goal: code that survives reality.

0. The mental map (burn this in)

Babel ≠ polyfills

Babel rewrites syntax

Polyfills add missing APIs

Browsers execute JS, not intentions

You target browsers, not versions of JavaScript

One sentence to rule them all at the end. We’ll get there.

1. When do you actually need Babel?

If you write things like:

const add = (a, b) => a + b;


Old browsers don’t understand const or arrow functions.

Babel rewrites this into something ancient but functional.

If you write:

[1, 2, 3].includes(2);


Babel cannot rewrite this into existence.
That method does not exist in old browsers.

That’s where polyfills step in.

2. Install Babel (minimal, sane setup)

From the project root:

npm install --save-dev @babel/core @babel/preset-env


What these are:

@babel/core → the engine

@babel/preset-env → the brain that decides what to transform based on browsers

No plugins yet. No madness yet.

3. Babel config file (the heart)

Create one of these (Parcel supports all):

.babelrc

.babelrc.json

babel.config.json

Use this minimal and correct config:

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.5%, last 2 versions, not dead"
      }
    ]
  ]
}


Translation:

“Support browsers people still use”

“Ignore dead fossils”

“Don’t overcompile into stone tablets”

Parcel will auto-detect this file. No wiring required.

4. How Babel actually works (important intuition)

Babel does static analysis:

Reads your code

Detects syntax the target browsers don’t support

Rewrites it

It does not:

Add globals

Add methods

Add APIs

If the browser doesn’t know what Promise is, Babel can’t invent it.

This is a physics limitation, not a configuration issue.

5. Enter polyfills (the missing pieces)

Polyfills are real JavaScript implementations of missing features.

Examples:

Promise

fetch

Array.prototype.includes

Object.assign

They are runtime helpers, not compile-time tricks.

6. The correct way to polyfill (modern way)

Install core-js:

npm install core-js


Now update Babel config:

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.5%, last 2 versions, not dead",
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}


This is the golden configuration.

What it means:

useBuiltIns: "usage" → only polyfill what you actually use

corejs: 3 → modern, maintained polyfill set

No global pollution. No unnecessary baggage.

7. Where do polyfills get injected?

You do nothing manually.

Babel will:

Scan your code

See what features you used

Inject imports like:

import "core-js/modules/es.promise";


Only when needed. Only for unsupported browsers.

Invisible, automatic, civilized.

8. Browserslist (optional but powerful)

Instead of duplicating targets everywhere, you can define them once in package.json:

{
  "browserslist": [
    "> 0.5%",
    "last 2 versions",
    "not dead"
  ]
}


Now:

Babel

Parcel

PostCSS
all agree on reality.

One truth source. Fewer contradictions.

9. How this fits with Parcel

Parcel:

Finds .babelrc

Runs Babel automatically

Injects polyfills

Bundles output

Optimizes for production

No webpack config.
No loader chains.
No blood sacrifice.

Parcel is the stage manager. Babel is the translator. Core-js is the prosthetics department.

10. Common mistakes (and why they hurt)

❌ Installing @babel/polyfill
Reason: deprecated, removed, cursed
Fix: use core-js + useBuiltIns

❌ Using useBuiltIns: "entry" without understanding it
Reason: floods bundle with everything
Fix: prefer "usage"

❌ Targeting ie 11 casually
Reason: doubles complexity instantly
Fix: do it consciously or don’t do it at all

❌ Thinking Babel makes code faster
Reason: it makes code compatible, not faster
Fix: performance is a different beast

11. Final structure snapshot
js-project/
│
├─ src/
│   ├─ index.html
│   └─ script.js
│
├─ .babelrc
├─ package.json
├─ package-lock.json
└─ .gitignore


That’s it. No config sprawl.

One sentence to remember forever

Babel rewrites syntax, polyfills replace missing reality, and browsers only run what they understand — not what you meant.
 */