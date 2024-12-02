// Understanding DOM & Creating a Website Layout

let a = document;
a = document.all;  // return all the body and head code
// a = document.body; // return only the body code
// a = document.forms;// return only the code inside form tag

/*Array.from(a).forEach(function(elements) // Array.form create an array by the html collection, for this case the html collection is -> a
{
    console.log(elements);
})
*/

a = document.links;        // say how many links are there
a = document.links[0];     // return the line of codes contaiing links at that index[]
a = document.links[0].href;// return only the link adress in string format

a = document.scripts;
a = document.scripts[1];

a = document.images;

console.log(a);
