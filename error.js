const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log('Произошла ошибка:', error.message)
}

console.log('Continue...')
