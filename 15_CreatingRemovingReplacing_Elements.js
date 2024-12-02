
// Create Element
let elm = document.createElement('li');
let text = document.createTextNode("Hello, this is created by Sayan");
elm.appendChild(text); // Second way to insert text in the created element
elm.className = 'childul';
elm.id = 'creditedLI';
elm.setAttribute('title','mytitle');
// elm.innerText = 'Hello, this is created by Sayan'; // easy way to insert text

let cont = document.querySelector('ul.this');
cont.appendChild(elm);

// Replace Element
let elem2 = document.createElement('h3');
let telem2 = document.createTextNode('This is elem2');
elem2.className = 'elem2';
elem2.id = 'elem2';
elem2.appendChild(telem2);
elm.replaceWith(elem2);

let my = document.getElementById('myul');
my.replaceChild(elm,document.getElementById('ful'));
// my.replaceWith(elm); // this will replace the whole UL 
my.removeChild(document.getElementById('lul'));

// let c = document.querySelector('.container');
// console.log(c);

let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title','myNewTitle');
// console.log(elem2,pr);



// console.log(cont);
// console.log(elm);