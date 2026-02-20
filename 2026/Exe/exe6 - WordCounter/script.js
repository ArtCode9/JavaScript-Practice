let textBox = document.getElementById('textbox');

textBox.addEventListener('input', function() {
   let t = this.value;

   console.warn(t);

   t = t.trim();
   let words = t.split(" ");
   let clean = words.filter(function (e) {
      return e != "";
   });
   console.log(clean);
   document.getElementById("word").innerHTML = clean.length;
});


/* i Got error because This part:
   textBox.addEventListener('input', () => {
   let t = this.value;
   });
   ____________________________________
   why ? Because :::

   🚨Arrow functions DO NOT have their own this.
   🚨They inherit this from the surrounding scope.

   so i change this :::   () => {
   to this :::    function () {

*/

/* 
   Also we got another solution for this:
   
   ```
   let textBox = document.getElementById('textbox');

   textBox.addEventListener('input', (e) => {
      let t = e.target.value;

      t = t.trim();

      let words = t.split(" ");
      let clean = words.filter(e => e !== "");

      document.getElementById("word").innerHTML = clean.length;
   });
   ```
   
   ```
   textBox.addEventListener('input', function () {
   let t = this.value;

   t = t.trim();

   let words = t.split(" ");
   let clean = words.filter(e => e !== "");

   document.getElementById("word").innerHTML = clean.length;
   });
   ```
*/

/* 
   🔬 Advanced Explanation (Engine Level)

   When you do:
   textBox.addEventListener('input', handler);

   The browser internally calls:
   handler.call(textBox, event);

   But arrow functions ignore .call() binding.
   That’s the key concept.
*/

//💎 Even Better Word Counter (Production Quality)
// Your split by " " has a bug.
// Multiple spaces still cause issues.
// Better approach:
/* 
   textBox.addEventListener('input', (e) => {
   let t = e.target.value.trim();

   let clean = t === "" 
      ? [] 
      : t.split(/\s+/);

   document.getElementById("word").textContent = clean.length;
});
*/

/* 
   🎯 Key Lesson
   When using event listeners:
   Use (e) => e.target
   OR
   Use function() and this
   Never use `this` inside arrow functions expecting DOM binding.
*/