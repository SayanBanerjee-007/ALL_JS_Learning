// Local and session storage in javascript

let impArray = ['alu','potol','gajor','fulcopi'];

// set key-value pair inside local storage
localStorage.setItem('Name0', 'Sayan');
localStorage.setItem('Name1', 'Dhrubojyoti');
localStorage.setItem('Name2', 'Ankur');

localStorage.setItem('sabji',JSON.stringify( impArray));

// Fully creal the local storage
//localStorage.clear(); 

//remove only selected key-value pair form local storage
localStorage.removeItem('Name0');

// Retrieve an item from local storage
let temp = localStorage.getItem('Name0');
temp = JSON.parse(localStorage.getItem('sabji')); 
console.log(temp);



sessionStorage.setItem('sessionName0', 'S_Sayan');
sessionStorage.setItem('sessionName1', 'S_Dhrubojyoti');
sessionStorage.setItem('sessionName2', 'S_Ankur');

// All method or funcrion of session or local storage is same
// But local storge data stored in the browser until it is cleared or removed
// While session srorage data is cleared with the end of the session or the
// browser