//JSON - JavaScript Object Notation

const person = {
    nameUser: 'Batyr',
    age: 20,
    isMarried: false,
    skills: ['JavaScript', 'Python', 'C#'],
    address: {
        city: 'New York',
        country: 'USA',
    },
}

console.log(JSON.parse(JSON.stringify(person)))

console.log(person)

