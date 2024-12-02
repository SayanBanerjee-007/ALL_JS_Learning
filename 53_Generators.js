function* generate() {
    let i = 1;
    while (true) {
        yield typeof(i++);
    }
}

const generateObj = generate();
console.log(generateObj.next().value);
console.log(generateObj.next().value);
console.log(generateObj.next().value);
console.log(generateObj.next().value);
console.log(generateObj.next().value);
console.log(generateObj.next().value);