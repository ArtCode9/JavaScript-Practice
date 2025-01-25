'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');


const openModal = function(e) {
   e.preventDefault(); // the page don't jump when button click
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function() {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

// do same as commented above code
//btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));// do same code above

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
      if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
      }
});

//////////////////////////////////////////////////////////////////////////
/////////////////////   004 How the DOM Really Works    //////////////////
//////////////////////////////////////////////////////////////////////////

//  check your note and read a lot MDN Dom  


//////////////////////////////////////////////////////////////////////////
//////////   005 Selecting, Creating, and Deleting Elements    ///////////
//////////////////////////////////////////////////////////////////////////

// selecting  elements :::
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(`============`);

const header = document.querySelector('.header');
console.log(header);
const allSections = document.querySelectorAll('.section');
console.log(allSections);
console.log(`============`);

console.log(document.getElementById('section--1'));
console.log(`============`);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(`============`);

const className = document.getElementsByClassName('btn');
console.log(className);


// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML = `We use cookied for improved functionality and analytics.
                     <button class="btn btn--close-cookie">Got it!</button>`;
// we select header above
//header.prepend(message); // add before first child
header.append(message);
// header.append(message.cloneNode(true)); // add to last child and copy node

header.before(message);
// header.after(message);


// Delete elements
document.querySelector('.btn--close-cookie')
         .addEventListener('click', function (){
            //message.remove();
            message.parentElement.removeChild(message);
         });

//////////////////////////////////////////////////////////////////////////
//////////       ///////////
//////////////////////////////////////////////////////////////////////////