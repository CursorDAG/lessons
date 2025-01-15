const getData = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
