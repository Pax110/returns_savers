const User = require('../models/user')

console.log('Creating a user!')

const username = process.argv[2]
const email = process.argv[3]
const password = process.argv[4]
const user = {
    username,
    email,
    password
}

console.log('Creating user', user)

User.createUser(user).then((userId) => {
    console.log("created user with id", userId)
})