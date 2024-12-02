// Manupulating Websites in javascript

let a = window;

// window.alert("Hello Sayan"); // No need to do this as window is global object in clint side javascript
// alert("Hello Sayan");

// prompt("This will destroy your computer. Write your name! ");

// confirm('Are you sure, you want to delete this website ?');

a = window.innerHeight;    // tab height
a = innerWidth;            // tab width 
a = scrollX;               // scroll bar X position
a = scrollY;               // scroll bar Y position
a = location;              // All location information of that page
// a = location.reload();  // Reload the page until stop it
a = location.toString();
a = history;
a = history.length;
// a= history.go( );       // Use to go next or previous website we visit loaded in histroy -1,-2... or 1,2.... for bacword or forward respectively, in the ()beside go



console.log(a);