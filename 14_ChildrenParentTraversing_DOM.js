// Children, Parent and Traversing the DOM

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

let nodename = cont.childNodes[2].nodeName;
// console.log(nodename);

let nodetype = cont.childNodes[0].nodeType;
// console.log(nodetype);

// Node Types -
/*
1. Element
2. Attribute
3. Text Node
8. Comment
9. Document
10. Document Type
*/

// console.log(cont.childNodes); // Return tags,text,comment all
// console.log(cont.children); // only return tags

let cont2 = document.querySelector(".container");
// console.log(cont2.children[1].children[0].children);
// console.log(cont2.firstChild); // return first elment of childNodes
// console.log(cont2.firstElementChild);// return first elment of children
// console.log(cont2.lastChild); // return first elment of childNodes
// console.log(cont2.lastElementChild);// return first elment of children
// console.log(cont2.childElementCount);// return count of children

console.log(cont2.firstElementChild.nextSibling);
console.log(cont2.firstElementChild.nextElementSibling);
console.log(cont2.firstElementChild.nextElementSibling.nextElementSibling);
