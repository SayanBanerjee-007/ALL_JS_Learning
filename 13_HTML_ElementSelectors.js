// HTML Element Selectors In JavaScript

let element = document.getElementById('firstname');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Hello brother johon has been arrived';
element.innerHTML = `<b>${element.innerText}</b>`;

// console.log(element.innerText);

let sel = document.querySelector('#firstname'); // return first HTML code with id #firstname
sel = document.querySelector('.child'); //
sel = document.querySelector('.container'); //
sel = document.querySelector('div'); //
sel.style.color = 'green';

// console.log(sel);


let elems = document.getElementsByClassName('child');
/*
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));
*/
elems = document.getElementsByTagName('div');
// Array.from(elems).forEach(function(elements){
//     elements.style.color = 'violet';
// }) 
console.log(elems);