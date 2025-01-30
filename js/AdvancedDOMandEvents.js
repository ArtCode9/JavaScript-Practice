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
//////////         006 Styles, Attributes and Classes          ///////////
//////////////////////////////////////////////////////////////////////////

// styles
message.style.backgroundColor = '#8ED988';
message.style.color = 'black';
message.style.width = '100%';

// WE only can log styles the we define not from class in css
console.log(message.style.backgroundColor);
console.log(message.style.width);
console.log(message.style.height);
console.log(message.style.color);

// but if we want get the style from class css we use getComputedStyle
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// set height for message with take parse number out of the string method
message.style.height = Number.parseFloat(
   getComputedStyle(message).height, 10) + 30 + 'px';

// we can work with css custom var root
document.documentElement.style.setProperty('--color-primary', 'red');
// so we can change the style of page with change the property


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist Logo by ARTCODE';
console.log(logo.alt);

// non-standard   and does't work
console.log(logo.designer);
// but with this we can access
console.log(logo.getAttribute('designer'));
// and also we can set the attribute
logo.setAttribute('company' , 'Bankist');
console.log(logo.getAttribute('company'));


console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));


// Data attribute  >>> version-number from logo element we add in html
console.log(logo.dataset.versionNumber);


// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes like it is called in array


//////////////////////////////////////////////////////////////////////////
//////////         007 Implementing Smooth Scrolling           ///////////
//////////////////////////////////////////////////////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
   // with = getBoundingClientRect() we can get position of the element of the element in page 
   const s1coords = section1.getBoundingClientRect();
   console.log(s1coords);

   console.log(e.target.getBoundingClientRect());

   console.log('Current scroll (X/Y)' , window.pageXOffset, pageYOffset);

   console.log('height/width viewport' , 
         document.documentElement.clientHeight,
         document.documentElement.clientWidth
   );

   // scrolling
   // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset);

   // window.scrollTo({
   //     left: s1coords.left + window.pageXOffset,
   //    top: s1coords.top + window.pageYOffset,
   //    behavior: 'smooth',
   // });

   section1.scrollIntoView({behavior: 'smooth'});

});

//////////////////////////////////////////////////////////////////////////
//////////         008 Types of Events and Event Handlers      ///////////
//////////////////////////////////////////////////////////////////////////

// select the element:
const h1 = document.querySelector('h1');
const headering = document.querySelector('h4');

const alertH1 =  function(e){
   alert('addEventListener: Great! You are reading the heading :D');

// we can prevent form happing or we can set time for remove it 
// h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter',alertH1);

// we set 6s time for removing this mouseenter event 
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 6000);


// h1.onmouseenter = function(e){
//    alert('onmouseenter: Great! You are reading the heading :D');
// };

headering.addEventListener('click' , function(e){
   alert('You click on event happing in page');
});

//////////////////////////////////////////////////////////////////////////
//////////      009 Event Propagation: Bubbling and Capturing     ////////
//////////////////////////////////////////////////////////////////////////
   // check video in folder 5

//////////////////////////////////////////////////////////////////////////
//////////////       010 Event Propagation in Practice      //////////////
//////////////////////////////////////////////////////////////////////////






