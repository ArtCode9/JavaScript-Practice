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
      }, 1790);
      if(Number(score1.innerText) <= 0) {
         winner.innerText = `🙎Ken is the Winner🏅`;
         score2.innerText = 100;
         score1.innerText = 100;
      } else if(Number(score2.innerText) <= 0) {
         winner.innerText = `🙅Ryu is the winner 🥇`;
         score2.innerText = 100;
         score1.innerText = 100;
      }   
   
   }
   else if(e.key == 'p') 
   {
      score1.innerText -= Number(Math.floor(Math.random() * 10));
      imgs2.src = "./src/ezken2.gif";
      setTimeout(() => {
         imgs2.src = "./src/KenStance.gif";
      }, 500);
      if(Number(score1.innerText) <= 0) {
         winner.innerText = `🙎Ken is the Winner🏅`;
         score2.innerText = 100;
         score1.innerText = 100;
      } else if (Number(score2.innerText) <= 0) {
         winner.innerText = `🙅Ryu is the winner 🥇`;
         score2.innerText = 100;
         score1.innerText = 100;
      }

   }
    else if(e.key == 'a')
   {
      if(score1.innerText != 100) {
         score1.innerText = Number(score1.innerText) + Number(Math.floor(Math.random() * 10));
         if(score1.innerText > 100) {
            score1.innerText = Number(100);
         }
      }
   } 
    else if(e.key == 'l') 
   {  
      if(score2.innerText != 100) {
         score2.innerText = Number(score2.innerText) + Number(Math.floor(Math.random() * 10));
         if(score2.innerText > 100) {
            score2.innerText = Number(100);
         }
      }
   }  

});