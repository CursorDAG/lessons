const personOne = {
    nameUser: 'Bob',
    age: 25,
}

function incrementAge(person) {
    const updatedPerson = { ...person }
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPerson = incrementAge(personOne)
console.log(updatedPerson.age)
console.log(personOne.age)
