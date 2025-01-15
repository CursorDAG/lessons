// const asyncFn = async () => {
//     throw new Error('Error')
// }

// asyncFn()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))

const timerPromise = () =>
    new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    await timerPromise()
    console.log('Timer ended')
}

asyncFn()

console.log('End of script')



