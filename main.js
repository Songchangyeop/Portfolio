'use strict';

// Handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
