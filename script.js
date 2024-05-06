'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Great! You are reading the heading.');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// querySelector
// getElementById
// const header = document.querySelector('.header');

// return HTMLELEMENTS
// getElementByTagName like button and all that it updates automaticcaly when dom update.
// getELementByClassName

// Creating ELement
// // .insertAdjacent
// // createElement return DOM element
// const msg = document.createElement('div');
// msg.classList.add('cookie-message');
// msg.innerHTML = 'Demo<button class="btn btn--close--cookie">Got It</button>';

// // prepend
// header.append(msg);
// // before and after

// // delete element
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     msg.remove();
//   });

// // styles
// msg.style.backgroundColor = '#37383d';
// msg.style.width = '120%';

// msg.style.height =
//   Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// EVents trigger at the top of document then the capturing phase will happen this will go down to the
// element where the events trigger when it reached to element target phase begin
// and then event occured then it travels again to document its called bubbling

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight')); // select element of class highlight child of h1
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
