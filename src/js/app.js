'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

function listen(event, element, callback) {
  if (element) {
    element.addEventListener(event, callback);
  }
}

// Parallax Effect
const layers = selectAll('.cityscape');

listen('scroll', window, () => {
  const scrollY = window.scrollY;

  // Move each layer at different speeds
  layers[0].style.transform = `translateY(${scrollY * 0.3}px)`; // Slowest
  layers[1].style.transform = `translateY(${scrollY * 0.6}px)`; // Middle speed
  layers[2].style.transform = `translateY(${scrollY * 0.9}px)`; // Fastest
});


const contentWrapper = document.querySelector('.content-wrapper');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Width of each box + gap
const boxWidth = contentWrapper.querySelector('.box').offsetWidth + 20; // 20px gap

// Scroll to the next box
scrollRightBtn.addEventListener('click', () => {
  contentWrapper.scrollBy({
    left: boxWidth,
    behavior: 'smooth',
  });
});

// Scroll to the previous box
scrollLeftBtn.addEventListener('click', () => {
  contentWrapper.scrollBy({
    left: -boxWidth,
    behavior: 'smooth',
  });
});
