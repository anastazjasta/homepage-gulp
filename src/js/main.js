"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const hello = (name, age) => console.log(`Witaj ${name}, masz ${age} lat.`);

hello ("Anastazja", 25); 

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
const navigationList = document.querySelector('.navigation__list--js');

navigationSwitcher.addEventListener('click', (e) =>{
navigationList.classList.toggle('navigation__list--visible');
if (navigationList.classList.contains('navigation__list--visible')){
  navigationSwitcher.innerHTML = "x";
}
else {
  navigationSwitcher.innerHTML ="≡";
}
});




