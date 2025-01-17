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

// for(let i = 0; i < btnsOpenModal.length; i++)
//    btnsOpenModal[i].addEventListener('click', openModal);
// do same as commented above code
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));// do same code above

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



