const mongoose = require('mongoose')

//const User = mongoose.model('User', {

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    address : String,
    province: String,
    city : String,
    postalCode : String,
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

const User = mongoose.model('User', userSchema)

//user/
async function createUser(userData){
    let newUser = new User(userData)
    let createdUser = await newUser.save()
    console.log('created with id...',createdUser.id)
    return createdUser.id
}

module.exports = {
    createUser
}