//вариант 1  вложенные обьекты мутируются

const person = {
    name: 'Batyr',
    age: 20,
    isMarried: false,
}

const person2 = Object.assign({}, person)

person2.name = 'Iosif'

console.log(person.name)
console.log(person2.name)

//вариант 2  вложенные обьекты мутируются

const person3 = { ...person }

person3.name = 'gondor'

console.log(person.name)
console.log(person3.name)

//вариант 3  вложенные обьекты не мутируются!!!

const person4 = JSON.parse(JSON.stringify(person))

person4.name = 'bogdan'

console.log(person.name)
console.log(person4.name)
