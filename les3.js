//примитивные типы:
//number - число
//string - строка
//boolean - булево
//null - пустое значение
//undefined - не определено
//symbol - уникальный идентификатор
//bigint - большое целое число

//сложные типы:
//object - объект
//array - массив
//function - функция
//class - класс
//date - дата
//regexp - регулярное выражение
//error - ошибка
//map - карта
//set - множество
//weakmap - слабое множество
//weakset - слабое множество
//symbol - уникальный идентификатор

//typeof - оператор, который возвращает тип переменной

//object - это коллекция данных, которая состоит из свойств и методов
//ссылочный тип - это тип данных, который состоит из ссылки на объект в памяти

const objectA = {
    a: 10,
    b: true,
}

const copyOfA = { ...objectA, c: 'abc', d: undefined }

copyOfA.d = 'slojnoe'

console.log(objectA) //{ a: 10, b: true, c: 'abc' }
console.log(copyOfA) //{ a: 10, b: true, c: 'abc', d: 'slojnoe' }
