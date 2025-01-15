//деструктуризация

const userProfile = {
    userName: 'John',
    commetsQty: 10,
    hasSigned: false,
}

const { userName, commetsQty, hasSigned } = userProfile

//деструктуризация массива

const myArray = [1, 2, 3, 4, 5]

const [a, b, c] = myArray

//деструктуризация функции

const userInfo = ({ userName, commetsQty }) => {
    if (!commetsQty) return `User ${userName} has no comments`
    return `User ${userName} has ${commetsQty} comments`
}

export default userProfile
