'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');


const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////////////////////////////
//        011 Event Delegation Implementing Page Navigation
// page navigation

// this exact same function attach to three element in nav bar

/* 
document.querySelectorAll('.nav__link').forEach
(function(el){
      el.addEventListener('click', function(e) {
         e.preventDefault();
         // console.log('LINK');

         const id = this.getAttribute('href'); // now we get the href section target from nav
         console.log(id);
         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
          
      });
});

*/

// now if we got 10000 elements , we should copy all of them??? what is the solution
//         and the solution is event delegation :::
// so in event delegation we basically need two steps:
// first we add the event listener to a common parent element of all the elements that we're
// interested in.
// second determine what element originated the event where the event was actually created.

document.querySelector('.nav__links').addEventListener
('click', function(e) {
      // console.log(e.target);
      e.preventDefault();

      // Matching strategy
      if(e.target.classList.contains('nav__link')){
         // console.log('LINK');
         const id = e.target.getAttribute('href');
         console.log(id);
         document.querySelector(id).scrollIntoView({
               behavior: 'smooth'
         });
      }
});
/* 
   we successfully implemented event delegation which is lot better and
   a lot more efficient than simply attaching the same event handler to multiple 
   elements
*/


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

/* 

// create random color
// rgb(255, 255, 255)
// this make random number
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// now we use that randomInt to make random color
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},
${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');
 

navLink.addEventListener('click', function(e) {
   this.style.backgroundColor = randomColor();
   console.log('LINK', e.target, e.currentTarget);
   console.log(e.currentTarget === this);

   // stop propagation    >>>> but not a good idea but good for fix problem in application
   // e.stopPropagation();
});
navLinks.addEventListener('click', function(e) {
   this.style.backgroundColor = randomColor();
   console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e) {
   this.style.backgroundColor = randomColor();
   console.log('NAV', e.target, e.currentTarget);
}, true);  
// true >> this element listening for the event as it travels down from the DOM

 */

//////////////////////////////////////////////////////////////////////////
///////      011 Event Delegation Implementing Page Navigation     ///////
//////////////////////////////////////////////////////////////////////////
// all the code belong to this section is below the modal code at top of page 


//////////////////////////////////////////////////////////////////////////
//////////////               012 DOM Traversing               ////////////
//////////////////////////////////////////////////////////////////////////

//    dom traversing is basically walking through the dom.
// which means that we can select an element based on another element
// because sometimes we need to select elements relative to a certain other element
// for example a direct child or direct parent element

const he1 = document.querySelector('h1');

// Going downwards: child
console.log(he1.querySelectorAll('.highlight'));
// tips : Nodes can be anything
console.log(he1.childNodes);
console.log(he1.children);  // this one work only for direct children
he1.firstElementChild.style.color = 'red';
he1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(`🙄`);
console.log(he1.parentNode);
console.log(he1.parentElement);
console.log(`===============`);

he1.closest('.header').style.background = 'var(--gradient-secondary)';
// so it selected the closest header to our h1 element,
//  so the closest parent element that has this class ('.header')
// and then it's simply applied all style to that element.

he1.closest('h1').style.background = 'var(--gradient-primary)';
// so we can think of closest here as basically being the opposite of querySelector
// so both receive a query string as an input but querySelector finds children
// no matter how deep in Dom tree while the closest method finds parents
// and also no matter how far up in the Dom tree


// Going sideways: siblings
// we can only access direct siblings
console.log(he1.previousElementSibling);
console.log(`😁`);
console.log(he1.nextElementSibling);


console.log(he1.previousSibling);
console.log(he1.nextSibling);

// now if we really need all the siblings and not just the previous and next one 
// then we can use the trick of moving up to the parent element and then read all the children
// from there
console.log(he1.parentElement.children);
[...he1.parentElement.children].forEach(function(el) {
   // we wanted to change some style to all the siblings but except the element itself
   if(el !== he1){ // because the he1 is the element itself
      el.style.transform = 'scale(0.5)';
      // and this is how we can do with all the sibling elements of one element
   }
});


//////////////////////////////////////////////////////////////////////////
//////////////        013 Building a Tabbed Component            /////////
//////////////////////////////////////////////////////////////////////////

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// we taking all the tabs and then on each of them we could attach an event handler
/* 
tabs.forEach(t => t.addEventListener('click', () =>
console.log('TAB')));// now if we have 200 tab this not good and make our site slow down
 */
// so we us event delegation =
// for event delegation we need to attach the event handler on the common parent element
// of all the elements that we're interested in. and in our case is tab container

tabsContainer.addEventListener('click', function (e) {
   const clicked = e.target.closest('.operations__tab');
   // console.log(clicked);

   // Guard clause
   if(!clicked) return;

   // Remove active classes
   tabs.forEach(t => t.classList.remove('operations__tab--active'));
   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
   
   // Activate tab
   clicked.classList.add('operations__tab--active');

   // Activate content area
   // console.log(clicked.dataset.tab);
   document.querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add('operations__content--active');
});


//////////////////////////////////////////////////////////////////////////
//////////////     014 Passing Arguments to Event Handlers     ///////////
//////////////////////////////////////////////////////////////////////////

//  Menu fade animation
const handleHover = function(e) {
   if(e.target.classList.contains('nav__link')){
      const clink = e.target;
      const siblings = clink.closest('.nav').querySelectorAll('.nav__link');
      const logo = clink.closest('.nav').querySelector('img');

      siblings.forEach(el => {
         if(el !== clink){
            el.style.opacity = this;
         }
      });
      logo.style.opacity = this;
   }
};

// Passing "argument" into handler  = we can do it in two way
// second way
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// one way
/* 
nav.addEventListener('mouseover', function(e) {
      handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function(e) {
      handleHover(e, 1);
});

 */

//////////////////////////////////////////////////////////////////////////
///////    015 Implementing a Sticky Navigation The Scroll Event   ///////
//////////////////////////////////////////////////////////////////////////

// we scroll down once we then reach a certain point the menu bar attached
// to the top of the page

/* 
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
      // console.log(window.scrollY);

      if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
      else nav.classList.remove('sticky');

});

 */
//////////////////////////////////////////////////////////////////////////
//////////    016 A Better Way The Intersection Observer API     /////////
//////////////////////////////////////////////////////////////////////////

/* for this section study MDN IntersectionObserver::
// Sticky Navigation: Intersection Observer API

const obsCallback = function (entries, observer) {
         entries.forEach(entry => {
            console.log(entry);
         });
};

const obsOption = {
   root: null,
   threshold: [0, 0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(section1);

 */

// when the header out of view then we want to display the navigation
const headhead = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function(entries) {
      const [entry] = entries;
      console.log(entry);
      if(!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: `-${navHeight}px`
});
headerObserver.observe(headhead);


//////////////////////////////////////////////////////////////////////////
///////////////       017 Revealing Elements on Scroll       /////////////
//////////////////////////////////////////////////////////////////////////  

// working on showing section animation
const allSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
      const [entry] = entries;
      console.log(entry);

      if(!entry.isIntersecting) return;
      
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target); 
};

const sectionObserver = new  IntersectionObserver(revealSection, {
     root: null,
     threshold: 0.15
});

allSection.forEach(function(section){
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
});
 

//////////////////////////////////////////////////////////////////////////
///////////////           018 Lazy Loading Images             ////////////
//////////////////////////////////////////////////////////////////////////

