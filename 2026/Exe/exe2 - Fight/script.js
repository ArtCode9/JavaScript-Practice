let score1 = document.getElementById('ryuscore');
let score2 = document.getElementById('kenscore');
let winner = document.getElementById('Info');
let btn = document.getElementById('reset');
let imgs1 = document.getElementById('imgs1');
let imgs2 = document.getElementById('imgs2');

score1.innerText = score2.innerText = Number(100);

document.body.addEventListener('keydown', function(e) {

   if(e.key == 'q')
   {
      score2.innerText -= Number(Math.floor(Math.random() * 10));
      imgs1.src = "./src/ryu-hadouken.gif";
      setTimeout(() => {
         imgs1.src = "./src/ryustance.gif";
      }, 1990);
      
   } 

});