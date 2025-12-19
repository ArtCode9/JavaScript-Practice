// webpack as well the most popular bundler and especially in react world.
// let's find out how to use parcel
/*
   so parcel is basically just another build tool which is also on npm .
   and we use npm to install it.
   ```
      npm i parcel --save-dev
   ```
      
 */

/**
 * js-project/
│
├─ src/
│   ├─ index.html
│   └─ script.js
│
├─ package.json
├─ package-lock.json
└─ .gitignore
----------------------------
2. Initialize npm (once)
   From the project root:
   ```
   npm init -y             <<<<   this Creates package.json.
   ```
   Important rule
❌ Do NOT add "main" for browser apps
"main" is for libraries, not Parcel apps.
----------------------------
3. Install Parcel (locally, dev tool)
      npm install --save-dev parcel
Why dev dependency?
Because Parcel builds your app — it’s not part of the app itself.
-----------------------------
4. Minimal package.json (correct version)
            {
            "name": "js-project",
            "version": "1.0.0",
               "scripts": {
                  "start": "parcel src/index.html",
                  "build": "parcel build src/index.html"
               }
            }
Nothing else needed.
Less config = fewer demons.
-----------------------------------
5. HTML entry point (non-negotiable)
src/index.html
                        <!DOCTYPE html>
                           <html lang="en">
                           <head>
                              <meta charset="UTF-8" />
                              <title>Parcel App</title>
                           </head>
                           <body>
                              <h1>It works</h1>
                              <script src="./script.js"></script>
                           </body>
                        </html>
Parcel always starts from HTML for apps.
----------------------------
6. JavaScript file
src/script.js
      console.log("Parcel is running");
That’s enough.
---------------------------
7. Run the dev server (the right way)
         npm run start
Parcel will:
start a dev server
pick a port (usually 1234)
open the browser automatically
Open manually if needed: 
http://localhost:1234
--------------------------------
8. Build for production
      npm run build
Creates:
         dist/
Optimized, bundled, ready to deploy.
----------------------------------
9. .gitignore (mandatory)
      node_modules/
      dist/
      .parcel-cache/
Never commit build output or dependencies.
-------------------------------
Common Errors You Hit (and the fix burned in):
❌ parcel is not recognized

Cause: Parcel is local
Fix:

npm run start

or

npx parcel src/index.html

❌ Library targets are not supported in serve mode

Cause: "main" exists in package.json
Fix:
Delete "main"

❌ 404 on localhost

Cause: Running Parcel with .js only
Fix:
Run Parcel with HTML, not JS

❌ Parcel reads the wrong package.json

Cause: Parent folder has one
Fix:

Remove "main" from parent, or

Run npm init in the subfolder

❌ npm audit panic
Cause: Old tooling or deep dependencies
Fix:
Upgrade Parcel to v2, ignore dev-tool warnings while learning

------------------------
10. The mental rules (this ends confusion)

Apps start with HTML

Libraries start with JS

Parcel 2 enforces intent

Local tools run via npm scripts

node_modules is never committed

package-lock.json is always committed

One sentence to remember forever

npm manages what you use, Parcel manages how it runs, and HTML tells the browser where to begin.
 */
