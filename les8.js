//метод - это функция, которая привязана к объекту

const myCity = {
    city: 'New York',
    cityGreeting() {
        console.log('Hello, ' + this.city)
    },
}

myCity.cityGreeting() //Hello, New York


