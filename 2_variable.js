// Mainly three types of vriables in JS -> var, let, const


var name = "Sayan";
var marks = 35;
console.log(name,marks);

// Nowdays var is not used mostly

const teacher = "Code With Harry";
// teacher = "omg"; // -> throw an error as const can be changed
console.log(teacher);

let city = "Kolkata";
console.log(city);
{ // In this scope the local city will be executed
    let city = "Berhampore"; // if this line isn't written then
    city = "Gokorno"; // The value of local city will be changed only
    console.log(city);// the output will be Kolkata, not Berhamopore
}
