//vfccbs

const myArray = [1, 2, 3, 4, 5]

console.log(myArray)

myArray.forEach(element => console.log(element*2))

myArray.forEach((element, index) => {
    console.log(element*2*index)
})

myArray.forEach((element, index, array) => {
    console.log(element*2*index*array.length)
})
