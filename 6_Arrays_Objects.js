// Arrays and Objects

// const marks = [23,56,78,34,97,56];
let marks = [23, 56, 78, 34, 97, 56];
const fruits = ["apple", 'banana', 'cucumber'];
const mixed = ['str', 44, [2, 5]];

const arr = new Array(23, 56, 65, 'Orange');

console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);
// console.log(arr.length);// this is prorerties not method->()
// console.log(Array.isArray(arr));
// arr[0] = "omg";
// let arrayelement = arr[0];
// console.log(arrayelement);
// let value = marks.indexOf(34);
// console.log(value);

// Mutating or Modifying array
marks.push(789);
marks.unshift(100);
marks.pop();
marks.shift();
marks.splice(3, 2);
marks.reverse();
let marks2 = [1, 3, 5, 7];
marks = marks.concat(marks2); // will throw an error if marks is const
console.log(marks);

let myobj = {
    'first name': 'Sayan',
    channel: 'CRAZY LOL BABA',
    isActive: false,
    marks: [1, 5, 3, 6]
}

console.log(myobj);
console.log(myobj['first name']);
console.log(myobj['channel']);
console.log(myobj.channel);






