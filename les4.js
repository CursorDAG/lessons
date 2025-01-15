//динамическая типизация - это когда тип переменной определяется во время выполнения программы3

// let a

// a = 'abc' //string

// a = 10 //number

//статическая типизация - это когда тип переменной определяется до выполнения программы

//String a = 'abc'

//int b = 10

//b='xyz'//ошибка

//динамическая типизация

// function a() {
//     console.log('hey there')
// }

// a() //hey there

// a = 10

// a() //ошибка

//использовать const везде, где это возможно

const a = () => {
    console.log('hey there')
}

a() //hey there

a = 10 //TypeError: Assignment to constant variable.  ошибка

a()
