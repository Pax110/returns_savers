const mongoose = require('./mongooseDb')

const User = mongoose.model('User',{
    firstName : String,
    lastName : String,
    email : String,
    address : String,
    province: String,
    city : String,
    postalCode : String,
    username : String,
    password : String,
    role : {
        type: String,
        default : 'user'
    },
    createdAt: {
        type: Date,
        default : Date.now
    }
})

async function createUser(useData) {
    let newUser = new User(useData)
    let createdUser = await newUser.save()
    return createdUser.id
}

async function findUserByEmail(email) {
    return User.findOne({ email })
}

async function findUserByUsername(username) {
    return User.findOne({ username })
}

async function findById(id) {
    let fullUserRecord = await User.findById(id)
    let userToReturn = {
        id: fullUserRecord.id,
        email: fullUserRecord.email
    }   
    return userToReturn
}

async function listUsers() {
    return User.find({})
}
module.exports = {
    createUser,
    findUserByEmail,
    findById,
    listUsers,
    findUserByUsername
}