//if else

const person = {
    age: 18,
}

if (!person.name) {
    console.log('User is minor')
}
//if in function

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'One of the numbers is not positive'
    }
    return a + b
}

console.log(sumPositiveNumbers(2, 3))

//switch

switch (person.age) {
    case 18:
        console.log('User is old')
        break
    default:
        console.log('User is young')
}
