// Type Conversion & Type Coercion

// Type Conversion

let num = String(34);// assign 34 as a string into the num variabel
console.log(num,typeof(num)); 

let booleanvar = String(true);// assign true as a string into the boolenanvar variabel
console.log(booleanvar,typeof booleanvar );

// let arr =[1,2,3,4,5] // For this the length will be 5, as the number is only taken 
let arr =String([1,2,3,4,5]); // For this the length will be 9 including the numbers and commas excludling the squre bracket
console.log(arr.length,typeof arr);

let i = "345";
console.log(i.toString(),typeof i);

let strii = Number("32434");
// strii = Number([1,2,4,5,5]); // throw an error Nan -> Not a number
// strii = Number(true) // true-> 1  and  false-> 0
console.log(strii,typeof strii);

let number = parseFloat("234.0990");
console.log(number.toFixed(30),(typeof number));


// Type Coercion

// let mystr = "433"; // As mystr is string mynum will be concatenate with mystr, so output -> 433123
let mystr = Number("433");// As mystr is now a number, so both number will be added and output -> 556
let mynum = 123;
console.log(mystr + mynum);