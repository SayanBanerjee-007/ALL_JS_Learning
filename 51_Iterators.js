

function myIterator(array) {
    let i = 0;
    return {
        next: () => {
            if (i < array.length) {
                return {
                    value: array[i++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }

    }
}
const arr = ['sayan','ankur','aritra','dhrubojyoti','suman','barsha','indrani'];
let iteratorVal = myIterator(arr);
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
console.log(iteratorVal.next().value );
