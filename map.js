//map - создает мовый массив

const myArray = [1, 2, 3, 4, 5]

const myArray2 = myArray.map((element) => element * 2)

console.log(myArray2)

//Разворот массива  

// Способ 1: Используя метод reverse()
const reversed1 = [...myArray].reverse()

// Способ 2: Используя reduce()
const reversed2 = myArray.reduce((acc, item) => [item, ...acc], [])

// Способ 3: Используя цикл for
const reversed3 = []
for (let i = myArray.length - 1; i >= 0; i--) {
    reversed3.push(myArray[i])
}

console.log(reversed1) // [5, 4, 3, 2, 1]
console.log(reversed2) // [5, 4, 3, 2, 1]
console.log(reversed3) // [5, 4, 3, 2, 1]
