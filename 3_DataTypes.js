// Primitive Data Types


// String
let name = "Sayan";
console.log("My name is " + name);
console.log("Data type of name " + (typeof name));

// Number
let num = 34;
console.log("Data type of num " + (typeof num));

// Boolean
let canDrive = true;
console.log("Data type of canDrive " + (typeof canDrive));

// Null
let varNull = null;
console.log("Data type of varNull " + (typeof varNull)); // Data type is shown as object but it is primitive data type
// Bogus return value

// Undefined
let undef = undefined;
console.log("Data type of undef " + (typeof undef));


// Reference Data Types

// Arrays
let myarr = [1,2,54,true,"lol"];
console.log("Data type of myarr " + (typeof myarr));

// Object Literals
let studentMarks = {
    Harry: 34,
    Rohan: 83,
    'Aysush Sharma': 90 // use single quote if want to give space between words
};
console.log(studentMarks);
console.log("Data type of studentMarks " + (typeof studentMarks));

// Function
function findnum() {
    
}
console.log("Data type of findname " + (typeof findnum));

// Date
let date = new Date();
console.log(date);
console.log("Data type of name " + (typeof date));