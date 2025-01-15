//Function - это блок кода который можно вызвать много раз

let a = 10
let b = 20

let c = a + b

console.log(c) //30

a = 100
b = 200

c = a + b

console.log(c) //300

function sum(a, b) {
    console.log(a + b)
}

sum(1, 2)
