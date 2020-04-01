 "use strict";


// const hello = (name, age) => console.log(`Witaj ${name}, masz ${age} lat.`);

// hello ("Anastazja", 25); 

// const navigationSwitcher = document.querySelector('.navigation__switcher--js');
// const navigationList = document.querySelector('.navigation__list--js');

// navigationSwitcher.addEventListener('click', (e) =>{
// navigationList.classList.toggle('navigation__list--visible');
// if (navigationList.classList.contains('navigation__list--visible')){
//   navigationSwitcher.innerHTML = "x";
// }s
// else {
//   navigationSwitcher.innerHTML ="≡";
// }
// });






// const faces = ['😽', '❤', '🐱‍🚀'];

// for (let i = 0; i < faces.length; i++){
//   console.log(`element ${i+1}: ${faces[i]}`);
// }


// let a = 3;
//  while (a<9) {
//    a= a+3;
//    console.log(a)

//  }
//  console.log(a);

//  do {
//   console.log(a);
//  } while (a <9)

 const person = {
   name: 'anastazja',
   age: 26
 }

//  for (let propertyName in person) {
//    console.log(`${propertyName}: ${person[propertyName]}`);
//  }

//  console.log(document.cookie);
//  document.cookie = "testoweCiastko = wartość";
//  document.cookie = "testoweCiastko2 = wartość2";
//  console.log(document.cookie);

// console.log(person);

// const jsonPerson = JSON.stringify(person);


// console.log(jsonPerson);
// localStorage.setItem('name','anastazja');
//  localStorage.setItem('person',jsonPerson);


// console.log(localStorage.getItem('name'));

//   const personStringify = localStorage.getItem('person');



//   const newPerson = JSON.parse(personStringify);

//   console.log(newPerson);

// localStorage.removeItem('person');

const focusInput = document.querySelector('.focus--js');

if (localStorage.getItem('focusInput')) {
  focusInput.value = localStorage.getItem('focusInput');
}

focusInput.addEventListener ('keyup', (e) =>{
  localStorage.setItem('focusInput', e.target.value);
});