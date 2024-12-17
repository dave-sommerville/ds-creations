'use strict';

/*-------------------------------------->
  UTILITY FUNCTIONS 
<--------------------------------------*/

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

/*-------------------------------------->
HERO BANNER - PARALLAX
<--------------------------------------*/

const layers = selectAll('.cityscape');

listen('scroll', window, () => {
  const scrollY = window.scrollY;

                                        // Rate of change specified here
  layers[0].style.transform = `translateY(${scrollY * 0.3}px)`; 
  layers[1].style.transform = `translateY(${scrollY * 0.6}px)`; 
  layers[2].style.transform = `translateY(${scrollY * 0.9}px)`; 
});

/*-------------------------------------->
  SNAPPY ALBUMS (REMBER TO CHANGE IF MULTIPLE ALBUMS ADDED)
<--------------------------------------*/
const contentWrapper = select('.content-wrapper');
const scrollLeftBtn = select('.y-album-left');
const scrollRightBtn = select('.y-album-right');

const boxWidth = contentWrapper.querySelector('.box').offsetWidth + 10;

listen('click', scrollRightBtn, () => {
  contentWrapper.scrollBy({
    left: boxWidth,
    behavior: 'smooth',
  });
});

listen('click', scrollLeftBtn, () => {
  contentWrapper.scrollBy({
    left: -boxWidth,
    behavior: 'smooth',
  });
});
