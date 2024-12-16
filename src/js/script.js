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

const aboutButton = select('.about');
const galleryButton = select('.gallery');
const poetryButton = select('.poetry');
const gamesButton = select('.games');
const hiddenButton = select('.hidden-button');

const aboutModal = select('.about-modal');
const galleryModal = select('.gallery-modal');
const poetryModal = select('.poetry-modal');
const gamesModal = select('.games-modal');
const hiddenModal = select('.hidden-modal');
const modals = selectAll('.modal');


function showTargetDiv(modal) {
  modals.forEach((m) => m.classList.add('hidden')); 
  if (modal) modal.classList.remove('hidden'); 
}

function hideTargetDiv(event) {
  modals.forEach((modal) => {
    if (!modal.contains(event.target) && !event.target.closest('.circle')) {
      modal.classList.add('hidden');
    }
  });
}

listen('click', aboutButton, () => showTargetDiv(aboutModal));
listen('click', galleryButton, () => showTargetDiv(galleryModal));
listen('click', poetryButton, () => showTargetDiv(poetryModal));
listen('click', gamesButton, () => showTargetDiv(gamesModal));
listen('click', hiddenButton, ()=> showTargetDiv(hiddenModal));


document.addEventListener('click', (event) => hideTargetDiv(event));

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => event.stopPropagation());
});
