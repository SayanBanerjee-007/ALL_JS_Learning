let proto = {
    slogan: function () {
        console.log(`This is the best companey in the world `);
    },
    changeName: function (name) {
        this.name = name;
    }
}
// This creates object of proto and new SYNATX of ES6
const obj1 = Object.create(proto);
obj1.name = "Sayan";
obj1.role = "Backend Dev";
obj1.changeName("Sayan Banerjee");

// console.log(obj1);
// This creates object of proto and old SYNATX
const obj2 = Object.create(proto, {
    name: {
        value: "Ankur",
        writable: "true"
    },
    role: {
        value: "Full Stack Dev"
    },
});
obj2.changeName("Ankur Dhol")

// console.log(obj2);


// Real works begins now

function Employee (name, exp, salary) {
    this.name = name;
    this.exerience = exp;
    this.salary = salary;
}
Employee.prototype.slogan = function(){
    console.log(`This is the best companey in the world. Regards ${this.name}`);
}

let objEmp = new Employee("Suman",10,200000);
console.log(objEmp);

function Programmer (name, exp, salary,lang){
    Employee.call(this,name,exp,salary);
    this.language = lang;
}
// Manually inherite Prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set constructor 
Programmer.prototype.constructor = Programmer;

let objPro = new Programmer("Aritra",122,2088000,"javascript");
console.log(objPro);
objPro.slogan();// it will trow error if inherite prototype is not set manually 