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
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()

console.log('End of script')
