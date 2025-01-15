//Object - это коллекция данных, которая состоит из свойств и методов

const myCity = {
    city: 'Moscow',
    country: 'Russia',
    population: 10000000,
}

const myCity2 = {
    city: 'Moscow',
    country: 'Russia',
    population: true,
}

console.log(myCity.city) //Moscow
console.log(myCity2.country) //Russia
console.log(myCity2.population) //true

myCity.city = 'New Jersey'

console.log(myCity.city) //New Jersey

const myHome = {
    familyPopulation: 4,
    familyMembers: ['Batyr', 'Ummhani', 'Amin', 'Islam'],
    levelOfHome: 2,
}

console.log(myHome.familyMembers) //Islam
console.log(myHome) //{familyPopulation: 4, familyMembers: ['Batyr', 'Ummhani', 'Amin', 'Islam'], levelOfHome: 2, secondLevel: 'Batyr', firstLevel: ['Amin', 'Islam', 'Ummhani']}

delete myHome.familyMembers

console.log(myHome) //{familyPopulation: 4, levelOfHome: 2, secondLevel: 'Batyr', firstLevel: ['Amin', 'Islam', 'Ummhani']}
