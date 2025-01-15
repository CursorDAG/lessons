//значения параметров функции по умолчанию

// const myFn = (a, b = 1) => a * b

// console.log(myFn(10,2))

const newPost = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt,
    }
}

const firstPost = {
    id: 1,
    author: 'Bogdan',
}

console.log(newPost(firstPost))
