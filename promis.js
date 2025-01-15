// Promise  - это объект, который представляет собой будущее значение, которое может быть доступно в будущем или нет.

// Promise может находиться в одном из трех состояний:
// 1. Pending (ожидание) - начальное состояние, когда Promise еще не выполнена и не отклонена.
// 2. Fulfilled (выполнено) - состояние, когда Promise успешно выполнена и возвращает значение.
// 3. Rejected (отклонено) - состояние, когда Promise была отклонена и возвращает значение.

// Promise может быть создан с помощью конструктора Promise.

//пример:

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 1000)
})

console.log(promise.then(data => console.log(data)))

