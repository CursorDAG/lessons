//колбек функция    

// function anotherFn() {
//     console.log('Hello')
// }

// function fnWithCallback(callback) {
//     callback()
// }

// fnWithCallback(anotherFn)

function printMyName() {
    console.log('Bogdan')
}

console.log('start')    

setTimeout(printMyName, 1000)

console.log('end')