function Car(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.getName = function() {
        console.log(`The car is ${this.name}`);
    }
    this.getTopSpeed = function() {
        console.log(`Top Speed: ${this.topSpeed}`);
    }

}

let car1 = new Car('Lamborgini',250);
car1.id = 21;
console.log(car1)
// car1.getName();
// car1.getTopSpeed();