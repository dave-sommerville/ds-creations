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
