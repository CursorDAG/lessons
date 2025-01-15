//циклы

//for

const myArray = [1, 2, 3, 4, 5]
// const myArray2 = []
// for (let i = myArray.length - 1; i >= 0; i--) {
//     myArray2.push(myArray[i])
// }
// console.log(myArray2)

myArray.forEach((item, index) => {
    console.log(item, index, myArray.length - index - 1)
})


//while

let i = 0
while (i < myArray.length) {
    console.log(myArray[i])
    i++
}

//do while
do {
    console.log(myArray[i])
    i++
} while (i < myArray.length)
