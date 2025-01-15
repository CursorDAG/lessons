const myObject = {
    x: 10,
    y: true,
    z: 'abc',
}

//Object.keys(myObject) - возвращает массив ключей объекта myObject

Object.keys(myObject).forEach((key) => {
    console.log(key, myObject[key])
})

//Object.values(myObject) - возвращает массив значений объекта myObject
Object.values(myObject).forEach((value) => {
    console.log(value)
})

//Object.entries(myObject) - возвращает массив массивов [ключ, значение]

Object.entries(myObject).forEach(([key, value]) => {
    console.log(key, value)
})
