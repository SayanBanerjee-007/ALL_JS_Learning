// console.log("This is tutorial 43");

// async function harry(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;

//     // return "harry";
// }

// console.log("Before calling harry")
// let a = harry();
// console.log("After calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log("Last line of this js file")

function sum (a,b){
    return a + b;
}
async function temp (){
    console.log("Inside temp");
    const sumVal = await sum(13,14);
    console.log(sumVal);
    console.log("Exting temp");
    return sumVal;
}

console.log("Before calling temp");
let a = temp();
console.log("After calling temp");
console.log(a);
a.then((data)=>{console.log("Then complete", data); console.log(a);})
console.log("End");